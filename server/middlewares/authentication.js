const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    console.log(req.headers);
    const access_token = req.headers.access_token;
    if (!access_token) throw { name: "invalid_token" };

    const payload = decodeToken(access_token);

    const user = await User.findByPk(payload.id);
    if (!user) throw { name: "invalid_token" };

    req.user = { id: user.id };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
