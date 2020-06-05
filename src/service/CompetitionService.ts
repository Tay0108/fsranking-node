import { CompetitionAttributes } from "../model/competitionModel";
import { Competition } from "../model";

const debug = require("debug")("competition.service");

export class CompetitionService {
  create({ name }: CompetitionAttributes, transaction?) {
    return Competition.create(
      {
        name
      },
      { transaction }
    );
  }

  getById(competitionId: number, transaction?) {
    return Competition.findByPk(competitionId, { transaction });
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
}
