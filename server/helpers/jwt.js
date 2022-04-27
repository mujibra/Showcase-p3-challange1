const jwt = require("jsonwebtoken");

const payloadToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY);
};

const readPayloadToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = {
  payloadToken,
  readPayloadToken,
};
