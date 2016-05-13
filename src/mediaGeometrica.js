'use strict'
/**/
var tamanho = require('./tamanho');
var produto = require('./produto');
function mediaGeometrica (produto, tamanho){

  return Math.pow(produto, 1 / tamanho);
}
module.exports = mediaGeometrica;
