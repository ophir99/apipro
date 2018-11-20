const express = require("express");
const usercontroller = require("./../controllers/user.controllers");
const proilecontroller = require("./../controllers/profile.controllers");
const router = express.Router();

router.post("/profile", proilecontroller.updateProfile);

router.post("/linkedin", usercontroller.linkedin);

router.post("/create", usercontroller.create);

router.post("/login", usercontroller.login);

module.exports = router;
