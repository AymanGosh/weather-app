const express = require("express");
const router = express.Router();
const urllib = require("urllib");

let cityDataJson;

/******************************************************** */
router.get("/city", function (req, res) {
  initCityByName(req.body.cityName);
  res.send(cityDataJson);
});
async function initCityByName(cityname) {
  await urllib.request(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=64c4d0f651c0740ffa81195785cf1f35`,
    function (err, data, res) {
      let cityData = data.toString();
      cityData = JSON.parse(cityData);
      cityDataJson = {
        name: cityData.name,
        temperature: cityData.main.temp,
        condition: cityData.weather[0].main,
        conditionPic: `http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`,
      };
    }
  );
}
/******************************************************** */
router.get("/cities", function (req, res) {
  res.send(wonders);
});
router.post("/city", function (req, res) {
  console.log("Someone's trying to make a post request");
  let wonder = req.body;
  wonder.visited = false;
  wonders.push(wonder);
  res.send("completed adding wonder");
});
router.delete("/city", function (req, res) {
  let wonder = req.params.wonderId;
  let wondersIndex = wonders.findIndex((w) => w.name === wonder);
  wonders.splice(wondersIndex, 1);
  res.end();
});
///////////////////////////////////

router.get("/wonders", function (req, res) {
  res.send(wonders);
});
router.post("/wonder", function (req, res) {
  console.log("Someone's trying to make a post request");
  let wonder = req.body;
  wonder.visited = false;
  wonders.push(wonder);
  res.send("completed adding wonder");
});

router.put("/wonder/:wonderId", function (req, res) {
  let wonder = req.params.wonderId;
  wonders.find((w) => w.name === wonder).visited = true;
  res.end(); // don't forget to end the cycle!
});

router.delete("/wonder/:wonderId", function (req, res) {
  let wonder = req.params.wonderId;
  let wondersIndex = wonders.findIndex((w) => w.name === wonder);
  wonders.splice(wondersIndex, 1);
  res.end();
});

module.exports = router;
