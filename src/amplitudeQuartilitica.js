'use strict';
 /**/
var quartilInf = require('./quartilInf');
var quartilSup = require('./quartilSup');
// ainda nao resolvi
function amplitudeQuartilitica (){
	return (quartilSup - quartilInf);
}
module.exports = amplitudeQuartilitica;
