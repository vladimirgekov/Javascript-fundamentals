function personInfo(firstName, secondName, age) {
  let personInfo = {
    firstName: firstName,
    lastName: secondName,
    age: age
  };
  for (const key in personInfo) {
    console.log(`${key}: ${personInfo[key]}`);
  }
}
personInfo("Peter", "Pan", "20");
