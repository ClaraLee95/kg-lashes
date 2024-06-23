// backend/models/index.js

const sequelize = require("../config/database");
const Users = require("./Users");

const db = {
	Users,
	sequelize,
};

module.exports = db;
