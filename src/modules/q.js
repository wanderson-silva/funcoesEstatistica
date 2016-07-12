'use strict'

const length = require('fe-length')
const Q = (arr) => ((length.calc(arr) + 1) / 4)
module.exports = { calc: Q }
