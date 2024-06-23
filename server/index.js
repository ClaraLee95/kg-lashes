// const express = require("express");
// const app = express();
// require("dotenv").config();

const sequelize = require("./config/database");

async function test() {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

test();

// const express = require("express");
// const app = express();
// const db = require("./models");

// db.sequelize.snyc().then(() => {
// 	app.listen(3006, () => {
// 		"running";
// 	});
// });
