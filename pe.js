function pe() {
 'use strict';
 var arr = [1,2,1];
 arr = arr.sort(function(a, b) {
  return a - b;
 });
 var tamanho = arr.length;
 var max = Math.max.apply(null, arr);
 var min = Math.min.apply(null, arr);
 var at = (max - min);
 var fi = arr.reduce(function(elemen, index) {
  elemen[index] = (typeof elemen[index] == 'undefined') ? elemen[index] = 1 : elemen[index] += 1;
  return elemen;
}, {});

 var sum = arr.reduce(function() {
  var s = 0,
   l = arr.length;
  while (l--) s += arr[l];
  return s;
 });


 var median = (function (arr) {
   var mid = array.length / 2;
   return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
 });

var mean = (sum/tamanho);



 //Fra = cada Frequencia /soma



 document.getElementById("a").innerHTML =
  "arr = { " +arr+ " }<br/>"+
  "arr.length = { " +tamanho+ " }" + "<br/>"+
  "arr.max = { "+max+" }"+ "<br/>"+
  "arr.min = { "+min+" }"+ "<br/>"+
  "arr.at = { "+at+" }"+"<br/>"+
  "arr.fi = { "+fi+" }"+"<br/>"+
  "arr.sum ={ "+sum+" }"+"<br/>"+
  "arr.mean ={ "+mean+" }"+"<br/>"+
  "arr.median ={ "+median+" }"+"<br/>";
  // "Minha frequencia e' " + f +"<br/>"+
  // "O somatorio dos elementos do meu array e'" + soma;
}
