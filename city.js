function city(name, area, population, country, postCode) {
  let city = {
    name: name,
    area: area,
    population: population,
    country: country,
    postCode: postCode
  };

  for (const key in city) {
    console.log(`${key} -> ${city[key]}`);
  }
}
city("Sofia", " 492", "1238438", "Bulgaria", "1000");
