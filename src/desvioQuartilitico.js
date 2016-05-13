'use strict';
 /**/
var quartilInf = require('./quartilInf');
var quartilSup = require('./quartilSup');

function desvioQuartilitico (quartilSup, quartilInf){
	return (quartilSup - quartilInf)/2;
}
module.exports = desvioQuartilitico;
