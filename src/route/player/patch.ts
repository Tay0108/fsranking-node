import { PlayerService } from "../../service/PlayerService";
import { dbConfig } from "../../model";

const debug = require("debug")("player.patch");

const playerService = new PlayerService();

const playerRoutes = {
  patch: async (req, res) => {
    const playerId = req.params.id;

    let player;

    try {
      player = await dbConfig.transaction(async (transaction) => {
        const playerFound = await playerService.getById(playerId, transaction) !== null;

        if (!playerFound) {
          throw new Error("Player not found");
        }

        await playerService.update({ id: playerId, ...req.body }, transaction);

        return playerService.getById(playerId, transaction);
      });
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
    return res.json(player);
  }
};

export const patchPlayer = (app) => {
  app.patch("/player/:id", playerRoutes.patch);
};
