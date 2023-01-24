const weirdShit = (str) => {
  str = str.toLowerCase();
  let newStr = "";
  let x = 0;
  const strArr = str.split("");
  strArr.forEach((char) => {
    newStr += char.toUpperCase();
    for (let i = 0; i < x; i++) {
      newStr += char;
    }
    x++;
    if (x != strArr.length) {
      newStr += "-";
    }
  });
  return newStr;
};
weirdShit('abcd');//=