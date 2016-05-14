'use strict';
 /**/
var tamanho = require('./tamanho');
function mediana (tamanho){
	return (tamanho+1)/2;
}
/*
var arr = [1,2,3]
tbm funciona estou, analisando..

(function median(arr,mid) {
		return mid % 1 ? arr[mid - 0.5] : (arr[mid - 1] + arr[mid]) / 2;
	})(console.log(median(arr)))
*/
module.exports = mediana;
