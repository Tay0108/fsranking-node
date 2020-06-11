import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface CompetitionAttributes {
  id: number;
  name: string;
  weight: number;
  date: Date;
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
    weight: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
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
