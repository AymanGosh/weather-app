const express = require("express");
const router = express.Router();
const urllib = require("urllib");
const mongoose = require("mongoose");
const City = require("../../model/City");

mongoose.connect("mongodb://localhost/weatherDB", { useNewUrlParser: true });
/******************************************************** */
let cityDataJson;
function saveCityDataToDb(cityData) {
  new City({
    name: cityData.name,
    temperature: cityData.temperature,
    condition: cityData.condition,
    conditionPic: cityData.conditionPic,
  }).save();
}
async function initCityByName(cityname) {
  await urllib.request(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&&units=metric&appid=64c4d0f651c0740ffa81195785cf1f35`,
    function (err, data, res) {
      // let cityData = data.toString();
      // cityData = JSON.parse(cityData);
      //////////////////////
      let cityData = JSON.parse(data);

      cityData.main.temp = Number.parseInt(cityData.main.temp);
      cityDataJson = {
        name: cityData.name,
        temperature: cityData.main.temp,
        conditionPic: `http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`,
      };
    }
  );
}
/******************************************************** */
router.get("/city", function (req, res) {
  initCityByName(req.query.cityName);
  res.send(cityDataJson);
});

/******************************************************** */
router.get("/cities", function (req, res) {
  City.find({}, null, function (err, cities) {
    res.send(cities);
  });
});
/******************************************************** */
router.post("/city", function (req, res) {
  let newCity = req.body;
  saveCityDataToDb(newCity);
  res.send("completed adding city");
});
/******************************************************** */
router.delete("/city", function (req, res) {
  let cityName = req.query.cityName;
  City.deleteMany({ name: cityName })
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
  res.send("Data deleted");
});
/******************************************************** */
module.exports = router;
