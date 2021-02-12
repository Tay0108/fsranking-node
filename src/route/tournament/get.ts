import { TournamentService } from "../../service/TournamentService";
import { TournamentAttributes } from "../../model/tournamentModel";

const debug = require("debug")("tournament.get");

const tournamentService = new TournamentService();

const tournamentRoutes = {
  getAll: async (req, res) => {
    try {
      const allTournaments = await tournamentService.getAll();
      const today: Date = new Date();
      const pastTournaments: Array<TournamentAttributes> = [];
      const upcomingTournaments: Array<TournamentAttributes> = [];

      allTournaments.forEach((tournament) => {
        const tournamentDate: Date = new Date(tournament.date);
        if (tournamentDate < today) {
          pastTournaments.push({
            ...tournament,
            date: tournamentDate.toISOString().split('T')[0]
          });
        } else {
          upcomingTournaments.push({
            ...tournament,
            date: tournamentDate.toISOString().split('T')[0]
          });
        }
      });

      res.json({
        pastTournaments,
        upcomingTournaments
      });
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
