function biggestOfThreeNumbers(one, two, three) {
  if (one > two) {
    if (one > three) {
      console.log(one);
    } else {
      console.log(three);
    }
  } else if (two > three) {
    console.log(two);
  } else {
    console.log(three);
  }
}
