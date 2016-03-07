//QUARTIZ,PERCENTIZ,DECIS
//Agrupados por intervalo de Classe

function separatriz(li,i,N,D,Fant,fmd,h){
	var sep = (li+((i*(N/D)-Fant)/fmd)*h);
	return sep.toFixed(3);
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
