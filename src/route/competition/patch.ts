import { CompetitionService } from "../../service/CompetitionService";
import { dbConfig } from "../../model";

const debug = require("debug")("competition.patch");

const competitionService = new CompetitionService();

const competitionRoutes = {
  patch: async (req, res) => {
    const competitionId = req.params.id;

    let competition;

    try {
      competition = await dbConfig.transaction(async (transaction) => {
        const competitionFound =
          (await competitionService.getById(competitionId, transaction)) !==
          null;

        if (!competitionFound) {
          throw new Error("Competition not found");
        }

        await competitionService.update(
          { id: competitionId, ...req.body },
          transaction
        );

        return competitionService.getById(competitionId, transaction);
      });
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
    return res.json(competition);
  }
};

export const patchCompetition = (app) => {
  app.patch("/competition/:id", competitionRoutes.patch);
};
