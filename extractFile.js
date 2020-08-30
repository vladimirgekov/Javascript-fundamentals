function extractFile(input) {
  let file = input.substring(input.lastIndexOf("\\") + 1);
  let fileName = file.substring(0, file.lastIndexOf("."));
  let ext = file.substring(file.lastIndexOf(".") + 1);

  console.log([`File name: ${fileName}`, `File extension: ${ext}`].join("\n"));
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
