function towns(array) {
  let townsInfo = [];

  for (let i = 0; i < array.length; i++) {
    let [town, latitude, longitude] = array[i].split(" | ");

    townsInfo.push({
      town: town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2)
    });
  }
  for (let town of townsInfo) {
    console.log(town);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
