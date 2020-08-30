function pascalCaseSplitter(string) {
  let capitanIndex = -1;
  let output = [];

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter.toLowerCase() !== letter && i !== 0) {
      let word = string.substring(capitanIndex, i);
      capitanIndex = i;
      output.push(word);
    }
  }
  output.push(string.substring(capitanIndex));
  console.log(output.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
