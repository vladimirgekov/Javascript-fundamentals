function sumDigits(number) {
  let sum = 0;

  while (number > 0) {
    let lastdigit = number % 10;
    sum += lastdigit;
    number = Math.trunc(number / 10);
  }

  console.log(sum);
}
