function revealWords(key, template) {
  let words = key.split(", ").sort((a, b) => b.length - a.length);

  words.forEach(word => {
    template = template.replace("*".repeat(word.length), word);
  });

  console.log(template);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
