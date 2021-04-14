import { CategoryService } from "../../service/CategoryService";
import { dbConfig } from "../../model";
import { param } from "express-validator";
import { validateRequest } from "../../service/RequestValidationService";

const debug = require("debug")("category.delete");

const categoryService = new CategoryService();

const categoryRoutes = {
  delete: async (req, res, next) => {
    const categoryId = req.params.id;

    try {
      await dbConfig.transaction(async (transaction) => {
        await categoryService.delete(categoryId, transaction);
        // TODO: delete all associated results associated with this category
      });
      res.sendStatus(204);
    } catch (error) {
      debug(error);
      next(error);
    }
  }
};

export const deleteCategory = (app) => {
  app.delete(
    "/category/:id",
    [param("id", "Id has to be number.").isInt()],
    validateRequest,
    categoryRoutes.delete
  );
};
