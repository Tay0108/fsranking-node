import { getPlayer } from "./get";
import { postPlayer } from "./post";
import { deletePlayer } from "./delete";
import { patchPlayer } from "./patch";

export function player(app) {
  getPlayer(app);
  postPlayer(app);
  patchPlayer(app);
  deletePlayer(app);
}
