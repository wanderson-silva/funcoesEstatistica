'use strict'
/*  */
var percentilNoventa = require('./percentilNoventa.js')
var percentilDez = require('./percentilDez.js')

function amplitudeentrePercentis (arr) {
  return (percentilNoventa(arr) - percentilDez(arr))
}
module.exports = amplitudeentrePercentis
