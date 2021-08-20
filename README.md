# Roman Numerals

Roman numerals is a module that allows you to convert Arabic numbers into Roman numbers and vice versa.

## Installation

In the same directory as your `package.json` file, create or edit an `.npmrc` file to include this line:

```
registry=https://npm.pkg.github.com/andy164
```

#### As a dependency in your project

1. Install from the command line:

```
npm install @andy164/roman-numerals@1.0.1
```

2. Install via package.json:

```
"@andy164/roman-numerals": "1.0.1"
```

```
npm install
```

## Usage

### 1. API

The module exports two methods:

parse(str): Recibe un String como único argumento y retorna un número (Number) en caso que sea un número romano válido, en caso contrario arrojará un error especificando la causa.

#### `parse(str)`

It receives a `string` as the only argument and returns a number (`Number`) in case it is a valid Roman number, otherwise it will throw an error specifying the cause.

#### `stringify(num)`

It receives a number (`Number`) and returns a `String` with the representation of the number received as a Roman number. In case the number is out of range (`1 <= num <= 3999`) it will throw an error.

#### Example

```js
const { parse, stringify } = require('usuario-de-github/roman-numerals');

console.log(parse('I') === 1); // true
console.log(parse('III') === 3); // true
console.log(parse('IV') === 4); // true
console.log(parse('IX') === 9); // true
console.log(parse('MCMXLIV') === 1944); // true

console.log(stringify(1) === 'I'); // true
console.log(stringify(3) === 'III'); // true
console.log(stringify(4) === 'IV'); // true
console.log(stringify(9) === 'IX'); // true
console.log(stringify(1944) === 'MCMXLIV'); // true

console.log(parse(stringify(1)) === 1); // true
console.log(parse(stringify(3)) === 3); // true
console.log(parse(stringify(4)) === 4); // true
console.log(parse(stringify(9)) === 9); // true
console.log(parse(stringify(1944)) === 1944); // true
```

### 2. CLI

Roman numerlas can be run as follows via terminal:

`roman-numerlas [options] <command> [<input>]`

```
$ npx roman-numerals -h
Usage: roman-numerals [opttions] <command> [<input>]

Commands:
  parse <input>      Parse a roman numeral string into an integer.
  stringify <input>  Takes an integer and converts it to a roman numeral.

Options:
  -h,--help     Show this help.
  -v,--version  Show version number.

```

#### Example

```
$ npx roman-numerals parse MMXX
2020

$ npx roman-numerals stringify 2020
MMXX

$ npx roman-numerals -v
1.0.0
```

<br>

## License

See the license [here](./LICENSE).

<br>

## Learning objectives

### Node.js

- [x] **Instalar y usar módulos con npm**

    <details><summary>Links</summary><p>

  - [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)
  </p></details>

- [x] **Configuración de package.json**

    <details><summary>Links</summary><p>

  - [package.json - Documentación oficial (en inglés)](https://docs.npmjs.com/files/package.json)
  </p></details>

- [x] **Configuración de npm-scripts**

    <details><summary>Links</summary><p>

  - [scripts - Documentación oficial (en inglés)](https://docs.npmjs.com/misc/scripts)
  </p></details>

- [-] **process (env, argv, stdin-stdout-stderr, exit-code)**

    <details><summary>Links</summary><p>

  - [Process - Documentación oficial (en inglés)](https://nodejs.org/api/process.html)
  </p></details>

### JavaScript

- [x] **Tipos de datos primitivos**

    <details><summary>Links</summary><p>

  - [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
  </p></details>

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Strings (cadenas de caracteres)**

    <details><summary>Links</summary><p>

  - [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  - [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
  </p></details>

- [x] **Arrays (arreglos)**

    <details><summary>Links</summary><p>

  - [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  - [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  - [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  - [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
  </p></details>

- [x] **Objetos (key, value)**

    <details><summary>Links</summary><p>

  - [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
  </p></details>

- [x] **Variables (declaración, asignación, ámbito)**

    <details><summary>Links</summary><p>

  - [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  - [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
  </p></details>

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

    <details><summary>Links</summary><p>

  - [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [x] **Uso de bucles/ciclos (while, for, for..of)**

    <details><summary>Links</summary><p>

  - [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  - [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
  </p></details>

- [x] **Funciones (params, args, return)**

    <details><summary>Links</summary><p>

  - [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  - [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  - [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [x] **Pruebas unitarias (unit tests)**

    <details><summary>Links</summary><p>

  - [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
  </p></details>

- [x] **Módulos de CommonJS**

    <details><summary>Links</summary><p>

  - [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
  </p></details>

- [x] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [-] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [-] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [-] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

## Additional reading

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [learnyounode](https://github.com/workshopper/learnyounode)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
- [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
- [process.stdin - Node.js Docs](https://nodejs.org/api/process.html#process_process_stdin)
- [process.argv](https://nodejs.org/api/process.html#process_process_argv)

<!--
* https://github.com/sguest/RomanJS/blob/master/roman.js
* https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-roman-numeral-converter/16044
* https://stackoverflow.com/a/9083076
* https://medium.com/javascript-in-plain-english/algorithms-101-convert-roman-numerals-to-integers-in-javascript-d3aba86a43d4
* https://blog.usejournal.com/create-a-roman-numerals-converter-in-javascript-a82fda6b7a60
* https://www.w3resource.com/javascript-exercises/javascript-math-exercise-22.php -->
