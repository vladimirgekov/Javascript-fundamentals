function cone(radius, height) {
  let area = radius * radius * Math.PI;
  let volume = (area * height) / 3;

  let area1 =
    Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area1.toFixed(4)}`);
}
