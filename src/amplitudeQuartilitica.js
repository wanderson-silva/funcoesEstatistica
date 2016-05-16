'use strict'
 /*	*/
var quartilInferior = require('./quartilInferior.js')
var quartilSuperior = require('./quartilSuperior.js')

function amplitudeQuartilitica (arr) {
  return (quartilSuperior(arr) - quartilInferior(arr))
}
module.exports = amplitudeQuartilitica
