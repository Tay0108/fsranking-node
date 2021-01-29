import { PlayerAttributes } from "../model/playerModel";
import {
  Category,
  Nationality,
  PlaceToPoints,
  Player,
  Result,
  Tournament,
  TournamentTier
} from "../model";
import { PlayerStatistics } from "../types/types";
import { Op } from "sequelize";
import { TournamentAttributes } from "../model/tournamentModel";
import { RankingService } from "./RankingService";

const debug = require("debug")("player.service");

const rankingService = new RankingService();

export class PlayerService {
  create(
    {
      gender,
      firstName,
      lastName,
      nickname,
      birthYear,
      careerStartYear
    }: PlayerAttributes,
    transaction?
  ) {
    return Player.create(
      {
        gender,
        firstName,
        lastName,
        nickname,
        birthYear,
        careerStartYear
      },
      { transaction }
    );
  }

  getById(playerId: number, transaction?) {
    return Player.findByPk(playerId, { transaction });
  }

  getByIdWithNationality(playerId: number, transaction?) {
    return Player.findByPk(playerId, {
      transaction,
      raw: true,
      nest: true,
      include: [
        {
          model: Nationality
        }
      ]
    });
  }

  getAll(transaction?) {
    return Player.findAll({ transaction });
  }

  async getPlayerRankingPlacesByCategory(
    playerId: number,
    gender,
    transaction?
  ) {
    const categories = await Category.findAll({
      where: { gender },
      transaction
    });

    const places = {};

    for (const category of categories) {
      const categoryRanking = await rankingService.getResultsByCategory(
        category,
        transaction
      );
      const player = categoryRanking.find(
        (rankingEntry) => playerId === rankingEntry.id
      );
      if (player) {
        places[category.name] = player.place;
      } else {
        places[category.name] = null;
      }
    }

    return places;
  }

  async getPlayerStatistics(
    playerId: number,
    transaction?
  ): Promise<PlayerStatistics> {
    // TODO: add also statistics by category
    const starts = await Result.count({
      where: {
        playerId
      },
      transaction
    });
    const podiums = await Result.count({
      where: {
        playerId,
        [Op.or]: [
          {
            place: {
              [Op.between]: [1, 3]
            }
          }
        ]
      },
      transaction
    });
    const victories = await Result.count({
      where: {
        playerId,
        place: 1
      },
      transaction
    });
    return {
      starts,
      podiums,
      victories
    };
  }

  async getPlayerHistory(
    id,
    transaction
  ): Promise<Array<TournamentAttributes>> {
    const playerResults = await Result.findAll({
      where: {
        playerId: id
      },
      raw: true,
      include: [
        {
          model: Tournament,
          attributes: ["tournamentTierId", "name", "date"]
        }
      ],
      transaction
    });

    const tournamentTiers = await TournamentTier.findAll();

    const placeToPoints = await PlaceToPoints.findAll();

    const history = playerResults.map((result) => {
      const basePoints = placeToPoints.find(
        (data) => data.place === result.place
      ).points;
      return {
        ...result,
        "tournament.date": result["tournament.date"]
          .toISOString()
          .split("T")[0],
        points:
          basePoints *
          tournamentTiers.find(
            (tier) => tier.id === result["tournament.tournamentTierId"]
          )
      };
    });

    return history;
  }

  async delete(playerId: number, transaction?) {
    const player = await Player.findByPk(playerId, {
      transaction
    });
    if (player === null) {
      throw new Error("Player not found");
    }
    await player.destroy({ transaction });
  }
  update(
    {
      id,
      gender,
      firstName,
      lastName,
      nickname,
      birthYear,
      careerStartYear
    }: PlayerAttributes,
    transaction?
  ) {
    return Player.update(
      {
        gender,
        firstName,
        lastName,
        nickname,
        birthYear,
        careerStartYear
      },
      { where: { id }, transaction }
    );
  }
}
