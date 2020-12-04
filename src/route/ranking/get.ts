import { RankingService } from "../../service/RankingService";

const debug = require("debug")("ranking.get");

const rankingService = new RankingService();

const rankingRoutes = {
  get: async (req, res) => {
    try {
      const ranking = await rankingService.get(1); // TODO: parametrize it, hardcoded to: battle, male
      res.json(ranking);
    } catch (error) {
      debug(error);
    }
  }
};

export const getRanking = (app) => {
  app.get("/ranking", rankingRoutes.get);
};
