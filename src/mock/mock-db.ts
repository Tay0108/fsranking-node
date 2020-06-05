import { Category, Competition, Location, Nationality, Player } from "../model";

const debug = require("debug")("mock.db");

export async function createPlayers() {
  debug("creating players starting...");

  await Player.create({
    gender: "Male",
    firstName: "Krzysztof",
    lastName: "Kosecki",
    nickname: "Tay",
    age: 24,
    careerStartYear: 2007
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Koczur",
    nickname: null,
    age: 26,
    careerStartYear: 2009
  });
  await Player.create({
    gender: "Male",
    firstName: "Szymon",
    lastName: "Skalski",
    nickname: "Szymo",
    age: 30,
    careerStartYear: 2005
  });
  await Player.create({
    gender: "Female",
    firstName: "Agnieszka",
    lastName: "Mnich",
    nickname: "Aguśka",
    age: 26,
    careerStartYear: 2010
  });
}

export async function createCategories() {
  debug("creating categories starting...");

  await Category.create({
    name: "Battle",
    gender: "Male"
  });
  await Category.create({
    name: "Battle",
    gender: "Female"
  });
  await Category.create({
    name: "Challenge",
    gender: "Male"
  });
  await Category.create({
    name: "Iron Man",
    gender: "Male"
  });
  await Category.create({
    name: "Routine",
    gender: "Male"
  });
  await Category.create({
    name: "Sick 3",
    gender: "Both"
  });
}

export async function createCompetitions() {
  debug("creating competitions starting...");

  await Competition.create({
    name: "Lubasz Freestyle Night 2016",
    weight: 4
  });
  await Competition.create({
    name: "MP Myszków 2020",
    weight: 5
  });
  await Competition.create({
    name: "Freestival Żerków 2019",
    weight: 3
  });
  await Competition.create({
    name: "Lubasz Freestyle Night 2019",
    weight: 4
  });
}

export async function createNationalities() {
  debug("creating nationalities starting...");

  await Nationality.create({
    name: "Poland"
  });
  await Nationality.create({
    name: "Germany"
  });
  await Nationality.create({
    name: "Sweden"
  });
  await Nationality.create({
    name: "Norway"
  });
}

export async function createLocations() {
  debug("creating nationalities starting...");

  await Location.create({
    name: "Lubasz",
    latitude: 52.8466575,
    longitude: 16.5058331
  });
  await Location.create({
    name: "Żerków",
    latitude: 52.0680513,
    longitude: 17.5538938
  });
  await Location.create({
    name: "Myszków",
    latitude: 50.5646758,
    longitude: 19.2570542
  });
}

export async function mockDb() {
  await createNationalities();
  await createLocations();
  await createPlayers();
  await createCategories();
  await createCompetitions();
}
