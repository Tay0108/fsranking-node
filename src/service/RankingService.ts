import { Category, PlaceToPoints, Player, Result, Tournament } from "../model";

const debug = require("debug")("ranking.service");

export class RankingService {
  async get(categoryId: number, transaction?) {
    const category = await Category.findByPk(categoryId, { transaction });
    const gender: string = category.gender; // TODO: both genders

    const tournamentWeights = new Map();

    (await Tournament.findAll({
      attributes: ["id", "weight"],
      raw: true
    })).forEach(obj => {
      tournamentWeights.set(obj.id, obj.weight);
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
        transaction
      });
    } else {
      players = await Player.findAll({
        where: { gender },
        raw: true,
        transaction
      });
    }

    const ranking = new Map();

    results.forEach((result) => {
      if (!ranking.has(result.playerId)) {
        ranking.set(result.playerId, {
          ...players.filter((player) => player.id === result.playerId)[0],
          points: placeToPoints.filter(
            (entry) => entry.place === result.place
          )[0].points * tournamentWeights.get(result.tournamentId)
        });
      } else {
        const rankingEntry = ranking.get(result.playerId);
        rankingEntry.points += placeToPoints.filter(
          (entry) => entry.place === result.place
        )[0].points * tournamentWeights.get(result.tournamentId);
      }
    });

    const sortedRankingByPoints = Array.from(ranking.values()).sort(
      (playerA, playerB) => playerB.points - playerA.points
    );

    return sortedRankingByPoints;
  }
}
