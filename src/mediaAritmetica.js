'use strict'
var somatorio = require('./somatorio.js')
var tamanho = require('./tamanho.js')

function mediaAritmetica (arr) {
  return (somatorio(arr) / tamanho(arr))
}
module.exports = mediaAritmetica
