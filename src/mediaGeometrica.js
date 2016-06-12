'use strict'
/* */
var tamanho = require('./tamanho.js')
var produto = require('./produto.js')

function mediaGeometrica (arr) {
  return (Math.pow(produto, 1 / tamanho))
}
module.exports = mediaGeometrica
