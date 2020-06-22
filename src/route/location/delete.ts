import { LocationService } from "../../service/LocationService";
import { dbConfig } from "../../model";

const debug = require("debug")("location.delete");

const locationService = new LocationService();

const locationRoutes = {
  delete: async (req, res) => {
    const locationId = req.params.id;

    try {
      await dbConfig.transaction(async (transaction) => {
        await locationService.delete(locationId, transaction);
      });
      res.sendStatus(204);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  }
};

export const deleteLocation = (app) => {
  app.delete("/location/:id", locationRoutes.delete);
};
