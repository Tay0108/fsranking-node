import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface CompetitionHasCategoryAttributes {}

export interface CompetitionHasCategoryModel
  extends Model<CompetitionHasCategoryAttributes>,
    CompetitionHasCategoryAttributes {}
export class CompetitionHasCategoryModel extends Model<
  CompetitionHasCategoryModel,
  CompetitionHasCategoryAttributes
> {}

export type CompetitionHasCategoryStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CompetitionHasCategoryModel;
};

export function competitionHasCategoryFactory(
  sequelize: Sequelize
): CompetitionHasCategoryStatic {
  return <CompetitionHasCategoryStatic>(
    sequelize.define("competitions_have_categories", {})
  );
}
