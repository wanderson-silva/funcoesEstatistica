 /*
 *var arr=[1,2,3]
 *media = 2
 *tamanho = 3
 *somatorio = 6
 *desvioMedianaAbsoluto resultado esperado = 0.6667
 */
'use strict'
var mediana = require('./mediana.js')
var tamanho = require('./tamanho.js')

function desvioMedianaAbsoluto (arr) {
  return (1 / tamanho(arr)) * (arr.map((elemen) => {
    return (Math.abs(elemen - mediana(arr)))
  }).reduce((a, b) => {
    return (a + b)
  })
  )
  return null
}

module.exports = desvioMedianaAbsoluto
