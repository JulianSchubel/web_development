const {hello} = require("../controllers/hello");
const express = require("express");
const router = express.Router();

router.route("/")
    .get(hello);

module.exports = router
