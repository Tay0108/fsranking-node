import { LocationService } from "../../service/LocationService";
import { param } from "express-validator";
import { validateRequest } from "../../service/RequestValidationService";
import { NotFoundError } from "../../errors/NotFoundError";

const debug = require("debug")("location.get");

const locationService = new LocationService();

const locationRoutes = {
  getAll: async (req, res, next) => {
    try {
      const allLocations = await locationService.getAll();
      res.json(allLocations);
    } catch (error) {
      debug(error);
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const location = await locationService.getById(id);

      if (location == null) {
        throw new NotFoundError("Location of given id not found.");
      }

      res.json(location);
    } catch (error) {
      debug(error);
      next(error);
    }
  }
};

export const getLocation = (app) => {
  app.get("/location", locationRoutes.getAll);
  app.get(
    "/location/:id",
    [param("id", "Id has to be number.").isInt()],
    validateRequest,
    locationRoutes.getById
  );
};
