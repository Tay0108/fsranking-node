import { CategoryAttributes } from "../model/categoryModel";
import { Category } from "../model";

const debug = require("debug")("category.service");

export class CategoryService {
  create({ name, gender }: CategoryAttributes, transaction?) {
    return Category.create(
      {
        name,
        gender
      },
      { transaction }
    );
  }

  getById(categoryId: number, transaction?) {
    return Category.findByPk(categoryId, { transaction });
  }

  getAll(transaction?) {
    return Category.findAll({ transaction });
  }

  async delete(categoryId: number, transaction?) {
    const category = await Category.findByPk(categoryId, {
      transaction
    });
    if (category === null) {
      throw new Error("Category not found");
    }
    await category.destroy({ transaction });
  }
  update({ id, name, gender }: CategoryAttributes, transaction?) {
    return Category.update(
      {
        name,
        gender
      },
      { where: { id }, transaction }
    );
  }
}
