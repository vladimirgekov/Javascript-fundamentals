function passwordValidator(password) {
  function isValidPassLenght(passLength) {
    let isValid = true;

    if (passLength < 6 || passLength > 10) {
      isValid = false;
    }
    return isValid;
  }
  let isValidPassLengthVal = isValidPassLenght(password.length);
  if (!isValidPassLengthVal) {
    console.log("Password must be between 6 and 10 characters");
  }

  function isBetweenRange(ch, start, end) {
    return (
      ch.charCodeAt(0) >= start.charCodeAt(0) &&
      ch.charCodeAt(0) <= end.charCodeAt(0)
    );
  }

  function containsOnlyLettersAndDigits(password) {
    let isValid = true;
    for (let ch of password) {
      if (
        !(
          isBetweenRange(ch, "A", "Z") ||
          isBetweenRange(ch, "a", "z") ||
          isBetweenRange(ch, "0", "9")
        )
      ) {
        isValid = false;
      }
    }
    return isValid;
  }

  let containsOnlyLettersAndDigitsValue = containsOnlyLettersAndDigits(
    password
  );
  if (!containsOnlyLettersAndDigitsValue) {
    console.log("Password must consist only of letters and digits");
  }

  function containsLeastTwoDigits(password) {
    let digitCounter = 0;
    for (let ch of password) {
      if (isBetweenRange(ch, "0", "9")) {
        digitCounter++;

        if (digitCounter === 2) {
          break;
        }
      }
    }

    return digitCounter === 2 ? true : false;
  }

  let containsLeastTwoDigitsVal = containsLeastTwoDigits(password);
  if (!containsLeastTwoDigitsVal) {
    console.log("Password must have at least 2 digits");
  }
  if (
    isValidPassLengthVal &&
    containsLeastTwoDigitsVal &&
    containsOnlyLettersAndDigits
  ) {
    console.log("Password is valid");
  }
}
passwordValidator("MyPass123");
