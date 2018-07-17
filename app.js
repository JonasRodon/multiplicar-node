// // requireds
// const fs = require('fs')
// tipos de require
// 1) const fs = require('fs')
// 2) const fs = require('express')
// 3) const fs = require('./mi-archivo.js')
// const multiplicar = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors')// eslint-disable-line
let comando = argv._[0]

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
    break
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
      .catch(e => console.log(e))
    break
  default:
    console.log('comando no reconocido')
}
// let parametro = argv[2]
// let base = parametro.split('=')[1]
// console.log(argv.base)

// let data = ''
// // 2*1=2
// // 2*2=4
// // 2*3=6
// // ...

// for (let i = 1; i <= 10; i++) {
//   data += `${base} * ${i} = ${base * i} \n`
// }
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//   if (err) throw err
//   console.log(`El archivo tabla-${base}.txt ha sido creado`)
// })

// multiplicar.crearArchivo(base)
