
  var fe = {}
/* NAO SEI O QUE TAVA QUERENDO FAZER AQUI */
  /*  order*/
  fe = (function () {
    fe.prototype.order = function (arr) {
      return (arr.sort((a, b) => { return a - b }))
    }
  /* length*/
    fe.prototype.lngth = function (arr) {
      return (arr.length)
    }
  /*  somatorio*/
    fe.prototype.sum = function (arr) {
      return (arr.reduce((a, b) => { return a + b }, 0))
    }
  /*  produtoArray*/
    fe.prototype.product = function (arr) {
      return (arr.reduce((a, b) => { return a * b }))
    }
  /*  mediaAritmetica*/
    fe.prototype.meanA = function (arr) {
      return (sum(arr)/lngth(arr))
    }
  /* mediaGeometrica*/
    fe.prototype.meanG = function (arr) {
      return (Math.pow(product(arr),1/lngth(arr)))
    }
  /* mediaHarmonica*/
    fe.prototype.meanH = function (arr) {
      return (lngth(arr) / (arr.map((num) => { return 1 / num }).reduce((a, b) => { return a + b })))
    }
  /* moda*/
    fe.prototype.mode = function (arr) {
      return (arr.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1
        return a }, {})
        )
    }
  /* mediana*/
  /* tenho que analisar*/
    fe.prototype.mediana = function (arr) {
      return (lngth(arr) + 1) / 2
    }
  /* maiorNumeroArray*/
    fe.prototype.max = function (arr) {
      return (Math.max.apply(null, arr))
    }
  /*  menorNumeroArray*/
    fe.prototype.min = function (arr) {
      return (Math.min.apply(null, arr))
    }
  /*  amplitudeTotal*/
    fe.prototype.range = function (arr) {
      return (min(arr)- min(arr))
    }

    fe.prototype.q = function (arr) {
      return ((lngth(arr)+1) / 4)
    }
  /*  quartilInferior*/
    fe.prototype.q1 = function (arr) {
      return (1 * q)
    }

  /*  quartilMedio*/
    fe.prototype.q2 = function (arr) {
      return ( 2 * q)
    }
  /*  quartilSuperior*/
    fe.prototype.q3 = function (arr) {
      return ( 3 * q)
    }
  /* *******************************************/
    fe.prototype.d = function (arr) {
      return ((lngth(arr)+1) / 10)
    }
  /* decilUm*/
    fe.prototype.d1 = function (arr) {
      return (1 * d)
    }
  /* decilDois*/
    fe.prototype.d1 = function (arr) {
      return (2 * d);
    }
  /* decilCinco*/
    fe.prototype.d5 = function (arr) {
      return (5 * d)
    }
  /*  decilNove*/
    fe.prototype.d9 = function (arr) {
      return (9 * d)
    }
    /* ******************************/
    fe.prototype.p = function (arr) {
      return ((lngth(arr)+1)/100)
    }
  /* percentilDez*/
    fe.prototype.p10 = function (arr) {
      return (10 * p)
    }
  /* percentilVinte*/
    fe.prototype.p20 = function (arr) {
      return (20 * p)
    }
  /* percentilCinquenta*/
    fe.prototype.p50 = function (arr) {
      return (50 * p)
    }
  /* percentilNoventa*/
    fe.prototype.p90 = function (arr) {
    return (90 * p)
    }
  /* raizMediaQuadratica*/
    fe.prototype.rmq = function (arr) {
      return (Math.sqrt(Math.pow(meanA(arr), 2)))
    }
  /* desvioQuartilico*/
    fe.prototype.devQ = function (arr) {
      return ((q3(arr) - q1(arr))/2)
    }
    function dev(arr) {
      return (( 1 / lngth(arr)) * (arr.map((elemen) => {
        return (Math.abs(elemen - meanA(arr)))
      }).reduce((a, b) => {
        return (a + b)
      })
  ))
    }
  /* desvioMedioAbsoluto*/
    fe.prototype.dma = function (arr) {
      return dev(arr).reduce((a, b) => {
        return (a + b)
      })

    }
  /* desvioMedianaAbsoluto*/
    fe.prototype.mda = function (arr) {
  /* return (1/tamanho(arr))*(arr.map(function(elemen) {
     return Math.abs(elemen - mediana(arr));
     }).reduce(function (a,b){
    return (a + b) ;
    })
  );*/
      return (null)
    }
  /* amplitudeQuartilitica*/
    fe.prototype.rangeQ = function (arr) {
      return (q3(arr) - q1(arr))
    }
    /*  amplitudeentrePercentis*/
      fe.prototype.rangeP = function (arr) {
        return (p90(arr) - p10(arr))
      }

  /* semiAmplitudeentrePercentis*/
    fe.prototype.srp = function (arr) {
      return ((1 / 2) * (rangeP))
    }

  /*  variancia*/
    fe.prototype.variance = function (arr) {
      return (Math.pow(dev(arr)), 2).reduce((a, b) => {
        return (a + b)
      })
    }
  /* desvioPadrao*/
    fe.prototype.dp = function (arr) {
      return (Math.sqrt(variance(arr)))
    }
    return fe
})()
