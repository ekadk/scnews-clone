const { comparePw } = require("../helpers/hashPw");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");

module.exports = class AdminController {
  static async register(req, res, next) {
    try {
      const { email, password, phoneNumber, address } = req.body;
      const user = await User.create({
        email,
        password,
        role: "admin",
        phoneNumber,
        address,
      });
      res
        .status(201)
        .json({ message: `New admin with email ${user.email} created!` });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "email_required" };
      if (!password) throw { name: "password_required" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "invalid_login" };

      const checkPassword = comparePw(password, user.password);
      if (!checkPassword) throw { name: "invalid_login" };

      const access_token = signToken({ id: user.id });

      res.status(200).json({ access_token });

      res.status(200);
    } catch (error) {
      next(error);
    }
  }
};
