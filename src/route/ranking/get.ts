import { RankingService } from "../../service/RankingService";

const debug = require("debug")("ranking.get");

const rankingService = new RankingService();

const rankingRoutes = {
  get: async (req, res) => {
    try {
      const ranking = await rankingService.get(true);
      res.json(ranking);
    } catch (error) {
      debug(error);
    }
  },

  getAllTime: async (req, res) => {
    try {
      const ranking = await rankingService.get(false);
      res.json(ranking);
    } catch (error) {
      debug(error);
    }
  }
};

export const getRanking = (app) => {
  app.get("/ranking", rankingRoutes.get);
  app.get("/ranking-all-time", rankingRoutes.getAllTime);
};
