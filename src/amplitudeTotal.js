'use strict'
/* */
var maiorNum = require('./maiorNumero')
var menorNum = require('./menorNumero')

function amplitudeTotal (arr) {
  maiorNum = maiorNum(arr);
  menorNum = menorNum(arr);
  console.log(arr);
  return (maiorNum - menorNum)
}
var ttt = [5,2,3,1,4]
console.log(amplitudeTotal(ttt));
module.exports = amplitudeTotal
