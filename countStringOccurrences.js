function countStringOccurrences(string, searchedWord) {
  let words = string.split(" ");
  let counter = 0;

  for (let word of words) {
    if (word === searchedWord) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
