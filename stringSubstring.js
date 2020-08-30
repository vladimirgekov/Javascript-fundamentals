function stringSubstring(key, string) {
  key = key.toLowerCase();
  string = string.toLowerCase();

  let words = string.split(" ");

  console.log(words.includes(key) ? key : `${key} not found!`);
}
stringSubstring("javascript", "JavaScript is the best programming language");
