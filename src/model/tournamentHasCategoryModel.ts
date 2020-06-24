import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface TournamentHasCategoryAttributes {}

export interface TournamentHasCategoryModel
  extends Model<TournamentHasCategoryAttributes>,
    TournamentHasCategoryAttributes {}
export class TournamentHasCategoryModel extends Model<
  TournamentHasCategoryModel,
  TournamentHasCategoryAttributes
> {}

export type TournamentHasCategoryStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TournamentHasCategoryModel;
};

export function tournamentHasCategoryFactory(
  sequelize: Sequelize
): TournamentHasCategoryStatic {
  return <TournamentHasCategoryStatic>(
    sequelize.define("tournaments_have_categories", {})
  );
}
