import { CompetitionService } from "../../service/CompetitionService";

const debug = require("debug")("competition.get");

const competitionService = new CompetitionService();

const competitionRoutes = {
  getAll: async (req, res) => {
    try {
      const allCompetitions = await competitionService.getAll();
      res.json(allCompetitions);
    } catch (error) {
      debug(error);
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const competition = await competitionService.getById(id);
      res.json(competition);
    } catch (error) {
      debug(error);
    }
  },
};

export const getCompetition = (app) => {
  app.get("/competition", competitionRoutes.getAll);
  app.get("/competition/:id", competitionRoutes.getById);
};
