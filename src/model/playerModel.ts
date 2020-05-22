import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface PlayerAttributes {
  id: number;
  firstName: string;
  lastName: string;
  nickname: string;
  age: number;
  careerStartYear: number;
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
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}
