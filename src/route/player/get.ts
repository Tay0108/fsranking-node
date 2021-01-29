import { PlayerService } from "../../service/PlayerService";
import { dbConfig, Player } from "../../model";

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
      const id: number = +req.params.id;

      const player = await dbConfig.transaction(async (transaction) => {
        const playerData = await playerService.getByIdWithNationality(
          id,
          transaction
        );

        if (playerData === null) {
          throw new Error("Player of given id not found.");
        }

        const gender = (await Player.findByPk(id, { transaction })).gender;

        playerData.statistics = await playerService.getPlayerStatistics(
          id,
          transaction
        );

        playerData.history = await playerService.getPlayerHistory(
          id,
          transaction
        );

        // TODO: can it be done faster?
        playerData.rankingPlace = await playerService.getPlayerRankingPlacesByCategory(
          id,
          gender,
          transaction
        );

        return playerData;
      });

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
