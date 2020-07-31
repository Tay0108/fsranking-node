import { player } from "./player";
import { nationality } from "./nationality";
import { location } from "./location";
import { tournament } from "./tournament";
import { category } from "./category";
import { ranking } from "./ranking";

export function route(app) {
  category(app);
  tournament(app);
  location(app);
  nationality(app);
  player(app);
  ranking(app);
}
