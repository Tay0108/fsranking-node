import { NationalityService } from "../../service/NationalityService";

const debug = require("debug")("nationality.post");

const nationalityService = new NationalityService();

const nationalityRoutes = {
  post: async (req, res) => {
    try {
      const nationality = await nationalityService.create(req.body);
      return res.json(nationality);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  },
};

export const postNationality = (app) => {
  app.post("/nationality", nationalityRoutes.post);
};

