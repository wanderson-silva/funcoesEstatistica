/************************************************/
/* @Author William Dias Vargas                  */
/* v.0.1                                        */
/************************************************/
'use strict';
 /*
 array de exemplo
 */
 var arr = [1,2,1];
 /*
 ordernar array
 */
 arr = arr.sort(function(a, b) {
  return a - b;
 });
 /*tamanho*/
 var tamanho = arr.length;
 /*max e min*/
 var max = Math.max.apply(null, arr);
 var min = Math.min.apply(null, arr);
 /*amplitude total*/
 var at = (max - min);
 /*frequencias dos valores no array*/
 var fi = arr.reduce(function(elemen, index) {
  elemen[index] = (typeof elemen[index] == 'undefined') ? elemen[index] = 1 : elemen[index] += 1;
  return elemen;
}, {});

/*
fis é uma funcao q so pega os valores do objeto fi no caso as frequencias
*/
var fis= Object.keys(fi).map(function (key) {
  return fi[key];
});
/************************************/
/*
somatorio das frequencias
*/
var sumFi = fis.reduce(function() {
  var s = 0,
   l = arr.length;
  while (l--) s += arr[l];
  return s;
 });

/*somatorio do array*/
 var sum = arr.reduce(function() {
  var s = 0,
   l = arr.length;
  while (l--) s += arr[l];
  return s;
 });

/*mediana do array*/
 var median = (function (arr) {
   var mid = array.length / 2;
   return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
 });
/*media artitmetica do array*/
var mean = (sum/tamanho);
