import { getCompetition } from "./get";
import { postCompetition } from "./post";
import { deleteCompetition } from "./delete";
import { patchCompetition } from "./patch";

export function competition(app) {
  getCompetition(app);
  postCompetition(app);
  patchCompetition(app);
  deleteCompetition(app);
}
