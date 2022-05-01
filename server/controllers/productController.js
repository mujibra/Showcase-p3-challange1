const { User, Product, Category } = require("../models");
const { authentication } = require("../middlewares/auth");

class FoodController {
  static async list(req, res, next) {
    try {
      let food = await Product.findAll({
        order: [["id", "ASC"]],
        include: [
          {
            model: User,
          },
          {
            model: Category,
          },
        ],
      });
      res.status(200).json(food);
    } catch (error) {
      next(error);
    }
  }

  static async foodId(req, res, next) {
    try {
      let food = await Food.findOne({
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
      res.status(200).json(food);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      console.log(req.body);
      const { name, description, price, imgUrl, CategoryId } = req.body;
      let result = await Food.create({
        name,
        description,
        price,
        imgUrl,
        UserId: req.rightUser.id,
        CategoryId,
      });
      let author = await User.findOne({
        where: {
          id: result.UserId,
        },
      });
      let desc = await History.create({
        entityId: result.id,
        title: result.name,
        description: `new food ${result.name} with id: ${result.id} created `,
        updatedBy: author.username,
      });
      res.status(200).json({
        message: "Success add food",
        newFood: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const data = await Food.findByPk(req.params.id);
      if (!data) {
        next({ name: "NotFound" });
      } else {
        const { id } = req.params;
        const { name, description, price, imgUrl, UserId, CategoryId } =
          req.body;
        let update = await Food.update(
          {
            name,
            description,
            price,
            imgUrl,
            UserId,
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
        let author = await User.findOne({
          where: {
            id: update.UserId,
          },
        });
        let desc = await History.create({
          entityId: update.id,
          title: update.name,
          description: `entity with id: ${update.id} updated `,
          updatedBy: author.username,
        });
        res.status(200).json({
          message: `Update data with ID ${id} Success`,
          foodBefore: data,
          foodAfter: update,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async addStatus(req, res, next) {
    try {
      let user = await Food.findByPk(req.params.id);
      if (!user) {
        return next({ message: "NotFound" });
      } else {
        const { status } = req.body;
        let update = await Food.update(
          { status },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        let author = await User.findOne({
          where: {
            id: user.UserId,
          },
        });
        let desc = await History.create({
          entityId: user.id,
          title: user.name,
          description: `food ${user.name} with id: ${user.id} status has been updated from active to ${status} `,
          updatedBy: author.username,
        });
        res.status(200).json({ message: "Success Update" });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async delete(req, res, next) {
    let id = req.params.id;
    try {
      let food = await Food.findByPk(id);
      if (food === null) {
        next({ name: "NotFound" });
      } else {
        Food.destroy({
          where: {
            id,
          },
        });
      }
      res.status(200).json({
        message: `${food.name} has been delete`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FoodController;
