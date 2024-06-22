module.export = (sequelize, DataTypes) => {
	const ContactForms = sequelize.define("CookContactFormsies", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		firstname: {
			type: DataTypes.VARCHAR(100),
			allowNull: false,
		},
		lastname: {
			type: DataTypes.VARCHAR(100),
			allowNull: false,
		},
		phone: {
			type: DataTypes.VARCHAR(25),
			allowNull: false,
		},
		email: {
			type: DataTypes.VARCHAR(100),
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
			type: DataTypes.VARCHAR(500),
			allowNull: false,
		},
	});

	return ContactForms;
};
