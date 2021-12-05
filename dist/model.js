class City {
  constructor() {
    this.citiesArray = [];
  }
  async getDataFromDB() {
    this.citiesArray = await $.get("/cities");
  }
  getCityData() {}
  saveCity() {}
  removeCity() {}
  getCityArr() {
    return this.citiesArray.slice();
  }
}
