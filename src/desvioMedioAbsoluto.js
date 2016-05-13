'use strict';
 /*
 *var arr=[1,2,3]
 *media = 2
 *tamanho = 3
 *somatorio = 6
 *desvioMedioAbsoluto resultado esperado = 0.6667
 */
'use strict';
var media = require('./mediaAritmetica');
var tamanho = require('./tamanho');

function desvioMedioAbsoluto () {
  return arr.map(function(elemen){ return elemen - media;}).reduce(function (a,b){return a + b})/tamanho;
}
module.exports = desvioMedioAbsoluto;

