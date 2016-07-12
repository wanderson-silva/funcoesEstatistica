# Refatorando atomicamente

Vaos iniciar refatorando o arquivo [fe.js]().

Pegarei a primeira função da qual o resto depende:

```js
 /*frequencias dos valores no array*/
 var fi = arr.reduce(function(elemen, index) {
  elemen[index] = (typeof elemen[index] == 'undefined') ? elemen[index] = 1 : elemen[index] += 1;
  return elemen;
}, {});
```

Então vamos criar o arquivo `src/frequency.js`


Agora vamos modularizar a função [`src/amplitudeQuartilitica.js`](https://github.com/wdiasvargas/funcoesEstatistica/blob/master/src/amplitudeQuartilitica.js):

```js

'use strict'
 /* */
var quartilInferior = require('./quartilInferior.js')
var quartilSuperior = require('./quartilSuperior.js')

function amplitudeQuartilitica (arr) {
  return (quartilSuperior(arr) - quartilInferior(arr))
}
module.exports = amplitudeQuartilitica
```

Esse módulo refatorado ficará:

```js
'use strict'

const quartilInferior = require('fe-quartilInferior.js')
const quartilSuperior = require('fe-quartilSuperior.js')

const amplitudeQuartilitica = (arr) => {
  return (quartilSuperior(arr) - quartilInferior(arr))
}
module.exports = { calc: amplitudeQuartilitica }
```

Porém veja que transformamos em módulos externos as funções:

- quartilInferior
- quartilSuperior;

Logo vamos modulariza-los antes:

```js
// quartilInferior
'use strict'
 /**/
var Q = require('./q.js')

function quartilInferior (arr) {
  return (1 * Q)
}
module.exports = quartilInferior
```

Porém perceba que ele mesmo tampém depende da função `q.js`, logo precisamos modularizar ela antes:

```js

'use strict'
 /**/
var tamanho = require('./tamanho.js')
function Q (arr) {
  return ((tamanho(arr) + 1) / 4)
}
module.exports = Q
```

Aí você vê que ela depende de outra função, a `tamanho.js`, então vamos modularizar ela:

```js
'use strict'

function tamanho (arr) {
  return (arr.length)
}
module.exports = tamanho
```

Ficando assim:

```js
'use strict'

const length = (arr) => {
  return (arr.length)
}
module.exports = length
```

Vamos testar?

```js
const FE = {}
FE.length = require('./src/modules/length')
console.log(FE.length.calc([1,2,3]))
```

OK! Então nosso módulo está pronto, agora vamos criar um projeto único para ele, copiando esse arquivo para outra pasta e iniciando ela com `npm init`:

```
(fe-length) ➜ () ➜ ls
README.md index.js  length.js
(fe-length) ➜ () ➜ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (fe-length) 
version: (1.0.0) 
description: Returns the length of a given Array
entry point: (index.js) length.js
test command: 
git repository: 
keywords: node.js, statistics, length, webschool,
author: Suissa
license: (ISC) WTFPL
About to write to /Users/jeancarlonascimento/www/projetos/Atomic-modules/fe-length/package.json:

{
  "name": "fe-length",
  "version": "1.0.0",
  "description": "Returns the length of a given Array",
  "main": "length.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node.js",
    "statistics",
    "length",
    "webschool"
  ],
  "author": "Suissa",
  "license": "WTFPL"
}


Is this ok? (yes) 
```

Perfeito! Agora após criarmos nosso projeto podemos publicar ele no [npm]() com o comando `npm publish`:

```

(fe-length) ➜ () ➜ npm publish
npm http request PUT http://registry.npmjs.org/fe-length
npm http 200 http://registry.npmjs.org/fe-length
+ fe-length@1.0.0
```

Agora você pode conferir o módulo publicado em [https://www.npmjs.com/package/fe-length](https://www.npmjs.com/package/fe-length).

Depois disso podemos voltar para o arquivo `q.js`:

```js

'use strict'

var tamanho = require('./tamanho.js')
function Q (arr) {
  return ((tamanho(arr) + 1) / 4)
}
module.exports = Q
```

Antes de refatorarmos esse código precisamos instalar **localmente** o módulo criado anteriormente assim:

```
(funcoesEstatistica) ➜ (git:(master)) ➜ npm i --save fe-length
(node:7930) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.
npm http request GET http://registry.npmjs.org/fe-length
npm http 200 http://registry.npmjs.org/fe-length
funcoes-estatistica@1.0.0 /Users/jeancarlonascimento/www/projetos/Atomic-modules/funcoesEstatistica
└── fe-length@1.0.0 
```

Agora refatorando ficará:

```js
'use strict'

const length = require('fe-length')
const Q = (arr) => ((length.calc(arr) + 1) / 4)
module.exports = { calc: Q }
```

Basta agora testar:

```js
FE.Q = require('./src/modules/q')
console.log(FE.Q.calc([1,2,3,4]))
// 1.25
```

> Percebeu que para **TODAS** as funções desse módulo `FE` você precisa executar a função `calc()`?


**Isso acontece porque defini como o padrão de execução para **TODOS** os módulos atômicos dessa biblioteca.**

*Caso você acha que poderia ser um nome melhor por favor deixe sua sugestão!*

Então faremos o mesmo procedimento do módulo `fe-length`:

- copie o arquivo para 1 pasta nova
- execute `npm init`
- execute `npm publish`

```
(fe-q) ➜ () ➜ ls
README.md q.js
(fe-q) ➜ () ➜ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (fe-q) 
version: (1.0.0) 
description: Quartil of an Array
entry point: (q.js) 
test command: 
git repository: 
keywords: quartil, statistics, webschool
author: Suissa
license: (ISC) WTFPL
About to write to /Users/jeancarlonascimento/www/projetos/Atomic-modules/fe-q/package.json:

{
  "name": "fe-q",
  "version": "1.0.0",
  "description": "Quartil of an Array",
  "main": "q.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "quartil",
    "statistics",
    "webschool"
  ],
  "author": "Suissa",
  "license": "WTFPL"
}


Is this ok? (yes) 
```

E agora basta publicar:

```
(fe-q) ➜ () ➜ npm publish
npm http request PUT http://registry.npmjs.org/fe-q
npm http 200 http://registry.npmjs.org/fe-q
+ fe-q@1.0.0
```

Pronto nosso módulo está publicado em [https://www.npmjs.com/package/fe-q](https://www.npmjs.com/package/fe-q)!
