import { CategoryService } from "../../service/CategoryService";

const debug = require("debug")("category.get");

const categoryService = new CategoryService();

const categoryRoutes = {
  getAll: async (req, res) => {
    try {
      const allCategorys = await categoryService.getAll();
      res.json(allCategorys);
    } catch (error) {
      debug(error);
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const category = await categoryService.getById(id);
      res.json(category);
    } catch (error) {
      debug(error);
    }
  }
};

export const getCategory = (app) => {
  app.get("/category", categoryRoutes.getAll);
  app.get("/category/:id", categoryRoutes.getById);
};
