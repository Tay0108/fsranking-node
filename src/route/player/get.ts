const debug = require("debug")("player.get");

const playerRoutes = {
  getAll: async (req, res) => {
    try {
      res.json({});
    } catch (error) {
      debug(error);
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;

    try {
      res.json({ id: id });
    } catch (error) {
      debug(error);
    }
  },
};

const getPlayer = (app) => {
  app.get("/player", playerRoutes.getAll);
  app.get("/player/:id", playerRoutes.getById);
};

export { getPlayer };
