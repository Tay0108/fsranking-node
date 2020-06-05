import { CompetitionService } from "../../service/CompetitionService";
import { CategoryResult } from "../../types/types";
import { dbConfig } from "../../model";

const debug = require("debug")("competition.post");

const competitionService = new CompetitionService();

const competitionRoutes = {
  post: async (req, res) => {
    let competition;

    try {
      competition = await dbConfig.transaction(async (transaction) => {
        const newCompetition = await competitionService.create(
          req.body,
          transaction
        );

        const results: Map<number, Array<CategoryResult>> = req.body.results; // TODO: converting results to Map()

        results.forEach((categoryResults, categoryId) => {
          competitionService.addResults(
            newCompetition.id,
            categoryId,
            categoryResults,
            transaction
          );
        });
        return newCompetition;
      });

      return res.json(competition);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  }
};

export const postCompetition = (app) => {
  app.post("/competition", competitionRoutes.post);
};
