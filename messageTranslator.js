function messageTranslator(input) {
  let countMessages = input.shift();
  const regex = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z ]{8,})\]/;

  for (let i = 0; i < countMessages; i++) {
    let currentLine = regex.exec(input[i]);

    if (currentLine) {
      let message = currentLine.groups.message;
      let printLine = "";

      for (let char of message) {
        printLine += `${char.charCodeAt(0)} `;
      }

      console.log(`${currentLine.groups.command}: ${printLine}`);
    } else {
      console.log("The message is invalid");
    }
  }
}
messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready]"]);
