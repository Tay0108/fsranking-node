import { PlayerAttributes } from "../model/playerModel";
import { Nationality, Player, Result, Tournament } from "../model";
import { PlayerStatistics } from "../types/types";
import { Op } from "sequelize";

const debug = require("debug")("player.service");

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
