'use strict';

/**/
var tamanho = require('./tamanho');

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

function desvioMedioAbsoluto (values) {
  return (1/tamanho)*(values.map(function(value) {
     return Math.abs(value - media);
     }).reduce(function (a,b){
    return (a + b) ;
    })
  );
}

module.exports = desvioMedioAbsoluto;
