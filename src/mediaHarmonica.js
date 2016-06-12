'use strict'
/**/
var tamanho = require('./tamanho.js')

function mediaHarmonica (arr) {
  return (tamanho / (arr .map((num) => {return 1 / num }).reduce((a, b) => { return a + b })
    )
  )
}
module.exports = mediaHarmonica
