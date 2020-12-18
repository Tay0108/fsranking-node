import {
  Category,
  Tournament,
  Location,
  Nationality,
  PlaceToPoints,
  Player,
  Result,
  User,
  TournamentTier
} from "../model";

const bcrypt = require("bcrypt");

const debug = require("debug")("mock.db");

export async function createTournamentTiers() {
  debug("creating tournament tiers starting...");
  await TournamentTier.create({
    name: "Mistrzostwa Polski",
    weight: 4
  });
  await TournamentTier.create({
    name: "Puchar Polski",
    weight: 3
  });
  await TournamentTier.create({
    name: "Zawody Ogólnopolskie",
    weight: 2
  });
  await TournamentTier.create({
    name: "Zawody Lokalne",
    weight: 1
  });
}

export async function createUsers() {
  const password1 = "password1";
  const password2 = "password2";
  const saltRounds = 10;

  bcrypt.hash(password1, saltRounds, function (err, hash) {
    User.create({
      email: "taysonity@gmail.com",
      login: "Tay",
      password: hash
    });
  });

  bcrypt.hash(password2, saltRounds, function (err, hash) {
    User.create({
      email: "",
      login: "fsranking_admin",
      password: hash
    });
  });
}

export async function createNationalities() {
  debug("creating nationalities starting...");

  await Nationality.create({
    abbreviation: "pl",
    name: "Poland"
  });
  await Nationality.create({
    abbreviation: "de",
    name: "Germany"
  });
  await Nationality.create({
    abbreviation: "se",
    name: "Sweden"
  });
  await Nationality.create({
    abbreviation: "no",
    name: "Norway"
  });
  await Nationality.create({
    abbreviation: "fr",
    name: "France"
  });
}

export async function createPlayers() {
  debug("creating players starting...");

  await Player.create({
    gender: "Male",
    firstName: "Szymon",
    lastName: "Skalski",
    nickname: "Szymo",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1,
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dui id metus facilisis, at lobortis augue laoreet. In vel dolor nibh. Sed tellus leo, bibendum at ornare ac, sagittis nec massa. Donec tristique placerat diam. Aenean euismod metus vel arcu tincidunt euismod. Aliquam mattis massa sapien. Nam commodo, arcu eget bibendum euismod, ligula justo pulvinar mauris, eget bibendum elit dui eu sem. Nunc et lectus quis mauris malesuada venenatis. Sed vel elit magna. Curabitur sed est diam. Curabitur ac sollicitudin urna, a posuere est. Nullam ac ipsum id sapien malesuada tincidunt ac non mauris."
  });
  await Player.create({
    gender: "Male",
    firstName: "Paweł",
    lastName: "Skóra",
    nickname: "Skóra",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Krzysztof",
    lastName: "Golonka",
    nickname: "Clyde",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Tomasz",
    lastName: "Lebiocki",
    nickname: "Lebioda",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Bartosz",
    lastName: "Skalski",
    nickname: "Skała",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Filip",
    lastName: "Tyczkowski",
    nickname: "Tycza",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Michał",
    lastName: "Rycaj",
    nickname: "MichRyc",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Biegun",
    nickname: "Zegan",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Marcin",
    lastName: "Teper",
    nickname: "CNK",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Łukasz",
    lastName: "Chwieduk",
    nickname: "Luki",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Ziomek",
    nickname: "Ziomal",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Bartłomiej",
    lastName: "Rak",
    nickname: "Kalaputa",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Daniel",
    lastName: "Mikołajek",
    nickname: "Mikołaj",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Radosław",
    lastName: "Zdunek",
    nickname: "Radox",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Daniel",
    lastName: "Kowal",
    nickname: "Danielson",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Oliver",
    lastName: "Cherek",
    nickname: "Oli",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Daniel",
    lastName: "Długołęcki",
    nickname: "Q100m",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Łukasz",
    lastName: "Karaś",
    nickname: "Karaś",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Mateusz",
    lastName: "Odrzygóźdź",
    nickname: "Lotar",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Krzyżowski",
    nickname: "Kojak",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Mateusz",
    lastName: "Związek",
    nickname: "Zdzichu",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Paweł",
    lastName: "Wierzchowski",
    nickname: "Wieszak",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Dawid",
    lastName: "Koczur",
    nickname: "DaKo",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Paweł",
    lastName: "Kwit",
    nickname: "Ronnie",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Filip",
    lastName: "Chudziński",
    nickname: "Fichu",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Błażej",
    lastName: "Nowikowski",
    nickname: "Błażej",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Jakub",
    lastName: "Kokot",
    nickname: "",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Adrian",
    lastName: "Franc",
    nickname: "Franek",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Robert",
    lastName: "Guzik",
    nickname: "Guzik",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Gaetan",
    lastName: "Czaja",
    nickname: "",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Stanisław",
    lastName: "Kościelny",
    nickname: "Staniu",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Jaromir",
    lastName: "Poprawa",
    nickname: "JRK",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Adrian",
    lastName: "Duszak",
    nickname: "",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Piotr",
    lastName: "Bujak",
    nickname: "",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Emil",
    lastName: "Wysocki",
    nickname: "",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Marcin",
    lastName: "Kaczmarek",
    nickname: "Marten",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Jakub",
    lastName: "Makowski",
    nickname: "Maki",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Ksawery",
    lastName: "Mielniczuk",
    nickname: "",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Robert",
    lastName: "Bejda",
    nickname: "Robik",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Stanisław",
    lastName: "Wysowski",
    nickname: "Staszko",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Konrad",
    lastName: "Dybaś",
    nickname: "Kondzio",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Adam",
    lastName: "Zaworski",
    nickname: "AZ",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Mateusz",
    lastName: "Przeznak",
    nickname: "Cheetos",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Cyprian",
    lastName: "Mikita",
    nickname: "Cypro",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
  });
  await Player.create({
    gender: "Male",
    firstName: "Piotr",
    lastName: "Biernacki",
    nickname: "",
    birthYear: 1990,
    careerStartYear: 1,
    nationalityId: 1
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
    name: "Challenge",
    gender: "Both"
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

export async function createTournaments() {
  debug("creating tournaments starting...");
  // categories:
  const battleMale = await Category.findOne({
    where: { name: "Battle", gender: "Male" }
  });
  const battleFemale = await Category.findOne({
    where: { name: "Battle", gender: "Female" }
  });
  // const battleBoth = await Category.findOne({where: { name: "Battle", gender: "Both"}});

  const challengeMale = await Category.findOne({
    where: { name: "Battle", gender: "Male" }
  });
  const challengeFemale = await Category.findOne({
    where: { name: "Battle", gender: "Female" }
  });
  // const challengeBoth = await Category.findOne({where: { name: "Battle", gender: "Both"}});

  const ironManMale = await Category.findOne({
    where: { name: "Battle", gender: "Male" }
  });
  const ironManFemale = await Category.findOne({
    where: { name: "Battle", gender: "Female" }
  });
  // const ironManBoth = await Category.findOne({where: { name: "Battle", gender: "Both"}});

  const routineMale = await Category.findOne({
    where: { name: "Battle", gender: "Male" }
  });
  const routineFemale = await Category.findOne({
    where: { name: "Battle", gender: "Female" }
  });
  // const routineBoth = await Category.findOne({where: { name: "Battle", gender: "Both"}});

  const sick3Male = await Category.findOne({
    where: { name: "Battle", gender: "Male" }
  });
  const sick3Female = await Category.findOne({
    where: { name: "Battle", gender: "Female" }
  });
  // const sick3Both = await Category.findOne({where: { name: "Battle", gender: "Both"}});

  const tournamentTiers = await TournamentTier.findAll();

  const polishChampionships = tournamentTiers.find(
    (tier) => tier.name === "Mistrzostwa Polski"
  );
  const polishCup = tournamentTiers.find(
    (tier) => tier.name === "Puchar Polski"
  );
  const polishTournament = tournamentTiers.find(
    (tier) => tier.name === "Zawody Ogólnopolskie"
  );
  const localTournament = tournamentTiers.find(
    (tier) => tier.name === "Zawody Lokalne"
  );

  // real data:
  const zawiercie2007 = await Tournament.create({
    name: "Zawiercie 2007",
    tournamentTierId: polishChampionships.id,
    date: new Date(2007, 0, 1)
  });

  await zawiercie2007.addCategory(battleMale);

  const olkusz2008 = await Tournament.create({
    name: "Olkusz 2008",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 3,
    date: new Date(2008, 0, 1)
  });

  await olkusz2008.addCategory(battleMale);

  const pyrzyce2008 = await Tournament.create({
    name: "Pyrzyce 2008",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 4,
    date: new Date(2008, 0, 1)
  });
  await pyrzyce2008.addCategory(battleMale);

  const zawiercie2008 = await Tournament.create({
    name: "Zawiercie 2008",
    tournamentTierId: polishChampionships.id,
    date: new Date(2008, 0, 1)
  });

  await zawiercie2008.addCategory(battleMale);

  const jaktorow2009 = await Tournament.create({
    name: "Jaktorów 2009",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2009, 0, 1)
  });

  await jaktorow2009.addCategory(battleMale);

  const kielce2009 = await Tournament.create({
    name: "Kielce 2009",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2009, 0, 1)
  });

  await kielce2009.addCategory(battleMale);

  const olkusz2009 = await Tournament.create({
    name: "Olkusz 2009",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 3,
    date: new Date(2009, 0, 1)
  });

  await olkusz2009.addCategory(battleMale);

  const pyrzyce2009 = await Tournament.create({
    name: "Pyrzyce 2009",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 4,
    date: new Date(2009, 0, 1)
  });

  await pyrzyce2009.addCategory(battleMale);

  const rbss2009 = await Tournament.create({
    name: "RBSS 2009",
    tournamentTierId: polishChampionships.id,
    date: new Date(2009, 0, 1)
  });

  await rbss2009.addCategory(battleMale);

  const zawiercie2009 = await Tournament.create({
    name: "Zawiercie 2009",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2009, 0, 1)
  });

  await zawiercie2009.addCategory(battleMale);

  const cieszyn2010 = await Tournament.create({
    name: "Cieszyn 2010",
    tournamentTierId: polishChampionships.id,
    date: new Date(2010, 0, 1)
  });

  await cieszyn2010.addCategory(battleMale);

  const jarocin2010 = await Tournament.create({
    name: "Jarocin 2010",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2010, 0, 1)
  });

  await jarocin2010.addCategory(battleMale);

  const lodz2010 = await Tournament.create({
    name: "Łódź 2010",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2010, 0, 1)
  });

  await lodz2010.addCategory(battleMale);

  const miedzyzdroje2010 = await Tournament.create({
    name: "Międzyzdroje 2010",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2010, 0, 1)
  });

  await miedzyzdroje2010.addCategory(battleMale);

  const olkusz2010 = await Tournament.create({
    name: "Olkusz 2010",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 3,
    date: new Date(2010, 0, 1)
  });

  await olkusz2010.addCategory(battleMale);

  const pyrzyce2010 = await Tournament.create({
    name: "Pyrzyce 2010",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 4,
    date: new Date(2010, 0, 1)
  });

  await pyrzyce2010.addCategory(battleMale);

  const focus2011 = await Tournament.create({
    name: "Focus 2011",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2011, 0, 1)
  });

  await focus2011.addCategory(battleMale);

  const grassroots2011 = await Tournament.create({
    name: "Grassroots 2011",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2011, 0, 1)
  });

  await grassroots2011.addCategory(battleMale);

  const miedzyzdroje2011 = await Tournament.create({
    name: "Międzyzdroje 2011",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2011, 0, 1)
  });

  await miedzyzdroje2011.addCategory(battleMale);

  const myszkow2011 = await Tournament.create({
    name: "Myszków 2011",
    tournamentTierId: polishChampionships.id,
    date: new Date(2011, 0, 1)
  });

  await myszkow2011.addCategory(battleMale);

  const pabianice2011 = await Tournament.create({
    name: "Pabianice 2011",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2011, 0, 1)
  });

  await pabianice2011.addCategory(battleMale);

  const zerkow2011 = await Tournament.create({
    name: "Żerków 2011",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2011, 0, 1)
  });

  await zerkow2011.addCategory(battleMale);

  const bytow2012 = await Tournament.create({
    name: "Bytów 2012",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2012, 0, 1)
  });

  await bytow2012.addCategory(battleMale);

  const focus2012 = await Tournament.create({
    name: "Focus 2012",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2012, 0, 1)
  });

  await focus2012.addCategory(battleMale);

  const myszkow2012 = await Tournament.create({
    name: "Myszków 2012",
    tournamentTierId: polishChampionships.id,
    date: new Date(2012, 0, 1)
  });

  await myszkow2012.addCategory(battleMale);

  const rbss2012 = await Tournament.create({
    name: "RBSS 2012",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2012, 0, 1)
  });

  await rbss2012.addCategory(battleMale);

  const zerkow2012 = await Tournament.create({
    name: "Żerków 2012",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2012, 0, 1)
  });

  await zerkow2012.addCategory(battleMale);

  const battlemasters2013 = await Tournament.create({
    name: "Battlemasters Wrocław 2013",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2013, 0, 1)
  });

  await battlemasters2013.addCategory(battleMale);

  const hs2013 = await Tournament.create({
    name: "H&S 2013",
    tournamentTierId: polishChampionships.id, // TODO: really?
    date: new Date(2013, 0, 1)
  });

  await hs2013.addCategory(battleMale);

  const lfn2013 = await Tournament.create({
    name: "LFN 2013",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 4,
    date: new Date(2013, 0, 1)
  });

  await lfn2013.addCategory(battleMale);

  const plock2013 = await Tournament.create({
    name: "Płock 2013",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2013, 0, 1)
  });

  await plock2013.addCategory(battleMale);

  const zerkow2013 = await Tournament.create({
    name: "Żerków 2013",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2013, 0, 1)
  });

  await zerkow2013.addCategory(battleMale);

  const bytom2014 = await Tournament.create({
    name: "Bytom 2014",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2014, 0, 1)
  });

  await bytom2014.addCategory(battleMale);

  const czarnkow2014 = await Tournament.create({
    name: "Czarnków 2014",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2014, 0, 1)
  });

  await czarnkow2014.addCategory(battleMale);

  const miedzyzdroje2014 = await Tournament.create({
    name: "Międzyzdroje 2014",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2014, 0, 1)
  });

  await miedzyzdroje2014.addCategory(battleMale);

  const myszkow2014 = await Tournament.create({
    name: "Myszków 2014",
    tournamentTierId: polishChampionships.id,
    date: new Date(2014, 0, 1)
  });

  await myszkow2014.addCategory(battleMale);

  const skawina2014 = await Tournament.create({
    name: "Skawina 2014",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 3,
    date: new Date(2014, 0, 1)
  });

  await skawina2014.addCategory(battleMale);

  const zerkow2014 = await Tournament.create({
    name: "Żerków 2014",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2014, 0, 1)
  });

  await zerkow2014.addCategory(battleMale);

  const blaszki2015 = await Tournament.create({
    name: "Błaszki 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2015, 0, 1)
  });

  await blaszki2015.addCategory(battleMale);

  const bytom2015 = await Tournament.create({
    name: "Bytom 2015",
    tournamentTierId: polishChampionships.id,
    date: new Date(2015, 0, 1)
  });

  await bytom2015.addCategory(battleMale);

  const czarnkow2015 = await Tournament.create({
    name: "Czarnków 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2015, 0, 1)
  });

  await czarnkow2015.addCategory(battleMale);

  const focus2015 = await Tournament.create({
    name: "Focus 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2015, 0, 1)
  });

  await focus2015.addCategory(battleMale);

  const gubin2015 = await Tournament.create({
    name: "Gubin 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2015, 0, 1)
  });

  await gubin2015.addCategory(battleMale);

  const lublin2015 = await Tournament.create({
    name: "Lublin 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2015, 0, 1)
  });

  await lublin2015.addCategory(battleMale);

  const miedzyzdroje2015 = await Tournament.create({
    name: "Międzyzdroje 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2015, 0, 1)
  });

  await miedzyzdroje2015.addCategory(battleMale);

  const przygodzice2015 = await Tournament.create({
    name: "Przygodzice 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2015, 0, 1)
  });

  await przygodzice2015.addCategory(battleMale);

  const skawina2015 = await Tournament.create({
    name: "Skawina 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 3,
    date: new Date(2015, 0, 1)
  });

  await skawina2015.addCategory(battleMale);

  const zerkow2015 = await Tournament.create({
    name: "Żerków 2015",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2015, 0, 1)
  });

  await zerkow2015.addCategory(battleMale);

  const blaszki2016 = await Tournament.create({
    name: "Błaszki 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2016, 0, 1)
  });

  await blaszki2016.addCategory(battleMale);

  const bytom2016 = await Tournament.create({
    name: "Bytom M1 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2016, 0, 1)
  });

  await bytom2016.addCategory(battleMale);

  const czestochowa2016 = await Tournament.create({
    name: "Częstochowa M1 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2016, 0, 1)
  });

  await czestochowa2016.addCategory(battleMale);

  const focus2016 = await Tournament.create({
    name: "Focus 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2016, 0, 1)
  });

  await focus2016.addCategory(battleMale);

  const gubin2016 = await Tournament.create({
    name: "Gubin 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2016, 0, 1)
  });

  await gubin2016.addCategory(battleMale);

  const lfn2016 = await Tournament.create({
    name: "LFN 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 4,
    date: new Date(2016, 0, 1)
  });

  await lfn2016.addCategory(battleMale);

  const lublin2016 = await Tournament.create({
    name: "Lublin 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2016, 0, 1)
  });

  await lublin2016.addCategory(battleMale);

  const marki2016 = await Tournament.create({
    name: "Marki M1 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2016, 0, 1)
  });

  await marki2016.addCategory(battleMale);

  const olkusz2016 = await Tournament.create({
    name: "Olkusz 2016",
    tournamentTierId: polishChampionships.id,
    date: new Date(2016, 0, 1)
  });

  await olkusz2016.addCategory(battleMale);

  const radom2016 = await Tournament.create({
    name: "Radom M1 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2016, 0, 1)
  });

  await radom2016.addCategory(battleMale);

  const skawina2016 = await Tournament.create({
    name: "Skawina 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 3,
    date: new Date(2016, 0, 1)
  });

  await skawina2016.addCategory(battleMale);

  const zabrze2016 = await Tournament.create({
    name: "Zabrze M1 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2016, 0, 1)
  });

  await zabrze2016.addCategory(battleMale);

  const zerkow2016 = await Tournament.create({
    name: "Żerków 2016",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2016, 0, 1)
  });

  await zerkow2016.addCategory(battleMale);

  const blaszki2017 = await Tournament.create({
    name: "Błaszki 2017",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 2,
    date: new Date(2017, 0, 1)
  });

  await blaszki2017.addCategory(battleMale);

  const chojnice2017 = await Tournament.create({
    name: "Chojnice 2017",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 1,
    date: new Date(2017, 0, 1)
  });

  await chojnice2017.addCategory(battleMale);

  const focus2017 = await Tournament.create({
    name: "Focus 2017",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2017, 0, 1)
  });

  await focus2017.addCategory(battleMale);

  const freestival2017 = await Tournament.create({
    name: "Freestival 2017",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 5,
    date: new Date(2017, 0, 1)
  });

  await freestival2017.addCategory(battleMale);

  const olkusz2017 = await Tournament.create({
    name: "Olkusz 2017",
    tournamentTierId: polishChampionships.id,
    date: new Date(2017, 0, 1)
  });

  await olkusz2017.addCategory(battleMale);

  const skawina2017 = await Tournament.create({
    name: "Skawina 2017",
    tournamentTierId: polishTournament.id, // TODO: to be adjusted
    weight: 3,
    date: new Date(2017, 0, 1)
  });

  await skawina2017.addCategory(battleMale);
}

export async function createLocations() {
  debug("creating locations starting...");

  await Location.create({
    name: "Zawiercie",
    latitude: 50.5054104,
    longitude: 19.3992064
  });
  await Location.create({
    name: "Olkusz",
    latitude: 50.2857114,
    longitude: 19.526675
  });
  await Location.create({
    name: "Pyrzyce",
    latitude: 53.1423448,
    longitude: 14.8574648
  });
  await Location.create({
    name: "Jaktorów",
    latitude: 52.0839776,
    longitude: 20.5359227
  });
  await Location.create({
    name: "Kielce",
    latitude: 50.8540189,
    longitude: 20.5454304
  });
  await Location.create({
    name: "Warszawa",
    latitude: 52.2328546,
    longitude: 20.9207696
  });
  await Location.create({
    name: "Cieszyn",
    latitude: 49.7557804,
    longitude: 18.6151379
  });
  await Location.create({
    name: "Jarocin",
    latitude: 51.9615501,
    longitude: 17.4724849
  });
  await Location.create({
    name: "Łódź",
    latitude: 51.773097,
    longitude: 19.4103816
  });
  await Location.create({
    name: "Międzyzdroje",
    latitude: 53.9257449,
    longitude: 14.419075
  });
  await Location.create({
    name: "Bydgoszcz",
    latitude: 53.1256665,
    longitude: 17.9679715
  });
  await Location.create({
    name: "Pabianice",
    latitude: 51.6661031,
    longitude: 19.3196791
  });
  await Location.create({
    name: "Bytów",
    latitude: 54.1798532,
    longitude: 17.4655113
  });
  await Location.create({
    name: "Płock",
    latitude: 52.5353854,
    longitude: 19.6448352
  });
  await Location.create({
    name: "Bytom",
    latitude: 50.3650716,
    longitude: 18.8064486
  });
  await Location.create({
    name: "Czarnków",
    latitude: 52.9010141,
    longitude: 16.5406719
  });
  await Location.create({
    name: "Skawina",
    latitude: 49.9735749,
    longitude: 19.8074803
  });
  await Location.create({
    name: "Błaszki",
    latitude: 51.6523097,
    longitude: 18.4340231
  });
  await Location.create({
    name: "Gubin",
    latitude: 51.9572149,
    longitude: 14.7141162
  });
  await Location.create({
    name: "Lublin",
    latitude: 51.218088,
    longitude: 22.4935593
  });
  await Location.create({
    name: "Przygodzice",
    latitude: 51.5963727,
    longitude: 17.8107978
  });
  await Location.create({
    name: "Częstochowa",
    latitude: 50.8092996,
    longitude: 19.0525602
  });
  await Location.create({
    name: "Marki",
    latitude: 52.337067,
    longitude: 21.0848871
  });
  await Location.create({
    name: "Radom",
    latitude: 51.4150446,
    longitude: 21.083763
  });
  await Location.create({
    name: "Zabrze",
    latitude: 50.3149192,
    longitude: 18.7264394
  });
  await Location.create({
    name: "Chojnice",
    latitude: 53.7000897,
    longitude: 17.5226015
  });
  await Location.create({
    name: "Grodzisk Mazowiecki",
    latitude: 52.1050774,
    longitude: 20.6155303
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
    tournamentId: 1,
    categoryId: 1,
    playerId: 1,
    place: 1
  });
  await Result.create({
    tournamentId: 1,
    categoryId: 1,
    playerId: 2,
    place: 2
  });
  await Result.create({
    tournamentId: 1,
    categoryId: 1,
    playerId: 3,
    place: 3
  });
  await Result.create({
    tournamentId: 1,
    categoryId: 1,
    playerId: 4,
    place: 4
  });
  // Olkusz 2008:
  await Result.create({
    tournamentId: 2,
    categoryId: 1,
    playerId: 5,
    place: 1
  });
  await Result.create({
    tournamentId: 2,
    categoryId: 1,
    playerId: 1,
    place: 2
  });
  await Result.create({
    tournamentId: 2,
    categoryId: 1,
    playerId: 6,
    place: 3
  });
  // Pyrzyce 2008:
  await Result.create({
    tournamentId: 3,
    categoryId: 1,
    playerId: 6,
    place: 1
  });
  await Result.create({
    tournamentId: 3,
    categoryId: 1,
    playerId: 2,
    place: 2
  });
  await Result.create({
    tournamentId: 3,
    categoryId: 1,
    playerId: 1,
    place: 3
  });
  // Zawiercie 2008:
  await Result.create({
    tournamentId: 4,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 4,
    categoryId: 1,
    playerId: 7,
    place: 2
  });
  await Result.create({
    tournamentId: 4,
    categoryId: 1,
    playerId: 3,
    place: 3
  });
  // Jaktorów 2009:
  await Result.create({
    tournamentId: 5,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 5,
    categoryId: 1,
    playerId: 7,
    place: 2
  });
  await Result.create({
    tournamentId: 5,
    categoryId: 1,
    playerId: 8,
    place: 3
  });
  // Kielce 2009:
  await Result.create({
    tournamentId: 6,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 6,
    categoryId: 1,
    playerId: 7,
    place: 2
  });
  await Result.create({
    tournamentId: 6,
    categoryId: 1,
    playerId: 3,
    place: 3
  });
  // Olkusz 2009:
  await Result.create({
    tournamentId: 7,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  await Result.create({
    tournamentId: 7,
    categoryId: 1,
    playerId: 8,
    place: 2
  });
  await Result.create({
    tournamentId: 7,
    categoryId: 1,
    playerId: 9,
    place: 3
  });
  // Pyrzyce 2009:
  await Result.create({
    tournamentId: 8,
    categoryId: 1,
    playerId: 6,
    place: 3
  });
  // RBSS 2009:
  await Result.create({
    tournamentId: 9,
    categoryId: 1,
    playerId: 10,
    place: 1
  });
  await Result.create({
    tournamentId: 9,
    categoryId: 1,
    playerId: 2,
    place: 2
  });
  await Result.create({
    tournamentId: 9,
    categoryId: 1,
    playerId: 1,
    place: 3
  });
  await Result.create({
    tournamentId: 9,
    categoryId: 1,
    playerId: 11,
    place: 4
  });
  await Result.create({
    tournamentId: 9,
    categoryId: 1,
    playerId: 6,
    place: 5
  });
  await Result.create({
    tournamentId: 9,
    categoryId: 1,
    playerId: 3,
    place: 6
  });
  await Result.create({
    tournamentId: 9,
    categoryId: 1,
    playerId: 7,
    place: 7
  });
  await Result.create({
    tournamentId: 9,
    categoryId: 1,
    playerId: 4,
    place: 8
  });
  // Zawiercie 2009:
  await Result.create({
    tournamentId: 10,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 10,
    categoryId: 1,
    playerId: 1,
    place: 2
  });
  await Result.create({
    tournamentId: 10,
    categoryId: 1,
    playerId: 11,
    place: 3
  });
  // Cieszyn 2010:
  await Result.create({
    tournamentId: 11,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 11,
    categoryId: 1,
    playerId: 12,
    place: 2
  });
  await Result.create({
    tournamentId: 11,
    categoryId: 1,
    playerId: 13,
    place: 3
  });
  await Result.create({
    tournamentId: 11,
    categoryId: 1,
    playerId: 3,
    place: 4
  });
  await Result.create({
    tournamentId: 11,
    categoryId: 1,
    playerId: 8,
    place: 5
  });
  await Result.create({
    tournamentId: 11,
    categoryId: 1,
    playerId: 14,
    place: 6
  });
  await Result.create({
    tournamentId: 11,
    categoryId: 1,
    playerId: 11,
    place: 7
  });
  await Result.create({
    tournamentId: 11,
    categoryId: 1,
    playerId: 15,
    place: 8
  });
  // Jarocin 2010:
  await Result.create({
    tournamentId: 12,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  await Result.create({
    tournamentId: 12,
    categoryId: 1,
    playerId: 6,
    place: 2
  });
  await Result.create({
    tournamentId: 12,
    categoryId: 1,
    playerId: 2,
    place: 3
  });
  await Result.create({
    tournamentId: 12,
    categoryId: 1,
    playerId: 13,
    place: 4
  });
  await Result.create({
    tournamentId: 12,
    categoryId: 1,
    playerId: 1,
    place: 5
  });
  await Result.create({
    tournamentId: 12,
    categoryId: 1,
    playerId: 12,
    place: 6
  });
  await Result.create({
    tournamentId: 12,
    categoryId: 1,
    playerId: 16,
    place: 7
  });
  await Result.create({
    tournamentId: 12,
    categoryId: 1,
    playerId: 17,
    place: 8
  });
  // Łódź 2010:
  await Result.create({
    tournamentId: 13,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 13,
    categoryId: 1,
    playerId: 13,
    place: 2
  });
  await Result.create({
    tournamentId: 13,
    categoryId: 1,
    playerId: 1,
    place: 3
  });
  // Międzyzdroje 2010:
  await Result.create({
    tournamentId: 14,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 14,
    categoryId: 1,
    playerId: 6,
    place: 2
  });
  await Result.create({
    tournamentId: 14,
    categoryId: 1,
    playerId: 18,
    place: 3
  });
  // Olkusz 2010:
  await Result.create({
    tournamentId: 15,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 15,
    categoryId: 1,
    playerId: 1,
    place: 2
  });
  await Result.create({
    tournamentId: 15,
    categoryId: 1,
    playerId: 12,
    place: 3
  });
  // Pyrzyce 2010:
  await Result.create({
    tournamentId: 16,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  // Focus 2011:
  await Result.create({
    tournamentId: 17,
    categoryId: 1,
    playerId: 1,
    place: 1
  });
  await Result.create({
    tournamentId: 17,
    categoryId: 1,
    playerId: 13,
    place: 2
  });
  await Result.create({
    tournamentId: 17,
    categoryId: 1,
    playerId: 2,
    place: 3
  });
  await Result.create({
    tournamentId: 17,
    categoryId: 1,
    playerId: 19,
    place: 4
  });
  await Result.create({
    tournamentId: 17,
    categoryId: 1,
    playerId: 12,
    place: 5
  });
  await Result.create({
    tournamentId: 17,
    categoryId: 1,
    playerId: 20,
    place: 6
  });
  await Result.create({
    tournamentId: 17,
    categoryId: 1,
    playerId: 7,
    place: 7
  });
  await Result.create({
    tournamentId: 17,
    categoryId: 1,
    playerId: 10,
    place: 8
  });
  // Grassroots 2011:
  await Result.create({
    tournamentId: 18,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  await Result.create({
    tournamentId: 18,
    categoryId: 1,
    playerId: 1,
    place: 2
  });
  await Result.create({
    tournamentId: 18,
    categoryId: 1,
    playerId: 10,
    place: 3
  });
  // Międzyzdroje 2011:
  await Result.create({
    tournamentId: 19,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 19,
    categoryId: 1,
    playerId: 6,
    place: 2
  });
  await Result.create({
    tournamentId: 19,
    categoryId: 1,
    playerId: 20,
    place: 3
  });
  // Myszków 2011:
  await Result.create({
    tournamentId: 20,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  await Result.create({
    tournamentId: 20,
    categoryId: 1,
    playerId: 10,
    place: 2
  });
  await Result.create({
    tournamentId: 20,
    categoryId: 1,
    playerId: 2,
    place: 3
  });
  await Result.create({
    tournamentId: 20,
    categoryId: 1,
    playerId: 1,
    place: 4
  });
  await Result.create({
    tournamentId: 20,
    categoryId: 1,
    playerId: 21,
    place: 5
  });
  await Result.create({
    tournamentId: 20,
    categoryId: 1,
    playerId: 22,
    place: 6
  });
  await Result.create({
    tournamentId: 20,
    categoryId: 1,
    playerId: 11,
    place: 7
  });
  await Result.create({
    tournamentId: 20,
    categoryId: 1,
    playerId: 23,
    place: 8
  });
  // Pabianice 2011:
  await Result.create({
    tournamentId: 21,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 21,
    categoryId: 1,
    playerId: 20,
    place: 2
  });
  await Result.create({
    tournamentId: 21,
    categoryId: 1,
    playerId: 2,
    place: 3
  });
  // Żerków 2011:
  await Result.create({
    tournamentId: 22,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 22,
    categoryId: 1,
    playerId: 1,
    place: 2
  });
  await Result.create({
    tournamentId: 22,
    categoryId: 1,
    playerId: 13,
    place: 3
  });
  await Result.create({
    tournamentId: 22,
    categoryId: 1,
    playerId: 20,
    place: 4
  });
  await Result.create({
    tournamentId: 22,
    categoryId: 1,
    playerId: 11,
    place: 5
  });
  await Result.create({
    tournamentId: 22,
    categoryId: 1,
    playerId: 24,
    place: 6
  });
  await Result.create({
    tournamentId: 22,
    categoryId: 1,
    playerId: 25,
    place: 7
  });
  await Result.create({
    tournamentId: 22,
    categoryId: 1,
    playerId: 14,
    place: 8
  });
  // Bytów 2012:
  await Result.create({
    tournamentId: 23,
    categoryId: 1,
    playerId: 10,
    place: 1
  });
  await Result.create({
    tournamentId: 23,
    categoryId: 1,
    playerId: 2,
    place: 2
  });
  await Result.create({
    tournamentId: 23,
    categoryId: 1,
    playerId: 20,
    place: 3
  });
  // Focus 2012:
  await Result.create({
    tournamentId: 24,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  await Result.create({
    tournamentId: 24,
    categoryId: 1,
    playerId: 1,
    place: 2
  });
  await Result.create({
    tournamentId: 24,
    categoryId: 1,
    playerId: 13,
    place: 3
  });
  await Result.create({
    tournamentId: 24,
    categoryId: 1,
    playerId: 11,
    place: 4
  });
  await Result.create({
    tournamentId: 24,
    categoryId: 1,
    playerId: 10,
    place: 5
  });
  await Result.create({
    tournamentId: 24,
    categoryId: 1,
    playerId: 26,
    place: 6
  });
  await Result.create({
    tournamentId: 24,
    categoryId: 1,
    playerId: 2,
    place: 7
  });
  await Result.create({
    tournamentId: 24,
    categoryId: 1,
    playerId: 12,
    place: 8
  });
  // Myszków 2012:
  await Result.create({
    tournamentId: 25,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  await Result.create({
    tournamentId: 25,
    categoryId: 1,
    playerId: 10,
    place: 2
  });
  await Result.create({
    tournamentId: 25,
    categoryId: 1,
    playerId: 2,
    place: 3
  });
  await Result.create({
    tournamentId: 25,
    categoryId: 1,
    playerId: 23,
    place: 4
  });
  await Result.create({
    tournamentId: 25,
    categoryId: 1,
    playerId: 13,
    place: 5
  });
  await Result.create({
    tournamentId: 25,
    categoryId: 1,
    playerId: 25,
    place: 6
  });
  await Result.create({
    tournamentId: 25,
    categoryId: 1,
    playerId: 24,
    place: 7
  });
  await Result.create({
    tournamentId: 25,
    categoryId: 1,
    playerId: 12,
    place: 8
  });
  // RBSS 2012:
  await Result.create({
    tournamentId: 26,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 26,
    categoryId: 1,
    playerId: 20,
    place: 2
  });
  await Result.create({
    tournamentId: 26,
    categoryId: 1,
    playerId: 2,
    place: 3
  });
  await Result.create({
    tournamentId: 26,
    categoryId: 1,
    playerId: 19,
    place: 4
  });
  await Result.create({
    tournamentId: 26,
    categoryId: 1,
    playerId: 10,
    place: 5
  });
  await Result.create({
    tournamentId: 26,
    categoryId: 1,
    playerId: 14,
    place: 6
  });
  await Result.create({
    tournamentId: 26,
    categoryId: 1,
    playerId: 27,
    place: 7
  });
  await Result.create({
    tournamentId: 26,
    categoryId: 1,
    playerId: 7,
    place: 8
  });
  // Żerków 2012:
  await Result.create({
    tournamentId: 27,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  await Result.create({
    tournamentId: 27,
    categoryId: 1,
    playerId: 1,
    place: 2
  });
  await Result.create({
    tournamentId: 27,
    categoryId: 1,
    playerId: 11,
    place: 3
  });
  await Result.create({
    tournamentId: 27,
    categoryId: 1,
    playerId: 19,
    place: 4
  });
  await Result.create({
    tournamentId: 27,
    categoryId: 1,
    playerId: 14,
    place: 5
  });
  await Result.create({
    tournamentId: 27,
    categoryId: 1,
    playerId: 23,
    place: 6
  });
  await Result.create({
    tournamentId: 27,
    categoryId: 1,
    playerId: 8,
    place: 7
  });
  await Result.create({
    tournamentId: 27,
    categoryId: 1,
    playerId: 27,
    place: 8
  });
  // Battlemasters Wrocław 2013:
  await Result.create({
    tournamentId: 28,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 28,
    categoryId: 1,
    playerId: 2,
    place: 2
  });
  await Result.create({
    tournamentId: 28,
    categoryId: 1,
    playerId: 20,
    place: 3
  });
  // H&S 2013:
  await Result.create({
    tournamentId: 29,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 29,
    categoryId: 1,
    playerId: 10,
    place: 2
  });
  await Result.create({
    tournamentId: 29,
    categoryId: 1,
    playerId: 1,
    place: 3
  });
  await Result.create({
    tournamentId: 29,
    categoryId: 1,
    playerId: 12,
    place: 4
  });
  await Result.create({
    tournamentId: 29,
    categoryId: 1,
    playerId: 2,
    place: 5
  });
  await Result.create({
    tournamentId: 29,
    categoryId: 1,
    playerId: 28,
    place: 6
  });
  await Result.create({
    tournamentId: 29,
    categoryId: 1,
    playerId: 11,
    place: 7
  });
  await Result.create({
    tournamentId: 29,
    categoryId: 1,
    playerId: 20,
    place: 8
  });
  // LFN 2013:
  await Result.create({
    tournamentId: 30,
    categoryId: 1,
    playerId: 13,
    place: 3
  });
  // Płock 2013:
  await Result.create({
    tournamentId: 31,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 31,
    categoryId: 1,
    playerId: 19,
    place: 2
  });
  await Result.create({
    tournamentId: 31,
    categoryId: 1,
    playerId: 13,
    place: 3
  });
  // Żerków 2013:
  await Result.create({
    tournamentId: 32,
    categoryId: 1,
    playerId: 1,
    place: 1
  });
  await Result.create({
    tournamentId: 32,
    categoryId: 1,
    playerId: 2,
    place: 2
  });
  await Result.create({
    tournamentId: 32,
    categoryId: 1,
    playerId: 11,
    place: 3
  });
  await Result.create({
    tournamentId: 32,
    categoryId: 1,
    playerId: 20,
    place: 4
  });
  await Result.create({
    tournamentId: 32,
    categoryId: 1,
    playerId: 29,
    place: 5
  });
  await Result.create({
    tournamentId: 32,
    categoryId: 1,
    playerId: 25,
    place: 6
  });
  await Result.create({
    tournamentId: 32,
    categoryId: 1,
    playerId: 23,
    place: 7
  });
  await Result.create({
    tournamentId: 32,
    categoryId: 1,
    playerId: 30,
    place: 8
  });
  // Bytom 2014:
  await Result.create({
    tournamentId: 33,
    categoryId: 1,
    playerId: 1,
    place: 1
  });
  await Result.create({
    tournamentId: 33,
    categoryId: 1,
    playerId: 12,
    place: 2
  });
  await Result.create({
    tournamentId: 33,
    categoryId: 1,
    playerId: 11,
    place: 3
  });
  // Czarnków 2014:
  await Result.create({
    tournamentId: 34,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 34,
    categoryId: 1,
    playerId: 11,
    place: 2
  });
  await Result.create({
    tournamentId: 34,
    categoryId: 1,
    playerId: 31,
    place: 3
  });
  // Międzyzdroje 2014:
  await Result.create({
    tournamentId: 35,
    categoryId: 1,
    playerId: 20,
    place: 1
  });
  await Result.create({
    tournamentId: 35,
    categoryId: 1,
    playerId: 45,
    place: 2
  });
  await Result.create({
    tournamentId: 35,
    categoryId: 1,
    playerId: 31,
    place: 3
  });
  // Myszków 2014:
  await Result.create({
    tournamentId: 36,
    categoryId: 1,
    playerId: 10,
    place: 1
  });
  await Result.create({
    tournamentId: 36,
    categoryId: 1,
    playerId: 2,
    place: 2
  });
  await Result.create({
    tournamentId: 36,
    categoryId: 1,
    playerId: 7,
    place: 3
  });
  await Result.create({
    tournamentId: 36,
    categoryId: 1,
    playerId: 29,
    place: 4
  });
  await Result.create({
    tournamentId: 36,
    categoryId: 1,
    playerId: 23,
    place: 5
  });
  await Result.create({
    tournamentId: 36,
    categoryId: 1,
    playerId: 19,
    place: 6
  });
  await Result.create({
    tournamentId: 36,
    categoryId: 1,
    playerId: 13,
    place: 7
  });
  await Result.create({
    tournamentId: 36,
    categoryId: 1,
    playerId: 11,
    place: 8
  });
  // Skawina 2014:
  await Result.create({
    tournamentId: 37,
    categoryId: 1,
    playerId: 11,
    place: 1
  });
  await Result.create({
    tournamentId: 37,
    categoryId: 1,
    playerId: 20,
    place: 2
  });
  await Result.create({
    tournamentId: 37,
    categoryId: 1,
    playerId: 32,
    place: 3
  });
  // Żerków 2014:
  await Result.create({
    tournamentId: 38,
    categoryId: 1,
    playerId: 20,
    place: 1
  });
  await Result.create({
    tournamentId: 38,
    categoryId: 1,
    playerId: 7,
    place: 2
  });
  await Result.create({
    tournamentId: 38,
    categoryId: 1,
    playerId: 12,
    place: 3
  });
  await Result.create({
    tournamentId: 38,
    categoryId: 1,
    playerId: 13,
    place: 4
  });
  await Result.create({
    tournamentId: 38,
    categoryId: 1,
    playerId: 29,
    place: 5
  });
  await Result.create({
    tournamentId: 38,
    categoryId: 1,
    playerId: 32,
    place: 6
  });
  await Result.create({
    tournamentId: 38,
    categoryId: 1,
    playerId: 11,
    place: 7
  });
  await Result.create({
    tournamentId: 38,
    categoryId: 1,
    playerId: 31,
    place: 8
  });
  // Błaszki 2015:
  await Result.create({
    tournamentId: 39,
    categoryId: 1,
    playerId: 33,
    place: 1
  });
  await Result.create({
    tournamentId: 39,
    categoryId: 1,
    playerId: 34,
    place: 2
  });
  await Result.create({
    tournamentId: 39,
    categoryId: 1,
    playerId: 31,
    place: 3
  });
  // Bytom 2015:
  await Result.create({
    tournamentId: 40,
    categoryId: 1,
    playerId: 32,
    place: 1
  });
  await Result.create({
    tournamentId: 40,
    categoryId: 1,
    playerId: 13,
    place: 2
  });
  await Result.create({
    tournamentId: 40,
    categoryId: 1,
    playerId: 1,
    place: 3
  });
  await Result.create({
    tournamentId: 40,
    categoryId: 1,
    playerId: 33,
    place: 4
  });
  await Result.create({
    tournamentId: 40,
    categoryId: 1,
    playerId: 11,
    place: 5
  });
  await Result.create({
    tournamentId: 40,
    categoryId: 1,
    playerId: 19,
    place: 6
  });
  await Result.create({
    tournamentId: 40,
    categoryId: 1,
    playerId: 34,
    place: 7
  });
  await Result.create({
    tournamentId: 40,
    categoryId: 1,
    playerId: 15,
    place: 8
  });
  // Czarnków 2015:
  await Result.create({
    tournamentId: 41,
    categoryId: 1,
    playerId: 7,
    place: 1
  });
  await Result.create({
    tournamentId: 41,
    categoryId: 1,
    playerId: 11,
    place: 2
  });
  await Result.create({
    tournamentId: 41,
    categoryId: 1,
    playerId: 10,
    place: 3
  });
  // Focus 2015:
  await Result.create({
    tournamentId: 42,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 42,
    categoryId: 1,
    playerId: 10,
    place: 2
  });
  await Result.create({
    tournamentId: 42,
    categoryId: 1,
    playerId: 29,
    place: 3
  });
  await Result.create({
    tournamentId: 42,
    categoryId: 1,
    playerId: 32,
    place: 4
  });
  await Result.create({
    tournamentId: 42,
    categoryId: 1,
    playerId: 28,
    place: 5
  });
  await Result.create({
    tournamentId: 42,
    categoryId: 1,
    playerId: 2,
    place: 6
  });
  await Result.create({
    tournamentId: 42,
    categoryId: 1,
    playerId: 11,
    place: 7
  });
  await Result.create({
    tournamentId: 42,
    categoryId: 1,
    playerId: 12,
    place: 8
  });
  // Gubin 2015:
  await Result.create({
    tournamentId: 43,
    categoryId: 1,
    playerId: 35,
    place: 1
  });
  await Result.create({
    tournamentId: 43,
    categoryId: 1,
    playerId: 36,
    place: 2
  });
  await Result.create({
    tournamentId: 43,
    categoryId: 1,
    playerId: 37,
    place: 3
  });
  // Lublin 2015:
  await Result.create({
    tournamentId: 44,
    categoryId: 1,
    playerId: 19,
    place: 1
  });
  await Result.create({
    tournamentId: 44,
    categoryId: 1,
    playerId: 20,
    place: 2
  });
  await Result.create({
    tournamentId: 44,
    categoryId: 1,
    playerId: 32,
    place: 3
  });
  // Międzyzdroje 2015:
  await Result.create({
    tournamentId: 45,
    categoryId: 1,
    playerId: 20,
    place: 1
  });
  await Result.create({
    tournamentId: 45,
    categoryId: 1,
    playerId: 38,
    place: 2
  });
  // Przygodzice 2015:
  await Result.create({
    tournamentId: 46,
    categoryId: 1,
    playerId: 34,
    place: 1
  });
  await Result.create({
    tournamentId: 46,
    categoryId: 1,
    playerId: 31,
    place: 2
  });
  await Result.create({
    tournamentId: 46,
    categoryId: 1,
    playerId: 39,
    place: 3
  });
  // Skawina 2015:
  await Result.create({
    tournamentId: 47,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 47,
    categoryId: 1,
    playerId: 11,
    place: 2
  });
  await Result.create({
    tournamentId: 47,
    categoryId: 1,
    playerId: 8,
    place: 3
  });
  // Żerków 2015:
  await Result.create({
    tournamentId: 48,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 48,
    categoryId: 1,
    playerId: 11,
    place: 2
  });
  await Result.create({
    tournamentId: 48,
    categoryId: 1,
    playerId: 12,
    place: 3
  });
  await Result.create({
    tournamentId: 48,
    categoryId: 1,
    playerId: 40,
    place: 4
  });
  await Result.create({
    tournamentId: 48,
    categoryId: 1,
    playerId: 1,
    place: 5
  });
  await Result.create({
    tournamentId: 48,
    categoryId: 1,
    playerId: 29,
    place: 6
  });
  await Result.create({
    tournamentId: 48,
    categoryId: 1,
    playerId: 24,
    place: 7
  });
  await Result.create({
    tournamentId: 48,
    categoryId: 1,
    playerId: 28,
    place: 8
  });
  // Błaszki 2016:
  await Result.create({
    tournamentId: 49,
    categoryId: 1,
    playerId: 31,
    place: 1
  });
  await Result.create({
    tournamentId: 49,
    categoryId: 1,
    playerId: 13,
    place: 2
  });
  await Result.create({
    tournamentId: 49,
    categoryId: 1,
    playerId: 34,
    place: 3
  });
  // Bytom M1 2016:
  await Result.create({
    tournamentId: 50,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 50,
    categoryId: 1,
    playerId: 2,
    place: 2
  });
  await Result.create({
    tournamentId: 50,
    categoryId: 1,
    playerId: 11,
    place: 3
  });
  // Częstochowa M1 2016:
  await Result.create({
    tournamentId: 51,
    categoryId: 1,
    playerId: 11,
    place: 1
  });
  await Result.create({
    tournamentId: 51,
    categoryId: 1,
    playerId: 13,
    place: 2
  });
  await Result.create({
    tournamentId: 51,
    categoryId: 1,
    playerId: 12,
    place: 3
  });
  // Focus 2016:
  await Result.create({
    tournamentId: 52,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 52,
    categoryId: 1,
    playerId: 10,
    place: 2
  });
  await Result.create({
    tournamentId: 52,
    categoryId: 1,
    playerId: 29,
    place: 3
  });
  await Result.create({
    tournamentId: 52,
    categoryId: 1,
    playerId: 2,
    place: 4
  });
  await Result.create({
    tournamentId: 52,
    categoryId: 1,
    playerId: 32,
    place: 5
  });
  await Result.create({
    tournamentId: 52,
    categoryId: 1,
    playerId: 20,
    place: 6
  });
  // Gubin 2016:
  await Result.create({
    tournamentId: 53,
    categoryId: 1,
    playerId: 37,
    place: 1
  });
  await Result.create({
    tournamentId: 53,
    categoryId: 1,
    playerId: 31,
    place: 2
  });
  await Result.create({
    tournamentId: 53,
    categoryId: 1,
    playerId: 35,
    place: 3
  });
  // LFN 2016:
  await Result.create({
    tournamentId: 54,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  // Lublin 2016:
  await Result.create({
    tournamentId: 55,
    categoryId: 1,
    playerId: 32,
    place: 1
  });
  await Result.create({
    tournamentId: 55,
    categoryId: 1,
    playerId: 29,
    place: 2
  });
  await Result.create({
    tournamentId: 55,
    categoryId: 1,
    playerId: 41,
    place: 3
  });
  // Marki M1 2016:
  await Result.create({
    tournamentId: 56,
    categoryId: 1,
    playerId: 12,
    place: 1
  });
  await Result.create({
    tournamentId: 56,
    categoryId: 1,
    playerId: 8,
    place: 2
  });
  await Result.create({
    tournamentId: 56,
    categoryId: 1,
    playerId: 1,
    place: 3
  });
  // Olkusz 2016:
  await Result.create({
    tournamentId: 57,
    categoryId: 1,
    playerId: 1,
    place: 1
  });
  await Result.create({
    tournamentId: 57,
    categoryId: 1,
    playerId: 11,
    place: 2
  });
  await Result.create({
    tournamentId: 57,
    categoryId: 1,
    playerId: 8,
    place: 3
  });
  await Result.create({
    tournamentId: 57,
    categoryId: 1,
    playerId: 15,
    place: 5
  });
  await Result.create({
    tournamentId: 57,
    categoryId: 1,
    playerId: 12,
    place: 6
  });
  await Result.create({
    tournamentId: 57,
    categoryId: 1,
    playerId: 31,
    place: 7
  });
  await Result.create({
    tournamentId: 57,
    categoryId: 1,
    playerId: 29,
    place: 8
  });
  // Radom M1 2016:
  await Result.create({
    tournamentId: 58,
    categoryId: 1,
    playerId: 2,
    place: 1
  });
  await Result.create({
    tournamentId: 58,
    categoryId: 1,
    playerId: 1,
    place: 2
  });
  await Result.create({
    tournamentId: 58,
    categoryId: 1,
    playerId: 32,
    place: 3
  });
  // Skawina 2016:
  await Result.create({
    tournamentId: 59,
    categoryId: 1,
    playerId: 11,
    place: 1
  });
  await Result.create({
    tournamentId: 59,
    categoryId: 1,
    playerId: 31,
    place: 2
  });
  await Result.create({
    tournamentId: 59,
    categoryId: 1,
    playerId: 13,
    place: 3
  });
  // Zabrze M1 2016:
  await Result.create({
    tournamentId: 60,
    categoryId: 1,
    playerId: 8,
    place: 1
  });
  await Result.create({
    tournamentId: 60,
    categoryId: 1,
    playerId: 13,
    place: 2
  });
  await Result.create({
    tournamentId: 60,
    categoryId: 1,
    playerId: 29,
    place: 3
  });
  // Żerków 2016:
  await Result.create({
    tournamentId: 61,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 61,
    categoryId: 1,
    playerId: 12,
    place: 2
  });
  await Result.create({
    tournamentId: 61,
    categoryId: 1,
    playerId: 11,
    place: 3
  });
  await Result.create({
    tournamentId: 61,
    categoryId: 1,
    playerId: 1,
    place: 4
  });
  await Result.create({
    tournamentId: 61,
    categoryId: 1,
    playerId: 20,
    place: 5
  });
  await Result.create({
    tournamentId: 61,
    categoryId: 1,
    playerId: 29,
    place: 6
  });
  await Result.create({
    tournamentId: 61,
    categoryId: 1,
    playerId: 19,
    place: 7
  });
  await Result.create({
    tournamentId: 61,
    categoryId: 1,
    playerId: 32,
    place: 8
  });
  // Błaszki 2017:
  await Result.create({
    tournamentId: 62,
    categoryId: 1,
    playerId: 12,
    place: 1
  });
  await Result.create({
    tournamentId: 62,
    categoryId: 1,
    playerId: 31,
    place: 2
  });
  await Result.create({
    tournamentId: 62,
    categoryId: 1,
    playerId: 34,
    place: 3
  });
  // Chojnice 2017:
  await Result.create({
    tournamentId: 63,
    categoryId: 1,
    playerId: 20,
    place: 1
  });
  await Result.create({
    tournamentId: 63,
    categoryId: 1,
    playerId: 37,
    place: 2
  });
  await Result.create({
    tournamentId: 63,
    categoryId: 1,
    playerId: 42,
    place: 3
  });
  // Focus 2017:
  await Result.create({
    tournamentId: 64,
    categoryId: 1,
    playerId: 1,
    place: 1
  });
  await Result.create({
    tournamentId: 64,
    categoryId: 1,
    playerId: 29,
    place: 2
  });
  await Result.create({
    tournamentId: 64,
    categoryId: 1,
    playerId: 13,
    place: 3
  });
  await Result.create({
    tournamentId: 64,
    categoryId: 1,
    playerId: 10,
    place: 5
  });
  await Result.create({
    tournamentId: 64,
    categoryId: 1,
    playerId: 34,
    place: 6
  });
  await Result.create({
    tournamentId: 64,
    categoryId: 1,
    playerId: 8,
    place: 7
  });
  // Freestival 2017:
  await Result.create({
    tournamentId: 65,
    categoryId: 1,
    playerId: 12,
    place: 1
  });
  await Result.create({
    tournamentId: 65,
    categoryId: 1,
    playerId: 29,
    place: 2
  });
  await Result.create({
    tournamentId: 65,
    categoryId: 1,
    playerId: 13,
    place: 3
  });
  await Result.create({
    tournamentId: 65,
    categoryId: 1,
    playerId: 43,
    place: 4
  });
  await Result.create({
    tournamentId: 65,
    categoryId: 1,
    playerId: 19,
    place: 5
  });
  await Result.create({
    tournamentId: 65,
    categoryId: 1,
    playerId: 28,
    place: 6
  });
  await Result.create({
    tournamentId: 65,
    categoryId: 1,
    playerId: 44,
    place: 7
  });
  await Result.create({
    tournamentId: 65,
    categoryId: 1,
    playerId: 15,
    place: 8
  });
  // Olkusz 2017:
  await Result.create({
    tournamentId: 66,
    categoryId: 1,
    playerId: 13,
    place: 1
  });
  await Result.create({
    tournamentId: 66,
    categoryId: 1,
    playerId: 10,
    place: 2
  });
  await Result.create({
    tournamentId: 66,
    categoryId: 1,
    playerId: 29,
    place: 3
  });
  await Result.create({
    tournamentId: 66,
    categoryId: 1,
    playerId: 1,
    place: 4
  });
  await Result.create({
    tournamentId: 66,
    categoryId: 1,
    playerId: 8,
    place: 5
  });
  await Result.create({
    tournamentId: 66,
    categoryId: 1,
    playerId: 12,
    place: 6
  });
  await Result.create({
    tournamentId: 66,
    categoryId: 1,
    playerId: 24,
    place: 7
  });
  await Result.create({
    tournamentId: 66,
    categoryId: 1,
    playerId: 32,
    place: 8
  });
  // Skawina 2017:
  await Result.create({
    tournamentId: 67,
    categoryId: 1,
    playerId: 32,
    place: 1
  });
  await Result.create({
    tournamentId: 67,
    categoryId: 1,
    playerId: 29,
    place: 2
  });
  await Result.create({
    tournamentId: 67,
    categoryId: 1,
    playerId: 8,
    place: 3
  });
}

export async function createPlaceToPoints() {
  debug("creating place to points starting...");
  await PlaceToPoints.create({
    place: 0, // for competing, without multiplier
    points: 1
  });
  await PlaceToPoints.create({
    place: 1,
    points: 100
  });
  await PlaceToPoints.create({
    place: 2,
    points: 70
  });
  await PlaceToPoints.create({
    place: 3,
    points: 50
  });
  await PlaceToPoints.create({
    place: 4,
    points: 40
  });
  await PlaceToPoints.create({
    place: 5,
    points: 20
  });
  await PlaceToPoints.create({
    place: 6,
    points: 20
  });
  await PlaceToPoints.create({
    place: 7,
    points: 20
  });
  await PlaceToPoints.create({
    place: 8,
    points: 20
  });
  await PlaceToPoints.create({
    place: 9,
    points: 10
  });
  await PlaceToPoints.create({
    place: 10,
    points: 10
  });
  await PlaceToPoints.create({
    place: 11,
    points: 10
  });
  await PlaceToPoints.create({
    place: 12,
    points: 10
  });
  await PlaceToPoints.create({
    place: 13,
    points: 10
  });
  await PlaceToPoints.create({
    place: 14,
    points: 10
  });
  await PlaceToPoints.create({
    place: 15,
    points: 10
  });
  await PlaceToPoints.create({
    place: 16,
    points: 10
  });
  await PlaceToPoints.create({
    place: 17,
    points: 5
  });
  await PlaceToPoints.create({
    place: 18,
    points: 5
  });
  await PlaceToPoints.create({
    place: 19,
    points: 5
  });
  await PlaceToPoints.create({
    place: 20,
    points: 5
  });
  await PlaceToPoints.create({
    place: 21,
    points: 5
  });
  await PlaceToPoints.create({
    place: 22,
    points: 5
  });
  await PlaceToPoints.create({
    place: 23,
    points: 5
  });
  await PlaceToPoints.create({
    place: 24,
    points: 5
  });
  await PlaceToPoints.create({
    place: 25,
    points: 5
  });
  await PlaceToPoints.create({
    place: 26,
    points: 5
  });
  await PlaceToPoints.create({
    place: 27,
    points: 5
  });
  await PlaceToPoints.create({
    place: 28,
    points: 5
  });
  await PlaceToPoints.create({
    place: 29,
    points: 5
  });
  await PlaceToPoints.create({
    place: 30,
    points: 5
  });
  await PlaceToPoints.create({
    place: 31,
    points: 5
  });
  await PlaceToPoints.create({
    place: 32,
    points: 5
  });
}

/* IMPORTANT: DO NOT CHANGE ORDER! ADD FUNCTION CALL AT THE END! */

export async function mockDb() {
  await createUsers();
  await createTournamentTiers();
  await createPlaceToPoints();
  await createNationalities();
  await createLocations();
  await createPlayers();
  await createCategories();
  await createTournaments();
  await createResults();
}
