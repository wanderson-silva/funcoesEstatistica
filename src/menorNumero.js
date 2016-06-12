'use strict'
/**/
var ordenarArray = require('./ordenarArray');
function menorNumero (arr) {
  arr = ordenarArray(arr);
  return (Math.min.apply(null, arr))
}
module.exports = menorNumero
