import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface NationalityAttributes {
  id: number;
  name: string;
}

export interface NationalityModel
  extends Model<NationalityAttributes>,
    NationalityAttributes {}
export class NationalityModel extends Model<
  NationalityModel,
  NationalityAttributes
> {}

export type NationalityStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): NationalityModel;
};

export function nationalityFactory(sequelize: Sequelize): NationalityStatic {
  return <NationalityStatic>sequelize.define("nationalities", {
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
