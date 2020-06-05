import { CompetitionAttributes } from "../model/competitionModel";
import { Category, Competition, Result } from "../model";
import { CategoryResult } from "../types/types";

const debug = require("debug")("competition.service");

export class CompetitionService {
  create({ name, weight }: CompetitionAttributes, transaction?) {
    return Competition.create(
      {
        name,
        weight
      },
      { transaction }
    );
  }

  getById(competitionId: number, transaction?) {
    return Competition.findByPk(competitionId, {
      include: [
        {
          model: Category
        }
      ],
      transaction
    });
  }

  getAll(transaction?) {
    return Competition.findAll({ transaction });
  }

  async delete(competitionId: number, transaction?) {
    const competition = await Competition.findByPk(competitionId, {
      transaction
    });
    if (competition === null) {
      throw new Error("Competition not found");
    }
    await competition.destroy({ transaction });
  }

  update({ id, name }: CompetitionAttributes, transaction?) {
    return Competition.update(
      {
        name
      },
      { where: { id }, transaction }
    );
  }

  addResults(
    competitionId: number,
    categoryId: number,
    results: Array<CategoryResult>,
    transaction?
  ) {
    results.forEach(({ playerId, place }) => {
      Result.create(
        { competitionId, categoryId, playerId, place },
        transaction
      );
    });
  }
}
