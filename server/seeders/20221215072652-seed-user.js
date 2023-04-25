"use strict";

const { hashPw } = require("../helpers/hashPw");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = require("../db.json").users.map((user) => {
      delete user.id;
      user.createdAt = user.updatedAt = new Date();
      user.password = hashPw(user.password);
      return user;
    });

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
