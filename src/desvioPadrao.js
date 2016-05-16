'use strict'
var variancia = require('./variancia.js')

function desvioPadrao (arr) {
  return (Math.sqrt(variancia(arr)))
}

module.exports = desvioPadrao
