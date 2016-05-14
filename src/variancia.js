'use strict';
var desvioMedioAbsoluto = require('./desvioMedioAbsoluto');

function variancia(desvioMedioAbsoluto) {
  return Math.pow(desvioMedioAbsoluto);
}

module.exports = variancia;
