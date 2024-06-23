const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cookies = sequelize.define("Cookies", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	session_id: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
		allowNull: false,
	},
	accespted: {
		type: DataTypes.TINYINT(1),
		allowNull: false,
	},
});

module.exports = Cookies;
