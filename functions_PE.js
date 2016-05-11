/*MICRO_LIBRARY_PROBABILTY_AND_STATISTIC*/
/*AUTHOR: WILLIAM_DIAS_VARGAS*/
/*VERSION:0.01*/




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
var somatorio = arr.reduce(function (a, b) { return a + b })
var produto = arr.reduce(function (a, b) { return a * b })
var media = (somatorio/tamanho)
var mediaG = Math.pow(produto, 1 / tamanho)
var mediaH = tamanho / (arr .map(function (num) {return 1 / num}));



//SEPARATRIZ
function quartis(linf,n,i,fant,h,fmd) {
  return (linf+((n-fant)/fmd).h);
}


function fra(arr) {
  return  (elementodoarray/n)*100;
}

/*exemplo*/
var arr = [
84,68,33,52,47,73,68,61,73,77,74,71,81,91,
65,55,57,35,85,88,59,80,41,50,53,65,76,85,
73,60,67,41,78,56,94,35,45,55,64,74,65,94,
66,48,39,69,89,98,42,54
];
var tamanho = arr.length;
console.log(arr.sort());
console.log("o tamanho do array e'"+tamanho);
/*AMPLITUDE_TOTAL*/
function at(xmax,xmin) {
  this.xmax=xmax;
  this.xmin=xmin;
  return xmax-xmin;
}
/*DESVIO_MEDIO_DADOS_BRUTOS*/
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
var arr = [
  8,0,2,3,3,5,7,7,7,9,
  8,4,1,9,6,6,6,8,3,3,
  7,7,6,0,1,3,3,3,7,7,
  6,5,5,1,2,5,2,5,3,2
];
var tamanho = arr.length;
console.log(arr.sort());
console.log("o tamanho do array e'"+tamanho);


var arr = [
  2.0,3.0,0.3,3.3,1.3,0.4,0.2,6.0,5.5,6.5,
  0.2,2.3,1.5,4.0,5.9,1.8,4.7,0.7,4.5,0.3,
  1.5,0.5,2.5,5.0,1.0,6.0,5.6,6.0,1.2,0.2
];
var max = Math.max(arr);
var min = Math.min(arr);
var tamanho = arr.length;
var k = Math.sqrt(tamanho);
function h (At,k) {
  this.At=At;
  this.k=k;
  return At/k;
}
console.log(arr.sort());
console.log("o tamanho do array e' "+tamanho);
console.log("o numero de classes e' "+k);
console.log("o maior valor da matriz e' "+max);
console.log("o menor valor da matriz e' "+min);
