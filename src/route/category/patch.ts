import { CategoryService } from "../../service/CategoryService";
import { dbConfig } from "../../model";
import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";
import { Gender } from "../../types/types";
import { body, param } from "express-validator";
import { validateRequest } from "../../service/RequestValidationService";

const debug = require("debug")("category.patch");

const categoryService = new CategoryService();

const categoryRoutes = {
  patch: async (req, res, next) => {
    const categoryId = req.params.id;

    let category;

    try {
      category = await dbConfig.transaction(async (transaction) => {
        const categoryFound =
          (await categoryService.getById(categoryId, transaction)) !== null;

        if (!categoryFound) {
          throw new NotFoundError("Category not found");
        }

        await categoryService.update(
          { id: categoryId, ...req.body },
          transaction
        );

        return categoryService.getById(categoryId, transaction);
      });
    } catch (error) {
      debug(error);
      next(error);
    }
    return res.json(category);
  }
};

export const patchCategory = (app) => {
  app.patch(
    "/category/:id",
    [
      param("id", "Id has to be number.").isInt(),
      body().custom((body) => {
        if (Object.entries(body).length === 0 && body.constructor === Object) {
          throw new BadRequestError("Request has empty body.");
        }
        if (body.gender !== undefined && !(body.gender in Gender)) {
          throw new BadRequestError("Illegal gender value.");
        }
        return Promise.resolve();
      }),
      body("name", "Name cannot be empty.").optional().not().isEmpty()
    ],
    validateRequest,
    categoryRoutes.patch
  );
};
