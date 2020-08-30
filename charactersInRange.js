function charactersInrange(start, end) {
  let startValue = start.charCodeAt(0);
  let endValue = end.charCodeAt(0);

  if (startValue > endValue) {
    let temp = startValue;
    startValue = endValue;
    endValue = temp;
  }
  let result = "";
  for (let i = startValue + 1; i < endValue; i++) {
    let currentelement = String.fromCharCode(i);
    result += `${currentelement} `;
  }
  console.log(`${result}`);
}
charactersInrange("a", "d");
