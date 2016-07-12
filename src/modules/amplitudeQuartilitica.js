'use strict'

const quartilInferior = require('fe-quartilInferior.js')
const quartilSuperior = require('fe-quartilSuperior.js')

const amplitudeQuartilitica = (arr) => {
  return (quartilSuperior(arr) - quartilInferior(arr))
}
module.exports = { calc: amplitudeQuartilitica }