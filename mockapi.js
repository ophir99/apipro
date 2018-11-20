const express = require("express");
const router = express.Router();
const mock = require("./controllers/mock.controllers");
router.get("/getall", mock.getTweets);
router.get("/getone", mock.getTweet);
router.post("/new", mock.createTweet);

router.put("/:id", mock.updateTweet);

router.delete("/:id", mock.deleteTweet);

module.exports = router;
