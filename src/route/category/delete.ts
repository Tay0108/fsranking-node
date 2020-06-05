import { CategoryService } from "../../service/CategoryService";
import { dbConfig } from "../../model";

const debug = require("debug")("category.delete");

const categoryService = new CategoryService();

const categoryRoutes = {
  delete: async (req, res) => {
    const categoryId = req.params.id;

    try {
      await dbConfig.transaction(async (transaction) => {
        await categoryService.delete(categoryId, transaction);
      });
      res.sendStatus(204);
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
  },
};

export const deleteCategory = (app) => {
  app.delete("/category/:id", categoryRoutes.delete);
};
