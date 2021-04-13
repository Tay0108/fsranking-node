import { HttpError } from "./HttpError";

export class BadRequestError extends HttpError {
  statusCode: number;

  constructor(message) {
    super(message, 400);
  }
}
