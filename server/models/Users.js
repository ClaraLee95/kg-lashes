// backend/models/user.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Users = sequelize.define("Users", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = Users;
