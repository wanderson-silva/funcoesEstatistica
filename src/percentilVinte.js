'use strict';
 /**/
var tamanho = require('./tamanho');

function percentilVinte (tamanho){
  return 20*(tamanho+1)/100;
}
module.exports = percentilVinte;
