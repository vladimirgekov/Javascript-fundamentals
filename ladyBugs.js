function solve(input) {
  let ladybugs = [];
  let size = input.shift();
  let ladybugPositions = input
    .shift()
    .split(" ")
    .map(Number);

  // Initiate lady bugs array
  for (let i = 0; i < size; i++) {
    ladybugs.push(0);
  }

  // Add starting lady bugs
  for (let i = 0; i < ladybugPositions.length; i++) {
    if (ladybugPositions[i] < 0 || ladybugPositions[i] >= ladybugs.length) {
      continue;
    }

    ladybugs[ladybugPositions[i]] = 1;
  }

  // Execute commands
  for (let row of input) {
    let [ladybugIndex, direction, length] = row.split(" ");
    ladybugIndex = Number(ladybugIndex);
    length = Number(length);

    if (
      ladybugs[ladybugIndex] !== 1 ||
      ladybugIndex < 0 ||
      ladybugIndex >= ladybugs.length
    ) {
      continue;
    }

    if (length < 0) {
      direction = direction === "right" ? "left" : "right";
      length = Math.abs(length);
    }

    ladybugs[ladybugIndex] = 0; // Set space free
    if (direction === "right") {
      let position = ladybugIndex + length;
      if (ladybugs[position] === 1) {
        ladybugIndex = position;
        position = ladybugIndex + length;
      }

      if (position < ladybugs.length) {
        ladybugs[position] = 1;
      }
    } else {
      let position = ladybugIndex - length;
      if (ladybugs[position] === 1) {
        ladybugIndex = position;
        position = ladybugIndex - length;
      }

      if (position < ladybugs.length) {
        ladybugs[position] = 1;
      }
    }
  }

  console.log(ladybugs.join(" "));
}
