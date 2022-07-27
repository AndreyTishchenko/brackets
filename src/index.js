module.exports = function check(str, bracketsConfig) {
  let slash = '|';
  let closeBrackets = [];
  let openBrackets = [];
  let rowBrackets = [];
  let stack = [];

  if (str.length % 2 !== 0) {
    return false;

  } else {
    for (let elem of bracketsConfig) {
      if (elem[0] === elem[1]) {
        rowBrackets.push(elem[0]);
      } else {
        closeBrackets.push(elem[1]);
        openBrackets.push(elem[0]);
      }
    }
    console.log(closeBrackets);
    console.log(openBrackets)

    for (let i = 0; i < str.length; i++) {

      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];

      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
       
      } else if (rowBrackets.includes(currentSymbol)) {

        if (currentSymbol === topElement) {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }

      } else {
        if (openBrackets[closeBrackets.indexOf(currentSymbol)] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}
