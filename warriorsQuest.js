function warriorsQuest(input = []) {
  let skill = input.shift();

  for (const line of input) {
    if (line === "For Azeroth") {
      break;
    }
    let [command, el1, el2, el3] = line.split(" ");
    if (command == "GladiatorStance") {
      skill = skill.toUpperCase();
      console.log(skill);
    } else if (command == "DefensiveStance") {
      skill = skill.toLowerCase();
      console.log(skill);
    } else if (command == "Dispel") {
      let index = Number(el1);
      let letter = el2;
      if (index >= 0 && index < skill.length) {
        let symbol = skill[index];
        skill = skill.replace(symbol, letter);
        console.log(`Success!`);
      } else {
        console.log(`Dispel too weak.`);
      }
    } else if (command == "Target") {
      if (el1 == "Change") {
        let substring = el2;
        let secSubstr = el3;
        while (skill.includes(substring)) {
          skill = skill.replace(substring, secSubstr);
        }
        console.log(skill);
      } else if (el1 === "Remove") {
        let substr = el2;
        while (skill.includes(substr)) {
          skill = skill.replace(substr, "");
        }
        console.log(skill);
      } else {
        console.log("Command doesn't exist!");
      }
    } else {
      console.log("Command doesn't exist!");
    }
  }
}
warriorsQuest([
  "fr1c710n",
  "GladiatorStance",
  "Dispel 2 I",
  "Dispel 4 T",
  "Dispel 6 O",
  "Dispel 5 I",
  "Dispel 10 I",
  "Target Change RICTION riction",
  "For Azeroth"
]);
