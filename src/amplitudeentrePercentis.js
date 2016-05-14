'use strict';
/**/
var percentilNoventa = require('./percentilNoventa');
var percentilDez = require('./percentilDez');
function amplitudeentrePercentis (percentilNoventa,percentilDez){
  return (percentilNoventa - percentilNoventa);
}
module.exports = amplitudeentrePercentis;
