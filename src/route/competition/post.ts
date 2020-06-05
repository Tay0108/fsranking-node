import { CompetitionService } from "../../service/CompetitionService";

const debug = require("debug")("competition.post");

const competitionService = new CompetitionService();

const competitionRoutes = {
  post: async (req, res) => {
    try {
      const competition = await competitionService.create(req.body);
      return res.json(competition);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  },
};

export const postCompetition = (app) => {
  app.post("/competition", competitionRoutes.post);
};

