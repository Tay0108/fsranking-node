import { getCategory } from "./get";
import { postCategory } from "./post";
import { deleteCategory } from "./delete";
import { patchCategory } from "./patch";

export function category(app) {
  getCategory(app);
  postCategory(app);
  patchCategory(app);
  deleteCategory(app);
}
