import { PlayerService } from "../../service/PlayerService";
import { dbConfig } from "../../model";

const debug = require("debug")("player.delete");

const playerService = new PlayerService();

const playerRoutes = {
  delete: async (req, res) => {
    const playerId = req.params.id;

    try {
      await dbConfig.transaction(async (transaction) => {
        await playerService.delete(playerId, transaction);
      });
      res.sendStatus(204);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  }
};

export const deletePlayer = (app) => {
  app.delete("/player/:id", playerRoutes.delete);
};
