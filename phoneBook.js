function phoneBook(input) {
  let phonebook = {};

  for (let i = 0; i < input.length; i++) {
    let [name, number] = input[i].split(" ");

    phonebook[name] = number;
  }

  for (const name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344"
]);
