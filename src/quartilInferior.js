'use strict';
 /**/
var tamanho = require('./tamanho');

function quartilInferior (tamanho){
	return (tamanho+1)/4;
}
module.exports = quartilInferior;
