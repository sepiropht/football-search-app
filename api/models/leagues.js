const mongoose = require("mongoose");

const leagueSchema = mongoose.Schema({
  user_id: {
    type: String,
    index: true,
    require: true
  },

  screen_name: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const League = (module.exports = mongoose.model("League", leagueSchema));

module.exports.getLeagues = function(callback) {
  League.find(callback);
};
