function train(input) {
  let wagons = input
    .shift()
    .split(" ")
    .map(function(x) {
      return Number(x);
    });
  let maxCapacity = Number(input.shift());

  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(" ");

    if (command.length === 2) {
      wagons.push(+command[1]);
    } else if (command.length === 1) {
      let passengersToAdd = Number(command[0]);
      for (let j = 0; j < wagons.length; j++) {
        if (passengersToAdd + wagons[j] <= maxCapacity) {
          wagons[j] += passengersToAdd;
          break;
        }
      }
    }
  }
  return wagons.join(" ");
}
