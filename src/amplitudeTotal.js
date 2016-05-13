'use strict'
/**/
var maiorNum = require('./maiorNumero');
var menorNum = require('./menorNumero');

function amplitudeTotal () {
  return maiorNum - menorNum;
}
module.exports = amplitudeTotal;
