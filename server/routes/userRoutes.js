// backend/routes/userRoutes.js

const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
	const users = await db.Users.findAll();
	res.json(users);
});

module.exports = router;
