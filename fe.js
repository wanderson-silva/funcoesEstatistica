/*MICRO_LIBRARY_PROBABILTY_AND_STATISTIC*/
/*AUTHOR: WILLIAM_DIAS_VARGAS*/

/************************************************/
/* @Author William Dias Vargas                  */
/* v.0.1                                        */
/************************************************/
'use strict';

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

/*mediana do array*/
 var median = (function (arr) {
   var mid = array.length / 2;
   return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
 });

/*
fis é uma funcao q so pega os valores do objeto fi no caso as frequencias
*/
var fis= Object.keys(fi).map(function (key) {
  return fi[key];
});
function separatriz(li,i,N,D,Fant,fmd,h){

	var sep = (li+((i*(N/D)-Fant)/fmd)*h);
	return sep.toFixed(3);

}
function quartis(linf,n,i,fant,h,fmd) {
  return (linf+((n-fant)/fmd).h);
}

function mode(linf,d1,d2,h) {
	return linf+((d1/(d1+d2))*h);
}

function median(linf,N,Fant,fmd,h) {
	return linf+((N/2)-Fant)/fmd*h;
}

function mean(xifi,fi) {
	return xifi/fi;
}

function curtose(q3,q1,p90,p10) {
	return ((q3-q1)/(2*(p90-p10)));
}

function mode(linf,d1,d2,h) {
  return linf+((d1/(d1+d2))*h);
}

function median(linf,n2,fant,fmd,h) {
  return linf+(((n2-fant)/fmd)*h);
}

/*media dados tabulados*/
function mean(xifi,fi) {
  return xifi/fi;
}
/*funcoes dados brutos*/
//SEPARATRIZ



function fra(arr) {
  return  (elementodoarray/n)*100;
}

/*DESVIO_MEDIO_DADOS_BRUTOS*/
function desvioMediaAbsoluto(somatorio,xi,media,tamanho) {

}


function dmB(sum_xi_med,n) {
  this.sum_xi_med=sum_xi_med;
  this.n=n;
  return sum_xi_med/n;
}
/*DESVIO_MEDIO_DADOS_TABULADOS*/
function dmT(sum_xi_med,fi,sumFi) {
  this.sum_xi_med=sum_xi_med;
  this.fi=fi;
  this.sum_fi=sum_fi;
  return (sum_xi_med*fi)/sum_fi;
}
/*VARIANCIA_POPULACIONAL*/
function varianceP(sum_xi_med,fi,sum_fi) {
  this.sum_xi_med=sum_xi_med;
  this.fi=fi;
  this.sum_fi=sum_fi;
  return (sum_xi_med*fi)^2/sum_fi;
}
/*VARIANCIA_AMOSTRAL*/
function varianceA(sum_xi_med,fi,sum_fi) {
  this.sum_xi_med=sum_xi_med;
  this.fi=fi;
  this.sum_fi=sum_fi;
  return (sum_xi_med*fi)^2/sum_fi-1;
}

var k = Math.sqrt(tamanho);

function h (At,k) {''
  this.At=At;
  this.k=k;
  return At/k;
}
