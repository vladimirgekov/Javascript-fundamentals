function nikuldenMeal(input) {
  let x = input.shift();
  let obj = {};
  let disliked = 0;
  while (x !== "Stop") {
    let [act, name, meal] = x.split("-");
    if (act === "Unlike") {
      if (!obj.hasOwnProperty(name)) {
        console.log(`${name} is not at the party.`);
      } else {
        if (obj[name].indexOf(meal) === -1) {
          console.log(
            `${name} doesn't have the ${meal} in his/her collection.`
          );
        } else {
          console.log(`${name} doesn't like the ${meal}.`);
          let index = obj[name].indexOf(meal);
          obj[name].splice(index, 1);
          disliked++;
        }
      }
    } else if (act === "Like") {
      if (!obj.hasOwnProperty(name)) {
        obj[name] = [];
        obj[name].push(meal);
      } else {
        if (obj[name].indexOf(meal) === -1) {
          obj[name].push(meal);
        }
      }
    }

    x = input.shift();
  }
  let arr = Object.entries(obj);
  arr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  for (let i of arr) {
    console.log(`${i[0]}: ${i[1].join(", ")}`);
  }
  console.log(`Unliked meals: ${disliked}`);
}
nikuldenMeal([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Misho-salad",
  "Like-Pena-dessert",
  "Stop"
]);
