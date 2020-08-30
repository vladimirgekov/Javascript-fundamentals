function storage(input) {
  let storage = new Map();

  for (const line of input) {
    let [item, quantityText] = line.split(" ");
    let quantity = Number(quantityText);

    if (storage.has(item)) {
      let currentQuantity = storage.get(item);
      quantity += currentQuantity;
    }

    storage.set(item, quantity);
  }
  for (const [key, value] of storage) {
    console.log(`${key} -> ${value}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
