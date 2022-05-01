const { User } = require("../models");
const { compare } = require("../helpers/bcrypt");
const { payloadToken } = require("../helpers/jwt");

class UserController {
  static async list(req, res, next) {
    try {
      let user = await User.findAll();
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const data = await User.create({
        username,
        email,
        password,
        role: "Admin",
        phoneNumber,
        address,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      let user = await User.findByPk(req.params.id);
      if (!user) {
        next({ name: "NotFound" });
      } else {
        const match = await User.findOne({
          where: {
            id: req.rightUser.id,
            email: req.rightUser.email,
          },
        });
        if (req.params.id !== match.id) {
          next({ name: "Invalid token" });
        } else {
          let { username, email, password, role, phoneNumber, address } =
            req.body;
          let update = await User.update(
            { username, email, password, role, phoneNumber, address },
            {
              where: {
                id: req.params.id,
              },
            }
          );
          console.log(update);
          res.status(200).json({ message: "Success Update" });
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const userLogin = await User.findOne({
        where: {
          email,
        },
      });
      if (!userLogin) {
        next({ name: "NotFound" });
      }
      const rightPassword = compare(password, userLogin.password);
      if (!rightPassword) {
        res.status(401).json({ message: "Unauthorized" });
      }
      const payload = {
        id: userLogin.id,
      };
      // Bikin Token
      const token = payloadToken(payload);
      res.status(200).json({
        access_token: token,
        username: userLogin.username,
        role: userLogin.role,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
