import { LocationService } from "../../service/LocationService";

const debug = require("debug")("location.get");

const locationService = new LocationService();

const locationRoutes = {
  getAll: async (req, res) => {
    try {
      const allLocations = await locationService.getAll();
      res.json(allLocations);
    } catch (error) {
      debug(error);
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const location = await locationService.getById(id);
      res.json(location);
    } catch (error) {
      debug(error);
    }
  },
};

export const getLocation = (app) => {
  app.get("/location", locationRoutes.getAll);
  app.get("/location/:id", locationRoutes.getById);
};
