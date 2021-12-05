const source = $("#cities-template").html();
const template = Handlebars.compile(source);

class Renderer {
  renderData() {}

  render(citiesArray) {
    console.log(citiesArray);
    const citiesInfo = { cities: citiesArray };
    $(".weather-wrapper").empty();
    const newHTML = template(citiesInfo);
    $(".weather-wrapper").append(newHTML);
  }
}
