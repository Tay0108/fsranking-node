import { HttpError } from "./HttpError";

export class NotFoundError extends HttpError {
  statusCode: number;

  constructor(message) {
    super(message, 404);
  }
}
