function race(input) {
  let participants = input
    .shift()
    .split(", ")
    .reduce((acc, current) => {
      acc[current] = 0;
      return acc;
    }, {});
  let namePattern = /[a-zA-Z]/gm;
  let distancePattern = /\d/gm;

  let racers = input.slice(0, input.indexOf("end of race")).forEach(line => {
    let name = line.match(namePattern).join("");
    let distance = line
      .match(distancePattern)
      .map(Number)
      .reduce((a, c) => a + c);
    if (participants.hasOwnProperty(name)) {
      participants[name] += distance;
    }
  });
  let output = Object.entries(participants).sort((a, b) => b[1] - a[1]);

  console.log(
    `1st place: ${output[0][0]}
2nd place: ${output[1][0]}
3rd place: ${output[2][0]}`
  );
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race"
]);
