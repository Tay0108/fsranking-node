import { player } from "./player";
import { nationality } from "./nationality";
import { location } from "./location";
import { competition } from "./competition";
import { category } from "./category";

export function route(app) {
  category(app);
  competition(app);
  location(app);
  nationality(app);
  player(app);
}
