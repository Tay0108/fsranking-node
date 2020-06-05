import { player } from "./player";
import { nationality } from "./nationality";
import { location } from "./location";

export function route(app) {
  player(app);
  nationality(app);
  location(app);
}
