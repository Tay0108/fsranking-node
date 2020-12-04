import { TournamentAttributes } from "../model/tournamentModel";
import { Category, Location, Result, Tournament } from "../model";
import { CategoryResult } from "../types/types";

const debug = require("debug")("tournament.service");

export class TournamentService {
  create({ name, weight }: TournamentAttributes, transaction?) {
    return Tournament.create(
      {
        name,
        weight
      },
      { transaction }
    );
  }

  getById(tournamentId: number, transaction?) {
    return Tournament.findByPk(tournamentId, {
      include: [
        {
          model: Category,
          through: { attributes: [] },
          include: [
            {
              model: Result,
              where: {
                tournamentId: tournamentId
              }
            }
          ]
        }
      ],
      transaction
    });
  }

  getAll(transaction?) {
    return Tournament.findAll({ transaction });
  }

  getAllWithLocation(transaction?) {
    return Tournament.findAll({
      transaction,
      raw: true,
      nest: true,
      include: [
        {
          model: Location
        }
      ]
    });
  }

  async delete(tournamentId: number, transaction?) {
    const tournament = await Tournament.findByPk(tournamentId, {
      transaction
    });
    if (tournament === null) {
      throw new Error("Tournament not found");
    }
    await tournament.destroy({ transaction });
  }

  update({ id, name }: TournamentAttributes, transaction?) {
    return Tournament.update(
      {
        name
      },
      { where: { id }, transaction }
    );
  }

  addResults(
    tournamentId: number,
    categoryId: number,
    results: Array<CategoryResult>,
    transaction?
  ) {
    results.forEach(({ playerId, place }) => {
      Result.create({ tournamentId, categoryId, playerId, place }, transaction);
    });
  }
}
