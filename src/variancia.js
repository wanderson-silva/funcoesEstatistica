'use strict'
var media = require('./mediaAritmetica.js')
var tamanho = require('./tamanho.js')

function variancia (arr) {
  return (1 / tamanho(arr)) * (arr.map((elemen) => {
    return Math.pow(Math.abs(elemen - media(arr)), (2))
  }).reduce((a, b) => {
    return (a + b)
  })
  )
}
module.exports = variancia
