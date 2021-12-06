class City {
  constructor() {
    this.citiesArray = [];
  }
  async getDataFromDB() {
    this.citiesArray = await $.get("cities");
  }
  async getCityData(cityName) {
    let newCity = await $.get(`city/?cityName=${cityName}`);
    this.citiesArray.push(newCity);
    console.log(newCity);
  }
  saveCity(cityData) {
    $.post("/city", cityData, function (response) {
      console.log("POST complete");
    });
  }
  async removeCity(cityName) {
    await $.ajax({
      url: `city/?cityName=${cityName}`,
      method: "DELETE",
      success: function (response) {
        console.log("delete complete");
      },
    });
    let cityIndex = this.searchForIndexOfCity(cityName);
    this.citiesArray = this.citiesArray.splice(cityIndex, 1);
    console.log(this.citiesArray);
  }
  searchForIndexOfCity(cityName) {
    for (let cityIndex in cityName) {
      if (cityName === this.citiesArray.name) {
        return cityIndex;
      }
    }
  }
  getCityArr() {
    return this.citiesArray.slice();
  }
}
