
'use strict'
 /**/
var tamanho = require('./tamanho.js')
function P (arr) {
  return ((tamanho(arr) + 1) / 100)
}
module.exports = P
