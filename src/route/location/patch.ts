import { LocationService } from "../../service/LocationService";
import { dbConfig } from "../../model";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { body, param } from "express-validator";
import { validateRequest } from "../../service/RequestValidationService";

const debug = require("debug")("location.patch");

const locationService = new LocationService();

const locationRoutes = {
  patch: async (req, res, next) => {
    const locationId = req.params.id;

    let location;

    try {
      location = await dbConfig.transaction(async (transaction) => {
        const locationFound =
          (await locationService.getById(locationId, transaction)) !== null;

        if (!locationFound) {
          throw new NotFoundError("Location not found");
        }

        await locationService.update(
          { id: locationId, ...req.body },
          transaction
        );

        return locationService.getById(locationId, transaction);
      });
    } catch (error) {
      debug(error);
      next(error);
    }
    return res.json(location);
  }
};

export const patchLocation = (app) => {
  app.patch(
    "/location/:id",
    [
      param("id", "Id has to be number.").isInt(),
      body().custom((body) => {
        if (Object.entries(body).length === 0 && body.constructor === Object) {
          throw new BadRequestError("Request has empty body.");
        }
        return Promise.resolve();
      }),
      body("name", "Name cannot be empty.").optional().not().isEmpty(),
      body("latitude", "Latitude has to be a number.").optional().isNumeric(),
      body("longitude", "Longitude has to be a number.").optional().isNumeric()
    ],
    validateRequest,
    locationRoutes.patch
  );
};
