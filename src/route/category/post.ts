import { CategoryService } from "../../service/CategoryService";
import { body } from "express-validator";
import { validateRequest } from "../../service/RequestValidationService";
import { Gender } from "../../types/types";
import { BadRequestError } from "../../errors/BadRequestError";

const debug = require("debug")("category.post");

const categoryService = new CategoryService();

const categoryRoutes = {
  post: async (req, res, next) => {
    try {
      const category = await categoryService.create(req.body);
      return res.json(category);
    } catch (error) {
      debug(error);
      next(error);
    }
  }
};

export const postCategory = (app) => {
  app.post(
    "/category",
    [
      body().custom((body) => {
        if (Object.entries(body).length === 0 && body.constructor === Object) {
          throw new BadRequestError("Request has empty body.");
        }
        if (!(body.gender in Gender)) {
          throw new BadRequestError("Illegal gender value.");
        }
        return Promise.resolve();
      }),
      body("name", "Name cannot be empty.").not().isEmpty()
    ],
    validateRequest,
    categoryRoutes.post
  );
};
