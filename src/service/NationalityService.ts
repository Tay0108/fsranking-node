import { NationalityAttributes } from "../model/nationalityModel";
import { Nationality } from "../model";

const debug = require("debug")("nationality.service");

export class NationalityService {
  create({ name }: NationalityAttributes, transaction?) {
    return Nationality.create(
      {
        name
      },
      { transaction }
    );
  }

  getById(nationalityId: number, transaction?) {
    return Nationality.findByPk(nationalityId, { transaction });
  }

  getAll(transaction?) {
    return Nationality.findAll({ transaction });
  }

  async delete(nationalityId: number, transaction?) {
    const nationality = await Nationality.findByPk(nationalityId, {
      transaction
    });
    if (nationality === null) {
      throw new Error("Nationality not found");
    }
    await nationality.destroy({ transaction });
  }
  update({ id, name }: NationalityAttributes, transaction?) {
    return Nationality.update(
      {
        name
      },
      { where: { id }, transaction }
    );
  }
}
