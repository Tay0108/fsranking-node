import { validationResult } from "express-validator";

function validateRequest(req, res, next) {
    const validationErrors = validationResult(req);
  
    if (!validationErrors.isEmpty()) {
      res.status(400).json(validationErrors.array());
    } else {
      next();
    }
  }

export { validateRequest };