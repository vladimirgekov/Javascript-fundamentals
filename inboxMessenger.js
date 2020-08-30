function inboxMessenger(input) {
  input.pop();

  let users = {};

  for (const line of input) {
    let [command, user, email] = line.split("->");

    switch (command) {
      case "Add":
        if (users[user]) {
          console.log(`${user} is already registered`);
        } else {
          users[user] = [];
        }
        break;
      case "Send":
        users[user].push(email);
        break;
      case "Delete":
        if (users[user]) {
          delete users[user];
        } else {
          console.log(`${user} not found!`);
        }
        break;
    }
  }
  let usersArray = Object.entries(users);

  const sortUsers = function(userA, userB) {
    let userNameA = userA[0];
    let emailCountA = userA[1].length;

    let userNameB = userB[0];
    let emailCountB = userB[1].length;

    if (emailCountB == emailCountA) {
      return userNameA.localeCompare(userNameB);
    } else {
      return emailCountB - emailCountA;
    }
  };
  let sortedUsersArray = usersArray.sort(sortUsers);

  let sortedUsers = Object.fromEntries(sortedUsersArray);

  console.log(`Users count: ${sortedUsersArray.length}`);

  for (const user in sortedUsers) {
    console.log(user);

    for (const email of sortedUsers[user]) {
      console.log(` - ${email}`);
    }
  }
}
inboxMessenger([
  "Add->Mike",
  "Add->George",
  "Send->George->Hello World",
  "Send->George->Some random test mail",
  "Send->Mike->Hello, do you want to meet up tomorrow?",
  "Send->George->It would be a pleasure",
  "Send->Mike->Another random test mail",
  "Statistics"
]);
