function convertObject(inputJSON) {
  let info = JSON.parse(inputJSON);

  for (let key in info) {
    console.log(`${key}: ${info[key]}`);
  }
}
convertObject('{"name": "George", "age": 40, "town": "Sofia"}');
