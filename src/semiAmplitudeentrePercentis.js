'use strict'
/**/
var percentilNoventa = require('./percentilNoventa.js')
var percentilDez = require('./percentilDez.js')

function semiAmplitudeentrePercentis (arr) {
  return ((1 / 2) * (percentilNoventa(arr) - percentilDez(arr)))
}
module.exports = semiAmplitudeentrePercentis
