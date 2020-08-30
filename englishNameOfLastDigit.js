function digitName(num) {
  let digits = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  let lastDigit = num
    .toString()
    .split("")
    .pop();
  console.log(digits[lastDigit]);
}
digitName(512);
