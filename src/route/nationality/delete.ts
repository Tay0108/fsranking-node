import { NationalityService } from "../../service/NationalityService";
import { dbConfig } from "../../model";

const debug = require("debug")("nationality.delete");

const nationalityService = new NationalityService();

const nationalityRoutes = {
  delete: async (req, res) => {
    const nationalityId = req.params.id;

    try {
      await dbConfig.transaction(async (transaction) => {
        await nationalityService.delete(nationalityId, transaction);
      });
      res.sendStatus(204);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  },
};

export const deleteNationality = (app) => {
  app.delete("/nationality/:id", nationalityRoutes.delete);
};
