import { LocationService } from "../../service/LocationService";
import { body } from "express-validator";
import { validateRequest } from "../../service/RequestValidationService";
import { BadRequestError } from "../../errors/BadRequestError";

const debug = require("debug")("location.post");

const locationService = new LocationService();

const locationRoutes = {
  post: async (req, res, next) => {
    try {
      const location = await locationService.create(req.body);
      return res.json(location);
    } catch (error) {
      debug(error);
      next(error);
    }
  }
};

export const postLocation = (app) => {
  app.post(
    "/location",
    [
      body().custom((body) => {
        if (Object.entries(body).length === 0 && body.constructor === Object) {
          throw new BadRequestError("Request has empty body.");
        }
        return Promise.resolve();
      }),
      body("name", "Name cannot be empty.").not().isEmpty(),
      body("latitude", "Latitude has to be a number.").optional().isNumeric(),
      body("longitude", "Longitude has to be a number.").optional().isNumeric()
    ],
    validateRequest,
    locationRoutes.post
  );
};
