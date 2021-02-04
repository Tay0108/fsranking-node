import { ResultAttributes } from "../model/resultModel";
import { Result } from "../model";

const debug = require("debug")("result.service");

export class ResultService {
  create(
    { tournamentId, categoryId, playerId, place }: ResultAttributes,
    transaction?
  ) {
    return Result.create(
      {
        tournamentId,
        categoryId,
        playerId,
        place
      },
      { transaction }
    );
  }

  getOne(
    tournamentId: number,
    categoryId: number,
    playerId: number,
    transaction?
  ) {
    return Result.findOne({ transaction });
  }

  getAll(transaction?) {
    return Result.findAll({ transaction });
  }

  getAllByCategoryId(categoryId, transaction?) {
    return Result.findAll({
      where: { categoryId },
      transaction
    });
  }

  async delete(
    tournamentId: number,
    categoryId: number,
    playerId: number,
    transaction?
  ) {
    const result = await Result.findOne({
      where: { tournamentId, categoryId, playerId },
      transaction
    });
    if (result === null) {
      throw new Error("Result not found");
    }
    await result.destroy({ transaction });
  }
  update(
    { tournamentId, categoryId, playerId, place }: ResultAttributes,
    transaction?
  ) {
    return Result.update(
      {
        place
      },
      { where: { tournamentId, categoryId, playerId }, transaction }
    );
  }
}
