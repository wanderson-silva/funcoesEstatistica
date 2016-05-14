'use strict';
 /**/
var tamanho = require('./tamanho');

function percentilCinquenta (tamanho){
  return 50*(tamanho+1)/100;
}
module.exports = percentilCinquenta;
