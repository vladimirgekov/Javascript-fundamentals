function password(input) {
  let numberOfPasswords = input.shift();
  let regexPass = /^(.+)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1$/;

  for (let i = 0; i < numberOfPasswords; i++) {
    let matches = regexPass.exec(input[i]);
    if (matches) {
      console.log(
        `Password: ${matches[2]}${matches[3]}${matches[4]}${matches[5]}`
      );
    } else {
      console.log(`Try another password!`);
    }
  }
}
