import { CategoryService } from "../../service/CategoryService";

const debug = require("debug")("category.post");

const categoryService = new CategoryService();

const categoryRoutes = {
  post: async (req, res) => {
    try {
      const category = await categoryService.create(req.body);
      return res.json(category);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  },
};

export const postCategory = (app) => {
  app.post("/category", categoryRoutes.post);
};

