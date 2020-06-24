import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface TournamentAttributes {
  id: number;
  name: string;
  weight: number;
  date: Date;
}

export interface TournamentModel
  extends Model<TournamentAttributes>,
    TournamentAttributes {}
export class TournamentModel extends Model<
  TournamentModel,
  TournamentAttributes
> {}

export type TournamentStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TournamentModel;
};

export function tournamentFactory(sequelize: Sequelize): TournamentStatic {
  return <TournamentStatic>sequelize.define("tournaments", {
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
