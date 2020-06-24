import { TournamentService } from "../../service/TournamentService";
import { dbConfig } from "../../model";

const debug = require("debug")("tournament.patch");

const tournamentService = new TournamentService();

const tournamentRoutes = {
  patch: async (req, res) => {
    const tournamentId = req.params.id;

    let tournament;

    try {
      tournament = await dbConfig.transaction(async (transaction) => {
        const tournamentFound =
          (await tournamentService.getById(tournamentId, transaction)) !==
          null;

        if (!tournamentFound) {
          throw new Error("Tournament not found");
        }

        await tournamentService.update(
          { id: tournamentId, ...req.body },
          transaction
        );

        return tournamentService.getById(tournamentId, transaction);
      });
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
    return res.json(tournament);
  }
};

export const patchTournament = (app) => {
  app.patch("/tournament/:id", tournamentRoutes.patch);
};
