  'use strict'
   /**/
  var tamanho = require('./tamanho')
  var ordenarArray = require('./ordenarArray')
  function mediana(arr) {
  var arr = ordenarArray(arr);
      tamanho = tamanho(arr);
  var meio = Math.floor(tamanho/2);
     if(tamanho % 2)
         return arr[meio];
     else
         return (arr[meio-1] + arr[meio]) / 2.0;
  }

  /*
  var arr = [1,2,3]
  tbm funciona estou, analisando..

  (function median(arr,mid) {
  		return mid % 1 ? arr[mid - 0.5] : (arr[mid - 1] + arr[mid]) / 2;
  	})(console.log(median(arr)))
  */
  module.exports = mediana
