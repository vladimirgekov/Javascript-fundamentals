function solve(arr) {
  let myMap = new Map();

  for (let word of arr) {
    let count = 1;
    if (!myMap.has(word)) {
      myMap.set(word, count);
    } else {
      let stuff = myMap.get(word);
      let newCount = (stuff += 1);
      myMap.set(word, newCount);
    }
  }
  let sorted = Array.from(myMap)
    .sort((a, b) => b[1] - a[1])
    .map(x => console.log(`${x[0]} -> ${x[1]} times`));
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence"
]);
