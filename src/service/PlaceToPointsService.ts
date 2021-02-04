import { PlaceToPointsAttributes } from "../model/placeToPointsModel";
import { PlaceToPoints } from "../model";

const debug = require("debug")("placeToPoints.service");

export class PlaceToPointsService {
  create({ place, points }: PlaceToPointsAttributes, transaction?) {
    return PlaceToPoints.create(
      {
        place,
        points
      },
      { transaction }
    );
  }

  getPointsByPlace(place: number, transaction?) {
    return PlaceToPoints.findOne({ transaction });
  }

  getAll(transaction?) {
    return PlaceToPoints.findAll({ transaction });
  }

  async delete(place, transaction?) {
    const placeToPoints = await PlaceToPoints.findByPk(place, {
      transaction
    });
    if (placeToPoints === null) {
      throw new Error("PlaceToPoints entry not found");
    }
    await placeToPoints.destroy({ transaction });
  }
  update({ place, points }: PlaceToPointsAttributes, transaction?) {
    return PlaceToPoints.update(
      {
        points
      },
      { where: { place }, transaction }
    );
  }
}
