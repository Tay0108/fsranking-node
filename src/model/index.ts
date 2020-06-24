import * as sequelize from "sequelize";
import { playerFactory } from "./playerModel";
import { tournamentFactory } from "./tournamentModel";
import { nationalityFactory } from "./nationalityModel";
import { locationFactory } from "./locationModel";
import { resultFactory } from "./resultModel";
import { categoryFactory } from "./categoryModel";
import { tournamentHasCategoryFactory } from "./tournamentHasCategoryModel";
import { socialMediaFactory } from "./SocialMediaModel";
import { placeToPointsFactory } from "./placeToPointsModel";

export const dbConfig = new sequelize.Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    port: Number(process.env.DB_PORT) || 5432,
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000
    }
  }
);

// SOMETHING VERY IMPORTANT them Factory functions expect a
// sequelize instance as parameter give them `dbConfig`

export const Category = categoryFactory(dbConfig);
export const Tournament = tournamentFactory(dbConfig);
export const TournamentHasCategory = tournamentHasCategoryFactory(dbConfig);
export const Location = locationFactory(dbConfig);
export const Nationality = nationalityFactory(dbConfig);
export const SocialMedia = socialMediaFactory(dbConfig);
export const Player = playerFactory(dbConfig);
export const Result = resultFactory(dbConfig);
export const PlaceToPoints = placeToPointsFactory(dbConfig);

// Relationships:

Player.belongsTo(Nationality);
Player.belongsTo(SocialMedia);

Tournament.belongsTo(Location);
Tournament.belongsToMany(Category, {
  through: { model: TournamentHasCategory }
});

Result.belongsTo(Tournament);
Result.belongsTo(Player);
Result.belongsTo(Category);

// Tournament.hasMany();
