function triplesOfLatinLetters(num) {
  let firstNum = "a".charCodeAt(0);

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let k = 0; k < num; k++) {
        console.log(
          String.fromCharCode(firstNum + i, firstNum + j, firstNum + k)
        );
      }
    }
  }
}
