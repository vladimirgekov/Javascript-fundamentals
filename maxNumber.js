function maxNumber(array = []) {
  let resultArray = [];

  for (let i = 0; i < array.length; i++) {
    let isTopInteger = true;
    let currentElement = array[i];
    let rightElementArray = array.slice(i + 1);

    for (let j = 0; j < rightElementArray.length; j++) {
      if (currentElement <= rightElementArray[j]) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger === true) {
      resultArray.push(currentElement);
    }
  }
  console.log(resultArray.join(" "));
}
maxNumber([1, 4, 3, 2]);
