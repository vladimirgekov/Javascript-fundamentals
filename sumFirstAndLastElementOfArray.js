function sum(array = []) {
  let firstElement = Number(array.shift());
  let lasElemenet = Number(array.pop());
  let result = firstElement + lasElemenet;
  console.log(result);
}
sum(["20", "30", "40"]);
