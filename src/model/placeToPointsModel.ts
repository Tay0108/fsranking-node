import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface PlaceToPointsAttributes {
  place: number;
  points: string;
}

export interface PlaceToPointsModel
  extends Model<PlaceToPointsAttributes>,
    PlaceToPointsAttributes {}
export class PlaceToPointsModel extends Model<
  PlaceToPointsModel,
  PlaceToPointsAttributes
  > {}

export type PlaceToPointsStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PlaceToPointsModel;
};

export function placeToPointsFactory(sequelize: Sequelize): PlaceToPointsStatic {
  return <PlaceToPointsStatic>sequelize.define("place_to_points", {
    place: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true
    },
    points: {
      type: DataTypes.INTEGER.UNSIGNED,
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
