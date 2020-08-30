let nxnmatrix = number => {
  let result = "";
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      if (j !== number) {
        result += `${number} `;
      } else {
        result += `${number}`;
      }
    }
    if (i !== number) {
      result += `\n`;
    }
  }
  return result;
};
console.log(nxnmatrix(3));

//  function nxnMatrix(singleInteger) {
//     let nestedFunction = singleInteger => {
//         let result = '';
//         for (let i = 1; i <= singleInteger; i++) {

//             result += `${singleInteger} `.repeat(singleInteger);

//             if (i !== singleInteger) {
//                 result += '\n';
//             }

//         }
//         return result;
//     };

//     let output = nestedFunction(singleInteger);
//     console.log(output);
// }

// nxnMatrix(3);
