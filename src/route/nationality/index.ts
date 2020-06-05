import { getNationality } from "./get";
import { postNationality } from "./post";
import { deleteNationality } from "./delete";
import { patchNationality } from "./patch";

export function nationality(app) {
  getNationality(app);
  postNationality(app);
  patchNationality(app);
  deleteNationality(app);
}
