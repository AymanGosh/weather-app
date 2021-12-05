city = new City();
renderer = new Renderer();

async function loadPage() {
  await city.getDataFromDB();
  renderer.render(city.getCityArr());
}
function handleSearch() {}

$(".searchBtn").on("click", function () {
  alert("hello");
});
$(".weather-card").on("click", ".saveBtn", function () {
  let name = $(this).closest(".weather-card").find("p").text();
  alert(name);
});
$(".removeBtn").on("click", "", function () {
  alert("hello");
});

loadPage();
