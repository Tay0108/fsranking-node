import { PlayerAttributes } from "../model/playerModel";
import { Player } from "../model";

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

  getAll(transaction?) {
    return Player.findAll({ transaction });
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
