function emailValidator(input) {
  let email = input.shift();
  input.pop();

  for (const line of input) {
    let lineArr = line.split(" ");
    let command = lineArr[0];
    let argument = lineArr[1];

    switch (command) {
      case "Make":
        email = makeUpper(email, argument);
        console.log(email);
        break;
      case "GetDomain":
        let domain = getDomain(email, argument);
        console.log(domain);
        break;
      case "GetUsername":
        printUsername(email);
        break;
      case "Replace":
        email = replaceCharacter(email, argument);
        console.log(email);
        break;
      case "Encrypt":
        email = encrypt(email);
        console.log(email);
        break;
    }
  }

  function makeUpper(text, argument) {
    return argument == "Upper" ? text.toUpperCase() : text.toLowerCase();
  }

  function getDomain(email, argument) {
    let count = Number(argument);
    let domain = email.substring(email.length - count);
    return domain;
  }

  function printUsername(email) {
    if (email.includes("@")) {
      let userName = email.substring(0, email.indexOf("@"));
      console.log(userName);
    } else {
      console.log(`The email ${email} doesn't contain the @ symbol.`);
    }
    return email;
  }

  function replaceCharacter(email, char) {
    let replacedEmail = email;

    while (replacedEmail.includes(char)) {
      replacedEmail = replacedEmail.replace(char, "-");
    }

    return replacedEmail;
  }

  function encrypt(email) {
    let result = "";
    for (let i = 0; i < email.length; i++) {
      result += email.charCodeAt(i) + " ";
    }
    return result;
  }
}
emailValidator([
  "Mike123@somemail.com",
  "Make Upper",
  "GetDomain 3",
  "GetUsername",
  "Encrypt",
  "Complete"
]);
