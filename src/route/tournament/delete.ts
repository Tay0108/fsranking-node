import { TournamentService } from "../../service/TournamentService";
import { dbConfig } from "../../model";

const debug = require("debug")("tournament.delete");

const tournamentService = new TournamentService();

const tournamentRoutes = {
  delete: async (req, res) => {
    const tournamentId = req.params.id;

    try {
      await dbConfig.transaction(async (transaction) => {
        await tournamentService.delete(tournamentId, transaction);
      });
      res.sendStatus(204);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  }
};

export const deleteTournament = (app) => {
  app.delete("/tournament/:id", tournamentRoutes.delete);
};
