import { CategoryService } from "../../service/CategoryService";
import { dbConfig } from "../../model";

const debug = require("debug")("category.patch");

const categoryService = new CategoryService();

const categoryRoutes = {
  patch: async (req, res) => {
    const categoryId = req.params.id;

    let category;

    try {
      category = await dbConfig.transaction(async (transaction) => {
        const categoryFound =
          (await categoryService.getById(categoryId, transaction)) !== null;

        if (!categoryFound) {
          throw new Error("Category not found");
        }

        await categoryService.update(
          { id: categoryId, ...req.body },
          transaction
        );

        return categoryService.getById(categoryId, transaction);
      });
    } catch (error) {
      debug(error);
      return res.sendStatus(500);
    }
    return res.json(category);
  }
};

export const patchCategory = (app) => {
  app.patch("/category/:id", categoryRoutes.patch);
};
