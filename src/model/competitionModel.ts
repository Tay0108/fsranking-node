import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface CompetitionAttributes {
  id: number;
  name: string;
}

export interface CompetitionModel
  extends Model<CompetitionAttributes>,
    CompetitionAttributes {}
export class CompetitionModel extends Model<
  CompetitionModel,
  CompetitionAttributes
> {}

export type CompetitionStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CompetitionModel;
};

export function competitionFactory(sequelize: Sequelize): CompetitionStatic {
  return <CompetitionStatic>sequelize.define("competitions", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  });
}
