'use strict'
var variancia = require('./variancia.js')
var tamanho = require('./tamanho.js')
var media = require('./mediaAritmetica.js')

function desvioMedioAbsoluto (arr) {
  return (1 / tamanho(arr)) * (arr.map((elemen) => {
    return (Math.pow( P ),(2))))
  }).reduce((a, b) => {
    return (a + b)
    })
  )
}



function variancia (arr) {
  return (1 / tamanho(arr)) * (arr.map((elemen) => {
    return Math.pow(Math.abs(elemen - media(arr)), (2))
  }).reduce((a, b) => {
    return (a + b)
  })
  )
}



function raizMediaQuadratica (arr) {
  return (Math.sqrt(Math.pow(media(arr), (2))
    )
  )
}
