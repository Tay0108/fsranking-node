import { getTournament } from "./get";
import { postTournament } from "./post";
import { deleteTournament } from "./delete";
import { patchTournament } from "./patch";

export function tournament(app) {
  getTournament(app);
  postTournament(app);
  patchTournament(app);
  deleteTournament(app);
}
