// backend/app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization, Content-Length, X-Requested-With"
	);
});

app.use("/api/users", userRoutes);

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

db.sequelize
	.sync()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
	});
