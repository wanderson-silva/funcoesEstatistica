'use strict';
 /**/
var tamanho = require('./tamanho');

function percentilNoventaeNove (tamanho){
  return 99*(tamanho+1)/100;
}
module.exports = percentilNoventaeNove
