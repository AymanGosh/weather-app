const source = $("#wonders-template").html();
const template = Handlebars.compile(source);

const render = function (wonders) {
  $("#wonders").empty();
  let newHtml = template({ wonders });
  $("#wonders").append(newHtml);
};

const fetch = function () {
  $.get("/wonders", function (response) {
    render(response);
  });
};

const addWonder = function () {
  let newWonder = $("#new-wonder-input").val();
  let newLocation = $("#new-location-input").val();
  //POST the newWonder to the server
};

$("#wonders").on("click", ".visit", function () {
  let wonder = $(this).closest(".wonder").find(".name").text();
  //PUT this to the server: update the wonder's `visited` status to `true`
});

fetch(); //load the data on page load
