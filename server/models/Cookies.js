module.export = (sequelize, DataTypes) => {
	const Cookies = sequelize.define("Cookies", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		session_id: {
			type: DataTypes.VARCHAR(100),
			allowNull: false,
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

	return Cookies;
};
