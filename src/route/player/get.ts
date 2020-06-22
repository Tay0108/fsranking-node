import { PlayerService } from "../../service/PlayerService";

const debug = require("debug")("player.get");

const playerService = new PlayerService();

const playerRoutes = {
  getAll: async (req, res) => {
    try {
      const allPlayers = await playerService.getAll();
      res.json(allPlayers);
    } catch (error) {
      debug(error);
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const player = await playerService.getById(id);
      res.json(player);
    } catch (error) {
      debug(error);
    }
  }
};

export const getPlayer = (app) => {
  app.get("/player", playerRoutes.getAll);
  app.get("/player/:id", playerRoutes.getById);
};
