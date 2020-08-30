function invertory(input) {
  class Hero {
    constructor(hero, level, items) {
      this.Hero = hero;
      this.level = level;
      this.items = items;
    }
  }
  let heroes = [];
  for (let element of input) {
    element = element.split(" / ");
    let [hero, level, inventar] = element;
    let items = inventar.split(", ").sort((a, b) => a.localeCompare(b));
    let everyHero = new Hero(hero, level, items.join(", "));
    heroes.push(everyHero);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let line of heroes) {
    console.log(`Hero: ${line.Hero}`);
    console.log(`level => ${line.level}`);
    console.log(`items => ${line.items}`);
  }
}
invertory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara"
]);
