function charsToString(a, b, c) {
  let result = "";
  if (typeof a === "string" && typeof b === "string" && typeof c === "string") {
    result += `${a}${b}${c}`;
  } else {
    a = a.toString();
    b = b.toString();
    c = c.toString();
    result += `${a}${b}${c}`;
  }
  console.log(result);
}
