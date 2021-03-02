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

      const pastTournamentLocations = new Set();
      const upcomingTournamentLocations = new Set();

      allTournaments.forEach((tournament) => {
        const tournamentDate: Date = new Date(tournament.date);
        if (tournamentDate < today) {
          pastTournaments.push({
            ...tournament,
            date: tournamentDate.toISOString().split("T")[0]
          });
          if (tournament.locationId) {
            pastTournamentLocations.add(tournament.locationId);
          }
        } else {
          upcomingTournaments.push({
            ...tournament,
            date: tournamentDate.toISOString().split("T")[0]
          });
          if (tournament.locationId) {
            upcomingTournamentLocations.add(tournament.locationId);
          }
        }
      });

      const pastTournamentsCount = pastTournaments.length;
      const pastTournamentLocationsCount = pastTournamentLocations.size;
      const upcomingTournamentsCount = upcomingTournaments.length;
      const upcomingTournamentLocationsCount = upcomingTournamentLocations.size;

      res.json({
        pastTournaments,
        upcomingTournaments,
        pastTournamentsCount,
        pastTournamentLocationsCount,
        upcomingTournamentsCount,
        upcomingTournamentLocationsCount
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
