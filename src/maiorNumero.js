'use strict'
/**/
var ordenarArray = require('./ordenarArray');
function maiorNumero (arr) {
  arr = ordenarArray(arr);
  return (Math.max.apply(null, arr))
}
module.exports = maiorNumero
