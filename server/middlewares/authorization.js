const { User, Food } = require("../models");

const getAccess = async (req, res, next) => {
  try {
    const foodId = req.params.id;
    const userId = req.rightUser.id;
    const userRole = req.rightUser.role;

    const searchFood = await Food.findByPk(foodId);
    if (!searchFood) {
      throw { name: "NotFound" };
    }
    const match = await User.findOne({
      where: {
        id: req.rightUser.id,
        email: req.rightUser.email,
      },
    });
    console.log(match);
    if (!match) {
      throw { name: "BadRequest" };
    }
    if (req.method === "PUT" && userRole !== "Admin") {
      throw { name: "BadRequest" };
    }
    if (req.method === "PATCH" && userRole !== "Admin") {
      throw { name: "BadRequest" };
    }
    if (userId !== searchFood.UserId && userRole !== "Admin") {
      throw { name: "Forbidden" };
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { getAccess };
