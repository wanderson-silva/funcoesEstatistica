'use strict'
/**/
function produtoArray (arr){
  return arr.reduce(function (a, b) { return a * b })
}
module.exports = produtoArray;
