import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface PlayerAttributes {
  id: number;
  gender: string;
  firstName: string;
  lastName: string;
  nickname: string;
  birthYear: number;
  careerStartYear: number;
  bio: string;
}

export interface PlayerModel
  extends Model<PlayerAttributes>,
    PlayerAttributes {}
export class PlayerModel extends Model<PlayerModel, PlayerAttributes> {}

export type PlayerStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PlayerModel;
};

export function playerFactory(sequelize: Sequelize): PlayerStatic {
  return <PlayerStatic>sequelize.define("players", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthYear: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    careerStartYear: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    bio : {
      type: DataTypes.TEXT,
      allowNull: true
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
