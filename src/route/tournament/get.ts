import { TournamentService } from "../../service/TournamentService";

const debug = require("debug")("tournament.get");

const tournamentService = new TournamentService();

const tournamentRoutes = {
  getAll: async (req, res) => {
    try {
      const allTournaments = await tournamentService.getAll();
      res.json(allTournaments);
    } catch (error) {
      debug(error);
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const tournament = await tournamentService.getById(id);
      res.json(tournament);
    } catch (error) {
      debug(error);
    }
  }
};

export const getTournament = (app) => {
  app.get("/tournament", tournamentRoutes.getAll);
  app.get("/tournament/:id", tournamentRoutes.getById);
};
