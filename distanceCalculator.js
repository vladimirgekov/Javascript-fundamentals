function distanceCalculator([stepMade, lengthOfOneStep, distanceNeedToTravel]) {
  let fifth = Math.trunc(stepMade / 5);

  stepMade = stepMade - fifth;

  let shorterLength = lengthOfOneStep * 0.7;

  let distanceInCm = stepMade * lengthOfOneStep + fifth * shorterLength;

  let distanceInMeters = distanceInCm * 100;

  let percent = distanceInMeters / distanceNeedToTravel / 100;
  console.log(`You travelled ${percent.toFixed(2)}% of the distance!`);
}
distanceCalculator([100, 2, 1]);
