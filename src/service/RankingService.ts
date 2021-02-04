import {
  Category,
  Nationality,
  Player,
  Tournament,
  TournamentTier
} from "../model";
import { ResultService } from "./ResultService";
import { PlaceToPointsService } from "./PlaceToPointsService";

const debug = require("debug")("ranking.service");

const resultService = new ResultService();
const placeToPointsService = new PlaceToPointsService();

export class RankingService {
  async getResultsByCategory(category, scaleByYears, transaction?) {
    const categoryId = category.id;
    const gender: string = category.gender;

    const tournamentTiers = await TournamentTier.findAll();
    const tournamentWeights = new Map();
    const tournamentYears = new Map();

    const currentYear = new Date().getFullYear();

    const scaleByYearsFactors: Map<number, number> = new Map();

    if (scaleByYears) {
      scaleByYearsFactors.set(1, 1);
      scaleByYearsFactors.set(2, 0.75);
      scaleByYearsFactors.set(3, 0.5);
      scaleByYearsFactors.set(4, 0.25);
    }

    (
      await Tournament.findAll({
        attributes: ["id", "date", "tournamentTierId"],
        raw: true
      })
    ).forEach((obj) => {
      if (scaleByYears) {
        const year = new Date(obj.date).getFullYear();
        tournamentYears.set(obj.id, year);
      }
      const weight = tournamentTiers.find(
        (tier) => tier.id === obj.tournamentTierId
      ).weight;
      tournamentWeights.set(obj.id, weight);
    });

    const results = await resultService.getAllByCategoryId(
      categoryId,
      transaction
    );

    const placeToPoints = await placeToPointsService.getAll(transaction);

    let players;

    if (gender === "Both") {
      // TODO: refactor it
      players = await Player.findAll({
        raw: true,
        nest: true,
        include: [
          {
            model: Nationality,
            attributes: ["id", "name", "abbreviation"]
          }
        ],
        transaction
      });
    } else {
      players = await Player.findAll({
        where: { gender },
        raw: true,
        nest: true,
        include: [
          {
            model: Nationality,
            attributes: ["id", "name", "abbreviation"]
          }
        ],
        transaction
      });
    }

    const ranking = new Map();

    results.forEach((result) => {
      let yearScalingFactor = 1;
      if (scaleByYears) {
        const yearDifference =
          tournamentYears.get(result.tournamentId) - currentYear;
        yearScalingFactor = scaleByYearsFactors.has(yearDifference)
          ? scaleByYearsFactors.get(yearDifference)
          : 0;
      }
      if (!ranking.has(result.playerId)) {
        ranking.set(result.playerId, {
          ...players.filter((player) => player.id === result.playerId)[0],
          points:
            placeToPoints.filter((entry) => entry.place === result.place)[0]
              .points *
            tournamentWeights.get(result.tournamentId) *
            yearScalingFactor
        });
      } else {
        const rankingEntry = ranking.get(result.playerId);
        rankingEntry.points +=
          placeToPoints.filter((entry) => entry.place === result.place)[0]
            .points *
          tournamentWeights.get(result.tournamentId) *
          yearScalingFactor;
      }
    });

    const sortedRankingByPoints = Array.from(ranking.values()).sort(
      (playerA, playerB) => playerB.points - playerA.points
    );

    const rankingWithPlaces = sortedRankingByPoints.map((player, place) => {
      player.place = ++place;
      player.trend = 0; // TODO: now trend is mocked, unmock it
      return player;
    });

    return rankingWithPlaces;
  }

  async get(scaleByYears: boolean, transaction?) {
    const categories = await Category.findAll({
      transaction
    });

    const ranking = {};

    for (const category of categories) {
      const categoryData = await this.getResultsByCategory(
        category,
        scaleByYears,
        transaction
      );
      if (!ranking[category.gender]) {
        ranking[category.gender] = {};
      }

      ranking[category.gender][category.name] = categoryData;
    }

    return ranking;
  }
}
