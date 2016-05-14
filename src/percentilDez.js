'use strict';
 /**/
var tamanho = require('./tamanho');

function percentilDez (tamanho){
  return 10*(tamanho+1)/100;
}
module.exports = percentilDez;
