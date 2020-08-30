function furniture(input) {
  const pattern = />>([a-zA-Z]+)<<(\d+\.?\d+)!(\d+)/gm;
  let lines = input.slice(0, input.indexOf("Purchase")).join("\n");
  let arr = Array.from(lines.matchAll(pattern));
  let names = `Bought furniture:`;
  let cost = 0;
  arr.forEach(match => {
    names += "\n" + match[1];
    cost += Number(match[2]) * Number(match[3]);
  });

  console.log(names + `\nTotal money spend: ${cost.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
