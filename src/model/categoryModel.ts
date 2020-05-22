import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface CategoryAttributes {
  id: number;
  name: string;
}

export interface CategoryModel
  extends Model<CategoryAttributes>,
    CategoryAttributes {}
export class CategoryModel extends Model<CategoryModel, CategoryAttributes> {}

export type CategoryStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CategoryModel;
};

export function categoryFactory(sequelize: Sequelize): CategoryStatic {
  return <CategoryStatic>sequelize.define("categories", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
