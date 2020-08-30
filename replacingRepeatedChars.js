function replaceRepeatedChars(string) {
  console.log(
    string
      .split("")
      .filter((l, i, arr) => l !== arr[i + 1])
      .join("")
  );
}
replaceRepeatedChars("aaaaabbbbbcdddeeeedssaa");

//function replaceRepeatedChars(string) {
// let letters = string.split(" ");
// let newString = "";
// for (let i = 0; i < letters.length; i++){
//  if (letters[i] !== letters[i+1]){
// newString += letters[i];
//}
//}
// return newString;
//}
