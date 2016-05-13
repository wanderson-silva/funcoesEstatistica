'use strict';
 /**/
var tamanho = require('./tamanho');

function quartilSuperior (){
	return 3*(tamanho+1)/4;
}
module.exports = quartilSuperior;
