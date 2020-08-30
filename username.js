function username(input) {
  let username = input.shift();

  for (const line of input) {
    let [command, firstArgument, secondArgument] = line.split(" ");

    switch (command) {
      case "Case":
        username =
          firstArgument == "lower"
            ? username.toLowerCase()
            : username.toUpperCase();
        console.log(username);
        break;

      case "Reverse":
        let startIndex = Number(firstArgument);
        let endIndex = Number(secondArgument);

        if (
          startIndex >= 0 &&
          startIndex < username.length &&
          endIndex >= startIndex &&
          endIndex < username.length
        ) {
          let substring = username.substring(startIndex, endIndex + 1);
          console.log(substring.split("").reverse().join(""));
        }
        break;
      case "Cut":
        if (username.includes(firstArgument)) {
          username = username.replace(firstArgument, "");
          console.log(username);
        } else {
          console.log(`The word ${username} doesn't contain ${firstArgument}.`);
        }
        break;

      case "Replace":
        while (username.includes(firstArgument)) {
          username = username.replace(firstArgument, "*");
        }
        console.log(username);
        break;

      case "Check":
        if (username.includes(firstArgument)) {
          console.log("Valid");
        } else {
          console.log(`Your username must contain ${firstArgument}.`);
        }
    }
  }
}
username(["Pesho", "Case lower", "Cut ES", "Check @", "Sign up"]);
