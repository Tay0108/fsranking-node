import { CategoryService } from "../../service/CategoryService";
import { param } from "express-validator";
import { validateRequest } from "../../service/RequestValidationService";
import { NotFoundError } from "../../errors/NotFoundError";

const debug = require("debug")("category.get");

const categoryService = new CategoryService();

const categoryRoutes = {
  getAll: async (req, res, next) => {
    try {
      const allCategorys = await categoryService.getAll();
      res.json(allCategorys);
    } catch (error) {
      debug(error);
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const category = await categoryService.getById(id);

      if (category == null) {
        throw new NotFoundError("Category of given id not found.");
      }

      res.json(category);
    } catch (error) {
      debug(error);
      next(error);
    }
  }
};

export const getCategory = (app) => {
  app.get("/category", categoryRoutes.getAll);
  app.get(
    "/category/:id",
    [param("id", "Id has to be number.").isInt()],
    validateRequest,
    categoryRoutes.getById
  );
};
