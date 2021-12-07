city = new City();
renderer = new Renderer();

async function loadPage() {
  await city.getDataFromDB();
  renderer.render(city.getCityArr());
}
function handleSearch() {}

$(".searchBtn").on("click", async function () {
  let cityName = $("#inp").val();
  await city.getCityData(cityName);
  renderer.render(city.getCityArr());
});
$(".weather-wrapper").on("click", ".saveBtn", function () {
  let cityData = getCityDatafromDOM($(this));
  console.log(cityData);
  city.saveCity(cityData);
});
$(".weather-wrapper").on("click", ".removeBtn", function () {
  let cityData = getCityDatafromDOM($(this));
  city.removeCity(cityData.name);
  loadPage();
});
/********************************************************* */
function getCityDatafromDOM(cityDOM) {
  let name = cityDOM.closest(".weather-card").find("p").text();
  let temperature = cityDOM.closest(".weather-card").find("h1").text();
  let condition = cityDOM.closest(".weather-card").find("h3").text();
  let conditionPic = cityDOM.closest(".weather-card").find("img").attr("src");
  temperature = temperature.slice(0, -1);
  let cityDat = {
    name: name,
    temperature: temperature,
    condition: condition,
    conditionPic: conditionPic,
  };
  return cityDat;
}
loadPage();
