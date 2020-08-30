function repeatString(string, counter) {
  let result = "";

  for (let i = 0; i < counter; i++) {
    result += string;
  }

  console.log(result);
}
repeatString("str", 5);
