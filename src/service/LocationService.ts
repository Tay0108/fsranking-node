import { LocationAttributes } from "../model/locationModel";
import { Location } from "../model";

const debug = require("debug")("location.service");

export class LocationService {
  create({ name, latitude, longitude }: LocationAttributes, transaction?) {
    return Location.create(
      {
        name,
        latitude,
        longitude
      },
      { transaction }
    );
  }

  getById(locationId: number, transaction?) {
    return Location.findByPk(locationId, { transaction });
  }

  getAll(transaction?) {
    return Location.findAll({ transaction });
  }

  async delete(locationId: number, transaction?) {
    const location = await Location.findByPk(locationId, {
      transaction
    });
    if (location === null) {
      throw new Error("Location not found");
    }
    await location.destroy({ transaction });
  }
  update({ id, name, latitude, longitude }: LocationAttributes, transaction?) {
    return Location.update(
      {
        name,
        latitude,
        longitude
      },
      { where: { id }, transaction }
    );
  }
}
