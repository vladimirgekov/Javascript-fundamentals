function orders(product, quantity) {
  const water = (waterPrice, quantity) => waterPrice * quantity;
  const coffee = (coffeePrice, quantity) => coffeePrice * quantity;
  const coke = (cokePrice, quantity) => cokePrice * quantity;
  const snacks = (snacksPrice, quantity) => snacksPrice * quantity;

  switch (product) {
    case "water":
      let waterPrice = 1.0;
      console.log(water(waterPrice, quantity).toFixed(2));
      break;
    case "coffee":
      let coffeePrice = 1.5;
      console.log(coffee(coffeePrice, quantity).toFixed(2));
      break;
    case "coke":
      let cokePrice = 1.4;
      console.log(coke(cokePrice, quantity).toFixed(2));
      break;
    case "snacks":
      let snacksPrice = 2.0;
      console.log(snacks(snacksPrice, quantity).toFixed(2));
      break;
  }
}
orders("coffee", 2);
