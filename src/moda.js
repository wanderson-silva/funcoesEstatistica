'use strict';
 /**/
 function moda (arr){
   return arr.reduce(
     function(a, b) { a[b] = (a[b] || 0) + 1;
   return a;
 }, {});}
module.exports = moda;
/*
Ainda estou analisando essa...
function moda(arr){
  return arr.reduce(    function(elemen, index) {
      elemen[index] = (typeof elemen[index] == 'undefined') ? elemen[index] = 1 : elemen[index] += 1;
      return elemen;
  }, {})};
  */
