import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface LocationAttributes {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
}

export interface LocationModel
  extends Model<LocationAttributes>,
    LocationAttributes {}
export class LocationModel extends Model<LocationModel, LocationAttributes> {}

export type LocationStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): LocationModel;
};

export function locationFactory(sequelize: Sequelize): LocationStatic {
  return <LocationStatic>sequelize.define("locations", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DOUBLE,
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
