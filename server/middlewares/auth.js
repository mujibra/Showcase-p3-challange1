const { readPayloadToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    const payload = readPayloadToken(access_token);

    let user = await User.findByPk(payload.id);

    if (!user) {
      throw { name: "Invalid email/password" };
    }
    req.rightUser = {
      id: user.id,
      username: user.username,
      role: user.role,
      email: user.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;