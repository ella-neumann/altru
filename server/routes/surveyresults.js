var express = require("express");
// var axios = require("axios");
var router = express.Router();
var bodyParser = require("body-parser");

/* GET survey results. */
router.get("/", function (req, res, next) {
  console.log("BABY");
  //   axios
  //     .get(
  //       "https://api.data.charitynavigator.org/v2/Organizations?app_id=700cb4b4&app_key=34dd0899d430f0b4d70a8d365cadb1bc&rated=true"
  //     )
  //     .then((response) => {
  //       res.json(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
});

module.exports = router;
