'use strict'
/* */
var maiorNum = require('./maiorNumero.js')
var menorNum = require('./menorNumero.js')

function amplitudeTotal (arr) {
  return (maiorNum(arr) - menorNum(arr))
}
module.exports = amplitudeTotal
