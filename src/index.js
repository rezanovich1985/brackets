function check(str, bracketsConfig) {
  brackets = {};
  pairsOfBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    pairsOfBrackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }

  // while (str.length > 0) {
  //   if (brackets[str[0]] !== str.at(-1)) {
  //     return false;
  //   }
  //   str = str.slice(1, -1);
  // }
  // return true;

  isContinue = true;
  while (isContinue) {
    isContinue = false;
    for (let pairOfBrackets of pairsOfBrackets) {
      pos = str.indexOf(pairOfBrackets);
      if (pos !== -1) {
        str = str.slice(0, pos) + str.slice(pos + 2);
        isContinue = true;
      }
    }
  }
  return str.length === 0;
}

module.exports = check;

const str = "()";
const bracketsConfig = [["(", ")"]];
console.log(check(str, bracketsConfig));
