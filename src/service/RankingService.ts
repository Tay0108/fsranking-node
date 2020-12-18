import {
  Category,
  Nationality,
  PlaceToPoints,
  Player,
  Result,
  Tournament,
  TournamentTier
} from "../model";

const debug = require("debug")("ranking.service");

export class RankingService {
  async get(categoryId: number, transaction?) {
    const category = await Category.findByPk(categoryId, { transaction });
    const gender: string = category.gender; // TODO: both genders

    const tournamentTiers = await TournamentTier.findAll();
    const tournamentWeights = new Map();

    (
      await Tournament.findAll({
        attributes: ["id", "tournamentTierId"],
        raw: true
      })
    ).forEach((obj) => {
      const weight = tournamentTiers.find(
        (tier) => tier.id === obj.tournamentTierId
      ).weight;
      tournamentWeights.set(obj.id, weight);
    });

    const results = await Result.findAll({
      where: { categoryId },
      transaction
    });
    const placeToPoints = await PlaceToPoints.findAll({
      raw: true,
      transaction
    });

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
      if (!ranking.has(result.playerId)) {
        ranking.set(result.playerId, {
          ...players.filter((player) => player.id === result.playerId)[0],
          points:
            placeToPoints.filter((entry) => entry.place === result.place)[0]
              .points * tournamentWeights.get(result.tournamentId)
        });
      } else {
        const rankingEntry = ranking.get(result.playerId);
        rankingEntry.points +=
          placeToPoints.filter((entry) => entry.place === result.place)[0]
            .points * tournamentWeights.get(result.tournamentId);
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
}
