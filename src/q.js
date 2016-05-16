
'use strict'
 /**/
var tamanho = require('./tamanho.js')
function Q (arr) {
  return ((tamanho(arr) + 1) / 4)
}
module.exports = Q
