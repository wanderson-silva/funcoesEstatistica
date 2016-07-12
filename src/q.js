'use strict'

const length = require('fe-length')
function Q (arr) {
  console.log('(length(arr)', (length(arr))
  console.log('((length(arr) + 1) / 4)', ((length(arr) + 1) / 4))
  return ((length(arr) + 1) / 4)
}
module.exports = { calc: Q }
