import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface UserAttributes {
  id: number;
  email: string;
  login: string;
  password: string;
}

export interface UserModel
  extends Model<UserAttributes>,
    UserAttributes {}
export class UserModel extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

export function userFactory(sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
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
