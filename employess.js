function employees(input) {
  let numberOfEmployees = input.length;
  for (let i = 0; i <= numberOfEmployees.length; i++) {
    let employee = input.shift();
  }
  for (let employee of input) {
    var n = Number(employee.length);
    console.log(`Name: ${employee} -- Personal Number: ${n}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal"
]);
