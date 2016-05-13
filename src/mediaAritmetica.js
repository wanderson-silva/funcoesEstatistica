'use strict';
var somatorio = require('./somatorio');
var tamanho = require('./tamanho');

function mediaAritmetica (arr,somatorio,tamanho) {
  return (somatorio(arr)/tamanho(arr));
}
module.exports = mediaAritmetica;
