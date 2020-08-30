function rightPlace(firstWord, character, secondWord) {
  let matchWord = firstWord.replace("_", character);

  if (matchWord === secondWord) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
