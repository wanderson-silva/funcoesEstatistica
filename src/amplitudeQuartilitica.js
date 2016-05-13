'use strict';
 /**/
var quartilInf = require('./quartilInf');
var quartilSup = require('./quartilSup');

function amplitudeQuartilitica (quartilSup,quartilInf){
	return (quartilSup - quartilInf);
}
module.exports = amplitudeQuartilitica;
