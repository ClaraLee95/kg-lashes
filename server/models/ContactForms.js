const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ContactForms = sequelize.define("ContactForms", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	firstname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
	},
	sent: {
		type: DataTypes.TINYINT(1),
		allowNull: false,
	},
	message: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = ContactForms;
