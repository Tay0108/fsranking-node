import { TournamentService } from "../../service/TournamentService";
import { CategoryResult } from "../../types/types";
import { dbConfig } from "../../model";

const debug = require("debug")("tournament.post");

const tournamentService = new TournamentService();

const tournamentRoutes = {
  post: async (req, res) => {
    let tournament;

    try {
      tournament = await dbConfig.transaction(async (transaction) => {
        const newTournament = await tournamentService.create(
          req.body,
          transaction
        );

        const results: Map<number, Array<CategoryResult>> = req.body.results; // TODO: converting results to Map()

        results.forEach((categoryResults, categoryId) => {
          tournamentService.addResults(
            newTournament.id,
            categoryId,
            categoryResults,
            transaction
          );
        });
        return newTournament;
      });

      return res.json(tournament);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  }
};

export const postTournament = (app) => {
  app.post("/tournament", tournamentRoutes.post);
};
