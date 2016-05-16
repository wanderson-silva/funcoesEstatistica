
 /*
 *var arr=[1,2,3]
 *media = 2
 *tamanho = 3
 *somatorio = 6
 *desvioMedioAbsoluto resultado esperado = 0.6667
 */
'use strict'
var media = require('./mediaAritmetica.js')
var tamanho = require('./tamanho.js')

function desvioMedioAbsoluto (arr) {
  return (1 / tamanho(arr)) * (arr.map((elemen) => {
    return (Math.abs(elemen - media(arr)))
  }).reduce((a, b) => {
    return (a + b)
  })
)
}

module.exports = desvioMedioAbsoluto
