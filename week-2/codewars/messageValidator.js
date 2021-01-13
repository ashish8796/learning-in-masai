function isAValidMessage(message) {
  if (!parseInt(message)) {
    return false;
  }
  let wordsArr = message.split(/[0-9]/).filter((s) => s);
  let numArr = message.split(/[a-zA-Z]/).filter((s) => s);
  console.log(wordsArr);
  console.log(numArr);
  return wordsArr.every((v, i) => v.length === +numArr[i]);
}

console.log(
  isAValidMessage(
    "60HsUVYaIlhUbDTNfrEWNSJRkHsGMTbsNRsBZhsLwPlLtipFujPqpVvNJWnOvR"
  )
);
