import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface ResultAttributes {
  competitionId: number;
  categoryId: number;
  playerId: number;
  place: number;
}

export interface ResultModel
  extends Model<ResultAttributes>,
    ResultAttributes {}
export class ResultModel extends Model<ResultModel, ResultAttributes> {}

export type ResultStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ResultModel;
};

export function resultFactory(sequelize: Sequelize): ResultStatic {
  return <ResultStatic>sequelize.define("results", {
    competitionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true
    },
    playerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true
    },
    place: {
      type: DataTypes.INTEGER.UNSIGNED
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
