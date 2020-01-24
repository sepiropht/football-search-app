const express = require("express");
const router = express.Router();
const getLeagues = require("../models/leagues");

/* GET users listing. */
router.get("/search", function(req, res, _) {
  const prefix = req.params.prefix;
  getLeagues(leagues => {
    res.json(leagues.filter(league => league.startsWith(prefix)));
  });
});

module.exports = router;
