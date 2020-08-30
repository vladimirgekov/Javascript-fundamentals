function sortNumbers(numberone, numbertwo, numberthree) {
  if (numberone > numbertwo && numberone > numberthree) {
    console.log(numberone);
    if (numbertwo > numberthree) {
      console.log(numbertwo);
      console.log(numberthree);
    } else {
      console.log(numberthree);
      console.log(numbertwo);
    }
  } else if (numbertwo > numberone && numbertwo > numberthree) {
    console.log(numbertwo);
    if (numberone > numberthree) {
      console.log(numberone);
      console.log(numberthree);
    } else {
      console.log(numberthree);
      console.log(numberone);
    }
  } else if (numberthree > numberone && numberthree > numberone) {
    console.log(numberthree);
    if (numbertwo > numberone) {
      console.log(numbertwo);
      console.log(numberone);
    } else {
      console.log(numberone);
      console.log(numbertwo);
    }
  }
}
sortNumbers(2, 1, 3);
