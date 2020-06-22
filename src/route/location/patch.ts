import { LocationService } from "../../service/LocationService";
import { dbConfig } from "../../model";

const debug = require("debug")("location.patch");

const locationService = new LocationService();

const locationRoutes = {
  patch: async (req, res) => {
    const locationId = req.params.id;

    let location;

    try {
      location = await dbConfig.transaction(async (transaction) => {
        const locationFound =
          (await locationService.getById(locationId, transaction)) !== null;

        if (!locationFound) {
          throw new Error("Location not found");
        }

        await locationService.update(
          { id: locationId, ...req.body },
          transaction
        );

        return locationService.getById(locationId, transaction);
      });
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
    return res.json(location);
  }
};

export const patchLocation = (app) => {
  app.patch("/location/:id", locationRoutes.patch);
};
