import { NationalityService } from "../../service/NationalityService";
import { dbConfig } from "../../model";

const debug = require("debug")("nationality.patch");

const nationalityService = new NationalityService();

const nationalityRoutes = {
  patch: async (req, res) => {
    const nationalityId = req.params.id;

    let nationality;

    try {
      nationality = await dbConfig.transaction(async (transaction) => {
        const nationalityFound =
          (await nationalityService.getById(nationalityId, transaction)) !==
          null;

        if (!nationalityFound) {
          throw new Error("Nationality not found");
        }

        await nationalityService.update(
          { id: nationalityId, ...req.body },
          transaction
        );

        return nationalityService.getById(nationalityId, transaction);
      });
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
    return res.json(nationality);
  }
};

export const patchNationality = (app) => {
  app.patch("/nationality/:id", nationalityRoutes.patch);
};
