'use strict'
/**/
var maiorNum = require('./maiorNumero');
var menorNum = require('./menorNumero');

function amplitudeTotal (maiorNum, menorNum) {
  return maiorNum - menorNum;
}
module.exports = amplitudeTotal;
