import { LocationService } from "../../service/LocationService";

const debug = require("debug")("location.post");

const locationService = new LocationService();

const locationRoutes = {
  post: async (req, res) => {
    try {
      const location = await locationService.create(req.body);
      return res.json(location);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  },
};

export const postLocation = (app) => {
  app.post("/location", locationRoutes.post);
};

