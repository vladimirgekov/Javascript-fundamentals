function bossRush(arr) {
  let num = Number(arr.shift()); // got length of array
  let pattern = /\|[A-Z]{4,}\|\:\#[A-Za-z]+\ [A-Za-z]+\#/g; //the regex pattern
  for (let i = 0; i < num; i++) {
    if (arr[i].match(pattern)) {
      let line = arr[i].split("|:#"); // [ '|IVAN', 'Master detective#' ]
      let name = line[0].slice(1); // IVAN removed '|'
      let occupation = line[1].slice(0, line[1].length - 1); // Master detective removed '#'
      console.log(`${name}, The ${occupation}`);
      console.log(`>> Strength: ${name.length}`);
      console.log(`>> Armour: ${occupation.length}`);
    } else {
      console.log("Access denied!");
    }
  }
}
bossRush([
  "3",
  "|PETER|:#H1gh Overseer#",
  "|IVAN|:#Master detective#",
  "|KARL|: #Marketing lead#"
]);
