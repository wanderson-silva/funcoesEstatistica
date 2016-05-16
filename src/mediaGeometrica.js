'use strict'
/* */
var tamanho = require('./tamanho.js')
var produto = require('./produto.js')

function mediaGeometrica (arr) {
  return (Math.pow(produto(arr), 1 / tamanho(arr)))
}
module.exports = mediaGeometrica
