function arrayManipulator(integers, comands) {
  function add(array, symvol) {
    array.splice(symvol[0], 0, symvol[1]);
    return array;
  }

  function addMany(array, symvol) {
    let index = symvol.shift();
    for (let value of symvol) {
      array.splice(index++, 0, value);
    }
    return array;
  }

  function remove(array, symvol) {
    array.splice(Number(symvol), 1);
    return array;
  }

  function shift(array, symvol) {
    let position = Number(symvol[0]);
    while (position > 0) {
      let element = array.shift();
      array.push(element);
      position--;
    }
    return array;
  }

  function sumPairs(array) {
    let output = [];
    while (array.length > 0) {
      let a = Number(array.shift() || 0);
      let b = Number(array.shift() || 0);
      output.push(a + b);
    }
    return output;
  }

  let currentCommand = comands.shift();
  while (currentCommand !== "print") {
    let symbol = currentCommand.split(" ");

    switch (symbol.shift()) {
      case "add":
        integers = add(integers, symbol);
        break;
      case "addMany":
        integers = addMany(integers, symbol);
        break;
      case "contains":
        console.log(integers.indexOf(Number(symbol[0])));
        break;
      case "remove":
        integers = remove(integers, symbol);
        break;
      case "shift":
        integers = shift(integers, symbol);
        break;
      case "sumPairs":
        integers = sumPairs(integers);
        break;
    }
    currentCommand = comands.shift();
  }
  console.log(`[ ${integers.join(", ")} ]`);
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);

arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
