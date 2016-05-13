'use strict';
 /**/
var quartilInf = require('./quartilInf');
var quartilSup = require('./quartilSup');

function amplitudeQuartilitica (){
	return (quartilSup - quartilInf);
}
module.exports = amplitudeQuartilitica;
