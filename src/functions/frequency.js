 /*frequencias dos valores no array*/
 const fi = (arr) => arr.reduce(function(elemen, index) {
  elemen[index] = (typeof elemen[index] == 'undefined') ? elemen[index] = 1 : elemen[index] += 1;
  return elemen;
}, arr);
// const Frequency = require('fe-frequency')
// Frequency.calc()
 module.exports = () => { 
  return { calc: (arr) => arr.reduce(function(elemen, index) {
    elemen[index] = (typeof elemen[index] == 'undefined') ? elemen[index] = 1 : elemen[index] += 1;
      return elemen;
    })
  }
}