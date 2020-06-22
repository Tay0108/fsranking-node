import { PlayerService } from "../../service/PlayerService";

const debug = require("debug")("player.post");

const playerService = new PlayerService();

const playerRoutes = {
  post: async (req, res) => {
    try {
      const player = await playerService.create(req.body);
      return res.json(player);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  }
};

export const postPlayer = (app) => {
  app.post("/player", playerRoutes.post);
};
