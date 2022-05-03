const { User, Product, Category } = require("../models");

class FoodController {
  static async list(req, res, next) {
    try {
      let product = await Product.findAll({
        include: [
          {
            model: User,
          },
          {
            model: Category,
          },
        ],
      });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async productId(req, res, next) {
    try {
      let product = await Product.findOne({
        include: [
          {
            model: User,
          },
          {
            model: Category,
          },
        ],
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { name, slug, description, price, mainImg, CategoryId } = req.body;
      let result = await Product.create({
        name,
        slug,
        description,
        price,
        mainImg,
        UserId: req.rightUser.id,
        CategoryId,
      });
      res.status(200).json({
        message: "Success add product",
        newProduct: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async editFood(req, res, next) {
    try {
      const data = await Product.findByPk(req.params.id);
      if (!data) {
        next({ name: "NotFound" });
      } else {
        const { id } = req.params;
        const { name, slug, description, price, mainImg, CategoryId } =
          req.body;
        console.log(req.body);
        let update = await Product.update(
          {
            name,
            slug,
            description,
            price,
            mainImg,
            CategoryId,
          },
          {
            where: {
              id,
            },
            returning: true,
          }
        );
        update = update[1][0];
        res.status(200).json({
          message: `Update data with ID ${id} Success`,
          productBefore: data,
          productAfter: update,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    let id = req.params.id;
    try {
      let product = await Product.findByPk(id);
      if (product === null) {
        next({ name: "NotFound" });
      } else {
        Product.destroy({
          where: {
            id,
          },
        });
      }
      res.status(200).json({
        message: `${product.name} has been delete`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FoodController;
