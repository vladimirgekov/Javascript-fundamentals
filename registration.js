function registration(input) {
  input.shift();
  let registartions = input;
  let successCount = 0;
  let pattern = /U\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-Za-z]{5,}\d+)P@\$/g;

  for (const registration of registartions) {
    let match = pattern.exec(registration);

    if (match) {
      successCount++;
      console.log("Registration was successful");
      console.log(
        `Username: ${match.groups.username}, Password: ${match.groups.password}`
      );
    } else {
      console.log("Invalid username or password");
    }
  }
  console.log(`Successful registrations: ${successCount}`);
}
registration([
  "3",
  "U$MichaelU$P@$asdqwe123P@$",
  "U$NameU$P@$PasswordP@$",
  "U$UserU$P@$ad2P@$"
]);
