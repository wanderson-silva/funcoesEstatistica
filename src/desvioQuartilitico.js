'use strict'
 /*	*/
var quartilInf = require('./quartilInferior.js')
var quartilSup = require('./quartilSuperior.js')

function desvioQuartilitico (arr) {
  return ((quartilSup(arr) - quartilInf(arr)) / 2)
}
module.exports = desvioQuartilitico
