import {
  Category,
  Competition,
  Location,
  Nationality, PlaceToPoints,
  Player,
  Result
} from "../model";

const debug = require("debug")("mock.db");

/* IMPORTANT: DO NOT CHANGE ORDER! ADD DATA AT THE END! */

export async function createPlayers() {
  debug("creating players starting...");

  await Player.create({
    gender: "Male",
    firstName: "Szymon",
    lastName: "Skalski",
    nickname: "Szymo",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Paweł",
    lastName: "Skóra",
    nickname: "Skóra",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Krzysztof",
    lastName: "Golonka",
    nickname: "Clyde",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Tomasz",
    lastName: "Lebiocki",
    nickname: "Lebioda",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Bartosz",
    lastName: "Skalski",
    nickname: "Skała",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Filip",
    lastName: "Tyczkowski",
    nickname: "Tycza",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Michał",
    lastName: "Rycaj",
    nickname: "MichRyc",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Biegun",
    nickname: "Zegan",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Marcin",
    lastName: "Teper",
    nickname: "CNK",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Łukasz",
    lastName: "Chwieduk",
    nickname: "Luki",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Ziomek",
    nickname: "Ziomal",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Bartłomiej",
    lastName: "Rak",
    nickname: "Kalaputa",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Daniel",
    lastName: "Mikołajek",
    nickname: "Mikołaj",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Radosław",
    lastName: "Zdunek",
    nickname: "Radox",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Daniel",
    lastName: "Kowal",
    nickname: "Danielson",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Oliver",
    lastName: "Cherek",
    nickname: "Oli",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Daniel",
    lastName: "Długołęcki",
    nickname: "Q100m",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Łukasz",
    lastName: "Karaś",
    nickname: "Karaś",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Mateusz",
    lastName: "Odrzygóźdź",
    nickname: "Lotar",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Krzyżowski",
    nickname: "Kojak",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Mateusz",
    lastName: "Związek",
    nickname: "Zdzichu",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Paweł",
    lastName: "Wierzchowski",
    nickname: "Wieszak",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Koczur",
    nickname: "DaKo",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Paweł",
    lastName: "Kwit",
    nickname: "Ronnie",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Filip",
    lastName: "Chudziński",
    nickname: "Fichu",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Błażej",
    lastName: "Nowikowski",
    nickname: "Błażej",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Jakub",
    lastName: "Kokot",
    nickname: "",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Adrian",
    lastName: "Franc",
    nickname: "Franek",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Robert",
    lastName: "Guzik",
    nickname: "Guzik",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Gaetan",
    lastName: "Czaja",
    nickname: "",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Stanisław",
    lastName: "Kościelny",
    nickname: "Staniu",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Jaromir",
    lastName: "Poprawa",
    nickname: "JRK",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Adrian",
    lastName: "Duszak",
    nickname: "",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Piotr",
    lastName: "Bujak",
    nickname: "",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Emil",
    lastName: "Wysocki",
    nickname: "",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Marcin",
    lastName: "Kaczmarek",
    nickname: "Marten",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Jakub",
    lastName: "Makowski",
    nickname: "Maki",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Ksawery",
    lastName: "Mielniczuk",
    nickname: "",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Robert",
    lastName: "Bejda",
    nickname: "Robik",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Stanisław",
    lastName: "Wysowski",
    nickname: "Staszko",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Konrad",
    lastName: "Dybaś",
    nickname: "Kondzio",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Adam",
    lastName: "Zaworski",
    nickname: "AZ",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Mateusz",
    lastName: "Przeznak",
    nickname: "Cheetos",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Cyprian",
    lastName: "Mikita",
    nickname: "Cypro",
    age: 1,
    careerStartYear: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Piotr",
    lastName: "Biernacki",
    nickname: "",
    age: 1,
    careerStartYear: 1
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
    name: "Battle",
    gender: "Both"
  });
  await Category.create({
    name: "Challenge",
    gender: "Male"
  });
  await Category.create({
    name: "Challenge",
    gender: "Female"
  });
  await Category.create({
    name: "Iron Man",
    gender: "Male"
  });
  await Category.create({
    name: "Iron Man",
    gender: "Female"
  });
  await Category.create({
    name: "Iron Man",
    gender: "Both"
  });
  await Category.create({
    name: "Routine",
    gender: "Male"
  });
  await Category.create({
    name: "Routine",
    gender: "Female"
  });
  await Category.create({
    name: "Routine",
    gender: "Both"
  });
  await Category.create({
    name: "Sick 3",
    gender: "Male"
  });
  await Category.create({
    name: "Sick 3",
    gender: "Female"
  });
  await Category.create({
    name: "Sick 3",
    gender: "Both"
  });
}

export async function createCompetitions() {
  debug("creating competitions starting...");
  // real data:
  await Competition.create({
    name: "Zawiercie 2007",
    weight: 6, // MP
    date: new Date(2007, 0, 1)
  });
  await Competition.create({
    name: "Olkusz 2008",
    weight: 4,
    date: new Date(2008, 0, 1)
  });
  await Competition.create({
    name: "Pyrzyce 2008",
    weight: 4,
    date: new Date(2008, 0, 1)
  });
  await Competition.create({
    name: "Zawiercie 2008",
    weight: 4,
    date: new Date(2008, 0, 1)
  });
  await Competition.create({
    name: "Jaktorów 2009",
    weight: 4,
    date: new Date(2009, 0, 1)
  });
  await Competition.create({
    name: "Kielce 2009",
    weight: 4,
    date: new Date(2009, 0, 1)
  });
  await Competition.create({
    name: "Olkusz 2009",
    weight: 4,
    date: new Date(2009, 0, 1)
  });
  await Competition.create({
    name: "Pyrzyce 2009",
    weight: 4,
    date: new Date(2009, 0, 1)
  });
  await Competition.create({
    name: "RBSS 2009",
    weight: 4,
    date: new Date(2009, 0, 1)
  });
  await Competition.create({
    name: "Zawiercie 2009",
    weight: 4,
    date: new Date(2009, 0, 1)
  });
  await Competition.create({
    name: "Cieszyn 2010",
    weight: 4,
    date: new Date(2010, 0, 1)
  });
  await Competition.create({
    name: "Jarocin 2010",
    weight: 4,
    date: new Date(2010, 0, 1)
  });
  await Competition.create({
    name: "Łódź 2010",
    weight: 4,
    date: new Date(2010, 0, 1)
  });
  await Competition.create({
    name: "Międzyzdroje 2010",
    weight: 4,
    date: new Date(2010, 0, 1)
  });
  await Competition.create({
    name: "Olkusz 2010",
    weight: 4,
    date: new Date(2010, 0, 1)
  });
  await Competition.create({
    name: "Pyrzyce 2010",
    weight: 4,
    date: new Date(2010, 0, 1)
  });
  await Competition.create({
    name: "Focus 2011",
    weight: 4,
    date: new Date(2011, 0, 1)
  });
  await Competition.create({
    name: "Grassroots 2011",
    weight: 4,
    date: new Date(2011, 0, 1)
  });
  await Competition.create({
    name: "Międzyzdroje 2011",
    weight: 4,
    date: new Date(2011, 0, 1)
  });
  await Competition.create({
    name: "Myszków 2011",
    weight: 4,
    date: new Date(2011, 0, 1)
  });
  await Competition.create({
    name: "Pabianice 2011",
    weight: 4,
    date: new Date(2011, 0, 1)
  });
  await Competition.create({
    name: "Żerków 2011",
    weight: 4,
    date: new Date(2011, 0, 1)
  });
  await Competition.create({
    name: "Bytów 2012",
    weight: 4,
    date: new Date(2012, 0, 1)
  });
  await Competition.create({
    name: "Focus 2012",
    weight: 4,
    date: new Date(2012, 0, 1)
  });
  await Competition.create({
    name: "Myszków 2012",
    weight: 4,
    date: new Date(2012, 0, 1)
  });
  await Competition.create({
    name: "RBSS 2012",
    weight: 4,
    date: new Date(2012, 0, 1)
  });
  await Competition.create({
    name: "Żerków 2012",
    weight: 4,
    date: new Date(2012, 0, 1)
  });
  await Competition.create({
    name: "Battlemasters Wrocław 2013",
    weight: 4,
    date: new Date(2013, 0, 1)
  });
  await Competition.create({
    name: "H&S 2013",
    weight: 4,
    date: new Date(2013, 0, 1)
  });
  await Competition.create({
    name: "LFN 2013",
    weight: 4,
    date: new Date(2013, 0, 1)
  });
  await Competition.create({
    name: "Płock 2013",
    weight: 4,
    date: new Date(2013, 0, 1)
  });
  await Competition.create({
    name: "Żerków 2013",
    weight: 4,
    date: new Date(2013, 0, 1)
  });
  await Competition.create({
    name: "Bytom 2014",
    weight: 4,
    date: new Date(2014, 0, 1)
  });
  await Competition.create({
    name: "Czarnków 2014",
    weight: 4,
    date: new Date(2014, 0, 1)
  });
  await Competition.create({
    name: "Międzyzdroje 2014",
    weight: 4,
    date: new Date(2014, 0, 1)
  });
  await Competition.create({
    name: "Myszków 2014",
    weight: 4,
    date: new Date(2014, 0, 1)
  });
  await Competition.create({
    name: "Skawina 2014",
    weight: 4,
    date: new Date(2014, 0, 1)
  });
  await Competition.create({
    name: "Żerków 2014",
    weight: 4,
    date: new Date(2014, 0, 1)
  });
  await Competition.create({
    name: "Błaszki 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Bytom 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Czarnków 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Focus 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Gubin 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Lublin 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Międzyzdroje 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Przygodzice 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Skawina 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Żerków 2015",
    weight: 4,
    date: new Date(2015, 0, 1)
  });
  await Competition.create({
    name: "Błaszki 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Bytom M1 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Częstochowa M1 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Focus 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Gubin 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "LFN 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Lublin 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Marki M1 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Olkusz 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Radom M1 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Skawina 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Zabrze M1 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Żerków 2016",
    weight: 4,
    date: new Date(2016, 0, 1)
  });
  await Competition.create({
    name: "Błaszki 2017",
    weight: 4,
    date: new Date(2017, 0, 1)
  });
  await Competition.create({
    name: "Chojnice 2017",
    weight: 4,
    date: new Date(2017, 0, 1)
  });
  await Competition.create({
    name: "Focus 2017",
    weight: 4,
    date: new Date(2017, 0, 1)
  });
  await Competition.create({
    name: "Freestival 2017",
    weight: 4,
    date: new Date(2017, 0, 1)
  });
  await Competition.create({
    name: "Olkusz 2017",
    weight: 4,
    date: new Date(2017, 0, 1)
  });
  await Competition.create({
    name: "Skawina 2017",
    weight: 4,
    date: new Date(2017, 0, 1)
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
  await Nationality.create({
    name: "France"
  });
}

export async function createLocations() {
  debug("creating locations starting...");

  await Location.create({
    name: "Zawiercie",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Olkusz",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Pyrzyce",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Jaktorów",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Kielce",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Warszawa",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Cieszyn",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Jarocin",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Łódź",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Międzyzdroje",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Bydgoszcz",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Pabianice",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Bytów",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Płock",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Bytom",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Czarnków",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Skawina",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Błaszki",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Gubin",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Lublin",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Przygodzice",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Częstochowa",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Marki",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Radom",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Zabrze",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Chojnice",
    latitude: 1,
    longitude: 1
  });
  await Location.create({
    name: "Grodzisk Mazowiecki",
    latitude: 1,
    longitude: 1
  });
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

export async function createResults() {
  debug("creating results starting...");
  // Zawiercie 2007:
  await Result.create({
    competitionId: 1,
    categoryId: 3,
    playerId: 1,
    place: 1
  });
  await Result.create({
    competitionId: 1,
    categoryId: 3,
    playerId: 2,
    place: 2
  });
  await Result.create({
    competitionId: 1,
    categoryId: 3,
    playerId: 3,
    place: 3
  });
  await Result.create({
    competitionId: 1,
    categoryId: 3,
    playerId: 4,
    place: 4
  });
  // Olkusz 2008:
  await Result.create({
    competitionId: 2,
    categoryId: 3,
    playerId: 5,
    place: 1
  });
  await Result.create({
    competitionId: 2,
    categoryId: 3,
    playerId: 1,
    place: 2
  });
  await Result.create({
    competitionId: 2,
    categoryId: 3,
    playerId: 6,
    place: 3
  });
  // Pyrzyce 2008:
  await Result.create({
    competitionId: 3,
    categoryId: 3,
    playerId: 6,
    place: 1
  });
  await Result.create({
    competitionId: 3,
    categoryId: 3,
    playerId: 2,
    place: 2
  });
  await Result.create({
    competitionId: 3,
    categoryId: 3,
    playerId: 1,
    place: 3
  });
  // Zawiercie 2008:
  await Result.create({
    competitionId: 4,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 4,
    categoryId: 3,
    playerId: 7,
    place: 2
  });
  await Result.create({
    competitionId: 4,
    categoryId: 3,
    playerId: 3,
    place: 3
  });
  // Jaktorów 2009:
  await Result.create({
    competitionId: 5,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 5,
    categoryId: 3,
    playerId: 7,
    place: 2
  });
  await Result.create({
    competitionId: 5,
    categoryId: 3,
    playerId: 8,
    place: 3
  });
  // Kielce 2009:
  await Result.create({
    competitionId: 6,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 6,
    categoryId: 3,
    playerId: 7,
    place: 2
  });
  await Result.create({
    competitionId: 6,
    categoryId: 3,
    playerId: 3,
    place: 3
  });
  // Olkusz 2009:
  await Result.create({
    competitionId: 7,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  await Result.create({
    competitionId: 7,
    categoryId: 3,
    playerId: 8,
    place: 2
  });
  await Result.create({
    competitionId: 7,
    categoryId: 3,
    playerId: 9,
    place: 3
  });
  // Pyrzyce 2009:
  await Result.create({
    competitionId: 8,
    categoryId: 3,
    playerId: 6,
    place: 3
  });
  // RBSS 2009:
  await Result.create({
    competitionId: 9,
    categoryId: 3,
    playerId: 10,
    place: 1
  });
  await Result.create({
    competitionId: 9,
    categoryId: 3,
    playerId: 2,
    place: 2
  });
  await Result.create({
    competitionId: 9,
    categoryId: 3,
    playerId: 1,
    place: 3
  });
  await Result.create({
    competitionId: 9,
    categoryId: 3,
    playerId: 11,
    place: 4
  });
  await Result.create({
    competitionId: 9,
    categoryId: 3,
    playerId: 6,
    place: 5
  });
  await Result.create({
    competitionId: 9,
    categoryId: 3,
    playerId: 3,
    place: 6
  });
  await Result.create({
    competitionId: 9,
    categoryId: 3,
    playerId: 7,
    place: 7
  });
  await Result.create({
    competitionId: 9,
    categoryId: 3,
    playerId: 4,
    place: 8
  });
  // Zawiercie 2009:
  await Result.create({
    competitionId: 10,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 10,
    categoryId: 3,
    playerId: 1,
    place: 2
  });
  await Result.create({
    competitionId: 10,
    categoryId: 3,
    playerId: 11,
    place: 3
  });
  // Cieszyn 2010:
  await Result.create({
    competitionId: 11,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 11,
    categoryId: 3,
    playerId: 12,
    place: 2
  });
  await Result.create({
    competitionId: 11,
    categoryId: 3,
    playerId: 13,
    place: 3
  });
  await Result.create({
    competitionId: 11,
    categoryId: 3,
    playerId: 3,
    place: 4
  });
  await Result.create({
    competitionId: 11,
    categoryId: 3,
    playerId: 8,
    place: 5
  });
  await Result.create({
    competitionId: 11,
    categoryId: 3,
    playerId: 14,
    place: 6
  });
  await Result.create({
    competitionId: 11,
    categoryId: 3,
    playerId: 11,
    place: 7
  });
  await Result.create({
    competitionId: 11,
    categoryId: 3,
    playerId: 15,
    place: 8
  });
  // Jarocin 2010:
  await Result.create({
    competitionId: 12,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  await Result.create({
    competitionId: 12,
    categoryId: 3,
    playerId: 6,
    place: 2
  });
  await Result.create({
    competitionId: 12,
    categoryId: 3,
    playerId: 2,
    place: 3
  });
  await Result.create({
    competitionId: 12,
    categoryId: 3,
    playerId: 13,
    place: 4
  });
  await Result.create({
    competitionId: 12,
    categoryId: 3,
    playerId: 1,
    place: 5
  });
  await Result.create({
    competitionId: 12,
    categoryId: 3,
    playerId: 12,
    place: 6
  });
  await Result.create({
    competitionId: 12,
    categoryId: 3,
    playerId: 16,
    place: 7
  });
  await Result.create({
    competitionId: 12,
    categoryId: 3,
    playerId: 17,
    place: 8
  });
  // Łódź 2010:
  await Result.create({
    competitionId: 13,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 13,
    categoryId: 3,
    playerId: 13,
    place: 2
  });
  await Result.create({
    competitionId: 13,
    categoryId: 3,
    playerId: 1,
    place: 3
  });
  // Międzyzdroje 2010:
  await Result.create({
    competitionId: 14,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 14,
    categoryId: 3,
    playerId: 6,
    place: 2
  });
  await Result.create({
    competitionId: 14,
    categoryId: 3,
    playerId: 18,
    place: 3
  });
  // Olkusz 2010:
  await Result.create({
    competitionId: 15,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 15,
    categoryId: 3,
    playerId: 1,
    place: 2
  });
  await Result.create({
    competitionId: 15,
    categoryId: 3,
    playerId: 12,
    place: 3
  });
  // Pyrzyce 2010:
  await Result.create({
    competitionId: 16,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  // Focus 2011:
  await Result.create({
    competitionId: 17,
    categoryId: 3,
    playerId: 1,
    place: 1
  });
  await Result.create({
    competitionId: 17,
    categoryId: 3,
    playerId: 13,
    place: 2
  });
  await Result.create({
    competitionId: 17,
    categoryId: 3,
    playerId: 2,
    place: 3
  });
  await Result.create({
    competitionId: 17,
    categoryId: 3,
    playerId: 19,
    place: 4
  });
  await Result.create({
    competitionId: 17,
    categoryId: 3,
    playerId: 12,
    place: 5
  });
  await Result.create({
    competitionId: 17,
    categoryId: 3,
    playerId: 20,
    place: 6
  });
  await Result.create({
    competitionId: 17,
    categoryId: 3,
    playerId: 7,
    place: 7
  });
  await Result.create({
    competitionId: 17,
    categoryId: 3,
    playerId: 10,
    place: 8
  });
  // Grassroots 2011:
  await Result.create({
    competitionId: 18,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  await Result.create({
    competitionId: 18,
    categoryId: 3,
    playerId: 1,
    place: 2
  });
  await Result.create({
    competitionId: 18,
    categoryId: 3,
    playerId: 10,
    place: 3
  });
  // Międzyzdroje 2011:
  await Result.create({
    competitionId: 19,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 19,
    categoryId: 3,
    playerId: 6,
    place: 2
  });
  await Result.create({
    competitionId: 19,
    categoryId: 3,
    playerId: 20,
    place: 3
  });
  // Myszków 2011:
  await Result.create({
    competitionId: 20,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  await Result.create({
    competitionId: 20,
    categoryId: 3,
    playerId: 10,
    place: 2
  });
  await Result.create({
    competitionId: 20,
    categoryId: 3,
    playerId: 2,
    place: 3
  });
  await Result.create({
    competitionId: 20,
    categoryId: 3,
    playerId: 1,
    place: 4
  });
  await Result.create({
    competitionId: 20,
    categoryId: 3,
    playerId: 21,
    place: 5
  });
  await Result.create({
    competitionId: 20,
    categoryId: 3,
    playerId: 22,
    place: 6
  });
  await Result.create({
    competitionId: 20,
    categoryId: 3,
    playerId: 11,
    place: 7
  });
  await Result.create({
    competitionId: 20,
    categoryId: 3,
    playerId: 23,
    place: 8
  });
  // Pabianice 2011:
  await Result.create({
    competitionId: 21,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 21,
    categoryId: 3,
    playerId: 20,
    place: 2
  });
  await Result.create({
    competitionId: 21,
    categoryId: 3,
    playerId: 2,
    place: 3
  });
  // Żerków 2011:
  await Result.create({
    competitionId: 22,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 22,
    categoryId: 3,
    playerId: 1,
    place: 2
  });
  await Result.create({
    competitionId: 22,
    categoryId: 3,
    playerId: 13,
    place: 3
  });
  await Result.create({
    competitionId: 22,
    categoryId: 3,
    playerId: 20,
    place: 4
  });
  await Result.create({
    competitionId: 22,
    categoryId: 3,
    playerId: 11,
    place: 5
  });
  await Result.create({
    competitionId: 22,
    categoryId: 3,
    playerId: 24,
    place: 6
  });
  await Result.create({
    competitionId: 22,
    categoryId: 3,
    playerId: 25,
    place: 7
  });
  await Result.create({
    competitionId: 22,
    categoryId: 3,
    playerId: 14,
    place: 8
  });
  // Bytów 2012:
  await Result.create({
    competitionId: 23,
    categoryId: 3,
    playerId: 10,
    place: 1
  });
  await Result.create({
    competitionId: 23,
    categoryId: 3,
    playerId: 2,
    place: 2
  });
  await Result.create({
    competitionId: 23,
    categoryId: 3,
    playerId: 20,
    place: 3
  });
  // Focus 2012:
  await Result.create({
    competitionId: 24,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  await Result.create({
    competitionId: 24,
    categoryId: 3,
    playerId: 1,
    place: 2
  });
  await Result.create({
    competitionId: 24,
    categoryId: 3,
    playerId: 13,
    place: 3
  });
  await Result.create({
    competitionId: 24,
    categoryId: 3,
    playerId: 11,
    place: 4
  });
  await Result.create({
    competitionId: 24,
    categoryId: 3,
    playerId: 10,
    place: 5
  });
  await Result.create({
    competitionId: 24,
    categoryId: 3,
    playerId: 26,
    place: 6
  });
  await Result.create({
    competitionId: 24,
    categoryId: 3,
    playerId: 2,
    place: 7
  });
  await Result.create({
    competitionId: 24,
    categoryId: 3,
    playerId: 12,
    place: 8
  });
  // Myszków 2012:
  await Result.create({
    competitionId: 25,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  await Result.create({
    competitionId: 25,
    categoryId: 3,
    playerId: 10,
    place: 2
  });
  await Result.create({
    competitionId: 25,
    categoryId: 3,
    playerId: 2,
    place: 3
  });
  await Result.create({
    competitionId: 25,
    categoryId: 3,
    playerId: 23,
    place: 4
  });
  await Result.create({
    competitionId: 25,
    categoryId: 3,
    playerId: 13,
    place: 5
  });
  await Result.create({
    competitionId: 25,
    categoryId: 3,
    playerId: 25,
    place: 6
  });
  await Result.create({
    competitionId: 25,
    categoryId: 3,
    playerId: 24,
    place: 7
  });
  await Result.create({
    competitionId: 25,
    categoryId: 3,
    playerId: 12,
    place: 8
  });
  // RBSS 2012:
  await Result.create({
    competitionId: 26,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 26,
    categoryId: 3,
    playerId: 20,
    place: 2
  });
  await Result.create({
    competitionId: 26,
    categoryId: 3,
    playerId: 2,
    place: 3
  });
  await Result.create({
    competitionId: 26,
    categoryId: 3,
    playerId: 19,
    place: 4
  });
  await Result.create({
    competitionId: 26,
    categoryId: 3,
    playerId: 10,
    place: 5
  });
  await Result.create({
    competitionId: 26,
    categoryId: 3,
    playerId: 14,
    place: 6
  });
  await Result.create({
    competitionId: 26,
    categoryId: 3,
    playerId: 27,
    place: 7
  });
  await Result.create({
    competitionId: 26,
    categoryId: 3,
    playerId: 7,
    place: 8
  });
  // Żerków 2012:
  await Result.create({
    competitionId: 27,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  await Result.create({
    competitionId: 27,
    categoryId: 3,
    playerId: 1,
    place: 2
  });
  await Result.create({
    competitionId: 27,
    categoryId: 3,
    playerId: 11,
    place: 3
  });
  await Result.create({
    competitionId: 27,
    categoryId: 3,
    playerId: 19,
    place: 4
  });
  await Result.create({
    competitionId: 27,
    categoryId: 3,
    playerId: 14,
    place: 5
  });
  await Result.create({
    competitionId: 27,
    categoryId: 3,
    playerId: 23,
    place: 6
  });
  await Result.create({
    competitionId: 27,
    categoryId: 3,
    playerId: 8,
    place: 7
  });
  await Result.create({
    competitionId: 27,
    categoryId: 3,
    playerId: 27,
    place: 8
  });
  // Battlemasters Wrocław 2013:
  await Result.create({
    competitionId: 28,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 28,
    categoryId: 3,
    playerId: 2,
    place: 2
  });
  await Result.create({
    competitionId: 28,
    categoryId: 3,
    playerId: 20,
    place: 3
  });
  // H&S 2013:
  await Result.create({
    competitionId: 29,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 29,
    categoryId: 3,
    playerId: 10,
    place: 2
  });
  await Result.create({
    competitionId: 29,
    categoryId: 3,
    playerId: 1,
    place: 3
  });
  await Result.create({
    competitionId: 29,
    categoryId: 3,
    playerId: 12,
    place: 4
  });
  await Result.create({
    competitionId: 29,
    categoryId: 3,
    playerId: 2,
    place: 5
  });
  await Result.create({
    competitionId: 29,
    categoryId: 3,
    playerId: 28,
    place: 6
  });
  await Result.create({
    competitionId: 29,
    categoryId: 3,
    playerId: 11,
    place: 7
  });
  await Result.create({
    competitionId: 29,
    categoryId: 3,
    playerId: 20,
    place: 8
  });
  // LFN 2013:
  await Result.create({
    competitionId: 30,
    categoryId: 3,
    playerId: 13,
    place: 3
  });
  // Płock 2013:
  await Result.create({
    competitionId: 31,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 31,
    categoryId: 3,
    playerId: 19,
    place: 2
  });
  await Result.create({
    competitionId: 31,
    categoryId: 3,
    playerId: 13,
    place: 3
  });
  // Żerków 2013:
  await Result.create({
    competitionId: 32,
    categoryId: 3,
    playerId: 1,
    place: 1
  });
  await Result.create({
    competitionId: 32,
    categoryId: 3,
    playerId: 2,
    place: 2
  });
  await Result.create({
    competitionId: 32,
    categoryId: 3,
    playerId: 11,
    place: 3
  });
  await Result.create({
    competitionId: 32,
    categoryId: 3,
    playerId: 20,
    place: 4
  });
  await Result.create({
    competitionId: 32,
    categoryId: 3,
    playerId: 29,
    place: 5
  });
  await Result.create({
    competitionId: 32,
    categoryId: 3,
    playerId: 25,
    place: 6
  });
  await Result.create({
    competitionId: 32,
    categoryId: 3,
    playerId: 23,
    place: 7
  });
  await Result.create({
    competitionId: 32,
    categoryId: 3,
    playerId : 30,
    place: 8
  });
  // Bytom 2014:
  await Result.create({
    competitionId: 33,
    categoryId: 3,
    playerId: 1,
    place: 1
  });
  await Result.create({
    competitionId: 33,
    categoryId: 3,
    playerId: 12,
    place: 2
  });
  await Result.create({
    competitionId: 33,
    categoryId: 3,
    playerId: 11,
    place: 3
  });
  // Czarnków 2014:
  await Result.create({
    competitionId: 34,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 34,
    categoryId: 3,
    playerId: 11,
    place: 2
  });
  await Result.create({
    competitionId: 34,
    categoryId: 3,
    playerId: 31,
    place: 3
  });
  // Międzyzdroje 2014:
  await Result.create({
    competitionId: 35,
    categoryId: 3,
    playerId: 20,
    place: 1
  });
  await Result.create({
    competitionId: 35,
    categoryId: 3,
    playerId: 45,
    place: 2
  });
  await Result.create({
    competitionId: 35,
    categoryId: 3,
    playerId: 31,
    place: 3
  });
  // Myszków 2014:
  await Result.create({
    competitionId: 36,
    categoryId: 3,
    playerId: 10,
    place: 1
  });
  await Result.create({
    competitionId: 36,
    categoryId: 3,
    playerId: 2,
    place: 2
  });
  await Result.create({
    competitionId: 36,
    categoryId: 3,
    playerId: 7,
    place: 3
  });
  await Result.create({
    competitionId: 36,
    categoryId: 3,
    playerId: 29,
    place: 4
  });
  await Result.create({
    competitionId: 36,
    categoryId: 3,
    playerId: 23,
    place: 5
  });
  await Result.create({
    competitionId: 36,
    categoryId: 3,
    playerId: 19,
    place: 6
  });
  await Result.create({
    competitionId: 36,
    categoryId: 3,
    playerId: 13,
    place: 7
  });
  await Result.create({
    competitionId: 36,
    categoryId: 3,
    playerId: 11,
    place: 8
  });
  // Skawina 2014:
  await Result.create({
    competitionId: 37,
    categoryId: 3,
    playerId: 11,
    place: 1
  });
  await Result.create({
    competitionId: 37,
    categoryId: 3,
    playerId: 20,
    place: 2
  });
  await Result.create({
    competitionId: 37,
    categoryId: 3,
    playerId: 32,
    place: 3
  });
  // Żerków 2014:
  await Result.create({
    competitionId: 38,
    categoryId: 3,
    playerId: 20,
    place: 1
  });
  await Result.create({
    competitionId: 38,
    categoryId: 3,
    playerId: 7,
    place: 2
  });
  await Result.create({
    competitionId: 38,
    categoryId: 3,
    playerId: 12,
    place: 3
  });
  await Result.create({
    competitionId: 38,
    categoryId: 3,
    playerId: 13,
    place: 4
  });
  await Result.create({
    competitionId: 38,
    categoryId: 3,
    playerId: 29,
    place: 5
  });
  await Result.create({
    competitionId: 38,
    categoryId: 3,
    playerId: 32,
    place: 6
  });
  await Result.create({
    competitionId: 38,
    categoryId: 3,
    playerId: 11,
    place: 7
  });
  await Result.create({
    competitionId: 38,
    categoryId: 3,
    playerId: 31,
    place: 8
  });
  // Błaszki 2015:
  await Result.create({
    competitionId: 39,
    categoryId: 3,
    playerId: 33,
    place: 1
  });
  await Result.create({
    competitionId: 39,
    categoryId: 3,
    playerId: 34,
    place: 2
  });
  await Result.create({
    competitionId: 39,
    categoryId: 3,
    playerId: 31,
    place: 3
  });
  // Bytom 2015:
  await Result.create({
    competitionId: 40,
    categoryId: 3,
    playerId: 32,
    place: 1
  });
  await Result.create({
    competitionId: 40,
    categoryId: 3,
    playerId: 13,
    place: 2
  });
  await Result.create({
    competitionId: 40,
    categoryId: 3,
    playerId: 1,
    place: 3
  });
  await Result.create({
    competitionId: 40,
    categoryId: 3,
    playerId: 33,
    place: 4
  });
  await Result.create({
    competitionId: 40,
    categoryId: 3,
    playerId: 11,
    place: 5
  });
  await Result.create({
    competitionId: 40,
    categoryId: 3,
    playerId: 19,
    place: 6
  });
  await Result.create({
    competitionId: 40,
    categoryId: 3,
    playerId: 34,
    place: 7
  });
  await Result.create({
    competitionId: 40,
    categoryId: 3,
    playerId: 15,
    place: 8
  });
  // Czarnków 2015:
  await Result.create({
    competitionId: 41,
    categoryId: 3,
    playerId: 7,
    place: 1
  });
  await Result.create({
    competitionId: 41,
    categoryId: 3,
    playerId: 11,
    place: 2
  });
  await Result.create({
    competitionId: 41,
    categoryId: 3,
    playerId: 10,
    place: 3
  });
  // Focus 2015:
  await Result.create({
    competitionId: 42,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 42,
    categoryId: 3,
    playerId: 10,
    place: 2
  });
  await Result.create({
    competitionId: 42,
    categoryId: 3,
    playerId: 29,
    place: 3
  });
  await Result.create({
    competitionId: 42,
    categoryId: 3,
    playerId: 32,
    place: 4
  });
  await Result.create({
    competitionId: 42,
    categoryId: 3,
    playerId: 28,
    place: 5
  });
  await Result.create({
    competitionId: 42,
    categoryId: 3,
    playerId: 2,
    place: 6
  });
  await Result.create({
    competitionId: 42,
    categoryId: 3,
    playerId: 11,
    place: 7
  });
  await Result.create({
    competitionId: 42,
    categoryId: 3,
    playerId: 12,
    place: 8
  });
  // Gubin 2015:
  await Result.create({
    competitionId: 43,
    categoryId: 3,
    playerId: 35,
    place: 1
  });
  await Result.create({
    competitionId: 43,
    categoryId: 3,
    playerId: 36,
    place: 2
  });
  await Result.create({
    competitionId: 43,
    categoryId: 3,
    playerId: 37,
    place: 3
  });
  // Lublin 2015:
  await Result.create({
    competitionId: 44,
    categoryId: 3,
    playerId: 19,
    place: 1
  });
  await Result.create({
    competitionId: 44,
    categoryId: 3,
    playerId: 20,
    place: 2
  });
  await Result.create({
    competitionId: 44,
    categoryId: 3,
    playerId: 32,
    place: 3
  });
  // Międzyzdroje 2015:
  await Result.create({
    competitionId: 45,
    categoryId: 3,
    playerId: 20,
    place: 1
  });
  await Result.create({
    competitionId: 45,
    categoryId: 3,
    playerId: 38,
    place: 2
  });
  // Przygodzice 2015:
  await Result.create({
    competitionId: 46,
    categoryId: 3,
    playerId: 34,
    place: 1
  });
  await Result.create({
    competitionId: 46,
    categoryId: 3,
    playerId: 31,
    place: 2
  });
  await Result.create({
    competitionId: 46,
    categoryId: 3,
    playerId: 39,
    place: 3
  });
  // Skawina 2015:
  await Result.create({
    competitionId: 47,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 47,
    categoryId: 3,
    playerId: 11,
    place: 2
  });
  await Result.create({
    competitionId: 47,
    categoryId: 3,
    playerId: 8,
    place: 3
  });
  // Żerków 2015:
  await Result.create({
    competitionId: 48,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 48,
    categoryId: 3,
    playerId: 11,
    place: 2
  });
  await Result.create({
    competitionId: 48,
    categoryId: 3,
    playerId: 12,
    place: 3
  });
  await Result.create({
    competitionId: 48,
    categoryId: 3,
    playerId: 40,
    place: 4
  });
  await Result.create({
    competitionId: 48,
    categoryId: 3,
    playerId: 1,
    place: 5
  });
  await Result.create({
    competitionId: 48,
    categoryId: 3,
    playerId: 29,
    place: 6
  });
  await Result.create({
    competitionId: 48,
    categoryId: 3,
    playerId: 24,
    place: 7
  });
  await Result.create({
    competitionId: 48,
    categoryId: 3,
    playerId: 28,
    place: 8
  });
  // Błaszki 2016:
  await Result.create({
    competitionId: 49,
    categoryId: 3,
    playerId: 31,
    place: 1
  });
  await Result.create({
    competitionId: 49,
    categoryId: 3,
    playerId: 13,
    place: 2
  });
  await Result.create({
    competitionId: 49,
    categoryId: 3,
    playerId: 34,
    place: 3
  });
  // Bytom M1 2016:
  await Result.create({
    competitionId: 50,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 50,
    categoryId: 3,
    playerId: 2,
    place: 2
  });
  await Result.create({
    competitionId: 50,
    categoryId: 3,
    playerId: 11,
    place: 3
  });
  // Częstochowa M1 2016:
  await Result.create({
    competitionId: 51,
    categoryId: 3,
    playerId: 11,
    place: 1
  });
  await Result.create({
    competitionId: 51,
    categoryId: 3,
    playerId: 13,
    place: 2
  });
  await Result.create({
    competitionId: 51,
    categoryId: 3,
    playerId: 12,
    place: 3
  });
  // Focus 2016:
  await Result.create({
    competitionId: 52,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 52,
    categoryId: 3,
    playerId: 10,
    place: 2
  });
  await Result.create({
    competitionId: 52,
    categoryId: 3,
    playerId: 29,
    place: 3
  });
  await Result.create({
    competitionId: 52,
    categoryId: 3,
    playerId: 2,
    place: 4
  });
  await Result.create({
    competitionId: 52,
    categoryId: 3,
    playerId: 32,
    place: 5
  });
  await Result.create({
    competitionId: 52,
    categoryId: 3,
    playerId: 20,
    place: 6
  });
  // Gubin 2016:
  await Result.create({
    competitionId: 53,
    categoryId: 3,
    playerId: 37,
    place: 1
  });
  await Result.create({
    competitionId: 53,
    categoryId: 3,
    playerId: 31,
    place: 2
  });
  await Result.create({
    competitionId: 53,
    categoryId: 3,
    playerId: 35,
    place: 3
  });
  // LFN 2016:
  await Result.create({
    competitionId: 54,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  // Lublin 2016:
  await Result.create({
    competitionId: 55,
    categoryId: 3,
    playerId: 32,
    place: 1
  });
  await Result.create({
    competitionId: 55,
    categoryId: 3,
    playerId: 29,
    place: 2
  });
  await Result.create({
    competitionId: 55,
    categoryId: 3,
    playerId: 41,
    place: 3
  });
  // Marki M1 2016:
  await Result.create({
    competitionId: 56,
    categoryId: 3,
    playerId: 12,
    place: 1
  });
  await Result.create({
    competitionId: 56,
    categoryId: 3,
    playerId: 8,
    place: 2
  });
  await Result.create({
    competitionId: 56,
    categoryId: 3,
    playerId: 1,
    place: 3
  });
  // Olkusz 2016:
  await Result.create({
    competitionId: 57,
    categoryId: 3,
    playerId: 1,
    place: 1
  });
  await Result.create({
    competitionId: 57,
    categoryId: 3,
    playerId: 11,
    place: 2
  });
  await Result.create({
    competitionId: 57,
    categoryId: 3,
    playerId: 8,
    place: 3
  });
  await Result.create({
    competitionId: 57,
    categoryId: 3,
    playerId: 15,
    place: 5
  });
  await Result.create({
    competitionId: 57,
    categoryId: 3,
    playerId: 12,
    place: 6
  });
  await Result.create({
    competitionId: 57,
    categoryId: 3,
    playerId: 31,
    place: 7
  });
  await Result.create({
    competitionId: 57,
    categoryId: 3,
    playerId: 29,
    place: 8
  });
  // Radom M1 2016:
  await Result.create({
    competitionId: 58,
    categoryId: 3,
    playerId: 2,
    place: 1
  });
  await Result.create({
    competitionId: 58,
    categoryId: 3,
    playerId: 1,
    place: 2
  });
  await Result.create({
    competitionId: 58,
    categoryId: 3,
    playerId: 32,
    place: 3
  });
  // Skawina 2016:
  await Result.create({
    competitionId: 59,
    categoryId: 3,
    playerId: 11,
    place: 1
  });
  await Result.create({
    competitionId: 59,
    categoryId: 3,
    playerId: 31,
    place: 2
  });
  await Result.create({
    competitionId: 59,
    categoryId: 3,
    playerId: 13,
    place: 3
  });
  // Zabrze M1 2016:
  await Result.create({
    competitionId: 60,
    categoryId: 3,
    playerId: 8,
    place: 1
  });
  await Result.create({
    competitionId: 60,
    categoryId: 3,
    playerId: 13,
    place: 2
  });
  await Result.create({
    competitionId: 60,
    categoryId: 3,
    playerId: 29,
    place: 3
  });
  // Żerków 2016:
  await Result.create({
    competitionId: 61,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 61,
    categoryId: 3,
    playerId: 12,
    place: 2
  });
  await Result.create({
    competitionId: 61,
    categoryId: 3,
    playerId: 11,
    place: 3
  });
  await Result.create({
    competitionId: 61,
    categoryId: 3,
    playerId: 1,
    place: 4
  });
  await Result.create({
    competitionId: 61,
    categoryId: 3,
    playerId: 20,
    place: 5
  });
  await Result.create({
    competitionId: 61,
    categoryId: 3,
    playerId: 29,
    place: 6
  });
  await Result.create({
    competitionId: 61,
    categoryId: 3,
    playerId: 19,
    place: 7
  });
  await Result.create({
    competitionId: 61,
    categoryId: 3,
    playerId: 32,
    place: 8
  });
  // Błaszki 2017:
  await Result.create({
    competitionId: 62,
    categoryId: 3,
    playerId: 12,
    place: 1
  });
  await Result.create({
    competitionId: 62,
    categoryId: 3,
    playerId: 31,
    place: 2
  });
  await Result.create({
    competitionId: 62,
    categoryId: 3,
    playerId: 34,
    place: 3
  });
  // Chojnice 2017:
  await Result.create({
    competitionId: 63,
    categoryId: 3,
    playerId: 20,
    place: 1
  });
  await Result.create({
    competitionId: 63,
    categoryId: 3,
    playerId: 37,
    place: 2
  });
  await Result.create({
    competitionId: 63,
    categoryId: 3,
    playerId: 42,
    place: 3
  });
  // Focus 2017:
  await Result.create({
    competitionId: 64,
    categoryId: 3,
    playerId: 1,
    place: 1
  });
  await Result.create({
    competitionId: 64,
    categoryId: 3,
    playerId: 29,
    place: 2
  });
  await Result.create({
    competitionId: 64,
    categoryId: 3,
    playerId: 13,
    place: 3
  });
  await Result.create({
    competitionId: 64,
    categoryId: 3,
    playerId: 10,
    place: 5
  });
  await Result.create({
    competitionId: 64,
    categoryId: 3,
    playerId: 34,
    place: 6
  });
  await Result.create({
    competitionId: 64,
    categoryId: 3,
    playerId: 8,
    place: 7
  });
  // Freestival 2017:
  await Result.create({
    competitionId: 65,
    categoryId: 3,
    playerId: 12,
    place: 1
  });
  await Result.create({
    competitionId: 65,
    categoryId: 3,
    playerId: 29,
    place: 2
  });
  await Result.create({
    competitionId: 65,
    categoryId: 3,
    playerId: 13,
    place: 3
  });
  await Result.create({
    competitionId: 65,
    categoryId: 3,
    playerId: 43,
    place: 4
  });
  await Result.create({
    competitionId: 65,
    categoryId: 3,
    playerId: 19,
    place: 5
  });
  await Result.create({
    competitionId: 65,
    categoryId: 3,
    playerId: 28,
    place: 6
  });
  await Result.create({
    competitionId: 65,
    categoryId: 3,
    playerId: 44,
    place: 7
  });
  await Result.create({
    competitionId: 65,
    categoryId: 3,
    playerId: 15,
    place: 8
  });
  // Olkusz 2017:
  await Result.create({
    competitionId: 66,
    categoryId: 3,
    playerId: 13,
    place: 1
  });
  await Result.create({
    competitionId: 66,
    categoryId: 3,
    playerId: 10,
    place: 2
  });
  await Result.create({
    competitionId: 66,
    categoryId: 3,
    playerId: 29,
    place: 3
  });
  await Result.create({
    competitionId: 66,
    categoryId: 3,
    playerId: 1,
    place: 4
  });
  await Result.create({
    competitionId: 66,
    categoryId: 3,
    playerId: 8,
    place: 5
  });
  await Result.create({
    competitionId: 66,
    categoryId: 3,
    playerId: 12,
    place: 6
  });
  await Result.create({
    competitionId: 66,
    categoryId: 3,
    playerId: 24,
    place: 7
  });
  await Result.create({
    competitionId: 66,
    categoryId: 3,
    playerId: 32,
    place: 8
  });
  // Skawina 2017:
  await Result.create({
    competitionId: 67,
    categoryId: 3,
    playerId: 32,
    place: 1
  });
  await Result.create({
    competitionId: 67,
    categoryId: 3,
    playerId: 29,
    place: 2
  });
  await Result.create({
    competitionId: 67,
    categoryId: 3,
    playerId: 8,
    place: 3
  });
}

export async function createPlaceToPoints() {
  debug("creating place to points starting...");

  await PlaceToPoints.create({
    place: 1,
    points: 125,
  });
  await PlaceToPoints.create({
    place: 2,
    points: 75,
  });
  await PlaceToPoints.create({
    place: 3,
    points: 55,
  });
  await PlaceToPoints.create({
    place: 4,
    points: 45,
  });
  await PlaceToPoints.create({
    place: 5,
    points: 25,
  });
  await PlaceToPoints.create({
    place: 6,
    points: 25,
  });
  await PlaceToPoints.create({
    place: 7,
    points: 25,
  });
  await PlaceToPoints.create({
    place: 8,
    points: 25,
  });
}

export async function mockDb() {
  await createPlaceToPoints();
  await createNationalities();
  await createLocations();
  await createPlayers();
  await createCategories();
  await createCompetitions();
  await createResults();
}
