import { NationalityService } from "../../service/NationalityService";

const debug = require("debug")("nationality.get");

const nationalityService = new NationalityService();

const nationalityRoutes = {
  getAll: async (req, res) => {
    try {
      const allNationalities = await nationalityService.getAll();
      res.json(allNationalities);
    } catch (error) {
      debug(error);
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const nationality = await nationalityService.getById(id);
      res.json(nationality);
    } catch (error) {
      debug(error);
    }
  },
};

export const getNationality = (app) => {
  app.get("/nationality", nationalityRoutes.getAll);
  app.get("/nationality/:id", nationalityRoutes.getById);
};
