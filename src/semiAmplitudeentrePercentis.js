'use strict';
/**/
var percentilNoventa = require('./percentilNoventa');
var percentilDez = require('./percentilDez');

function semiAmplitudeentrePercentis (percentilNoventa,percentilDez){
  return (1/2)*(percentilNoventa - percentilNoventa);
}
module.exports = semiAmplitudeentrePercentis;
