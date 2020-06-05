import { player } from "./player";
import { nationality } from "./nationality";
import { location } from "./location";
import { competition } from "./competition";

export function route(app) {
  competition(app);
  location(app);
  nationality(app);
  player(app);
}
