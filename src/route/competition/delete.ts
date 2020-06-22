import { CompetitionService } from "../../service/CompetitionService";
import { dbConfig } from "../../model";

const debug = require("debug")("competition.delete");

const competitionService = new CompetitionService();

const competitionRoutes = {
  delete: async (req, res) => {
    const competitionId = req.params.id;

    try {
      await dbConfig.transaction(async (transaction) => {
        await competitionService.delete(competitionId, transaction);
      });
      res.sendStatus(204);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  }
};

export const deleteCompetition = (app) => {
  app.delete("/competition/:id", competitionRoutes.delete);
};
