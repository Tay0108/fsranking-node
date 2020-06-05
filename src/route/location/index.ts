import { getLocation } from "./get";
import { postLocation } from "./post";
import { deleteLocation } from "./delete";
import { patchLocation } from "./patch";

export function location(app) {
  getLocation(app);
  postLocation(app);
  patchLocation(app);
  deleteLocation(app);
}
