import { LocationService } from "../../service/LocationService";
import { dbConfig } from "../../model";
import { param } from "express-validator";
import { validateRequest } from "../../service/RequestValidationService";

const debug = require("debug")("location.delete");

const locationService = new LocationService();

const locationRoutes = {
  delete: async (req, res, next) => {
    const locationId = req.params.id;

    try {
      await dbConfig.transaction(async (transaction) => {
        await locationService.delete(locationId, transaction);
      });
      res.sendStatus(204);
    } catch (error) {
      debug(error);
      next(error);
    }
  }
};

export const deleteLocation = (app) => {
  app.delete(
    "/location/:id",
    [param("id", "Id has to be number.").isInt()],
    validateRequest,
    locationRoutes.delete
  );
};
