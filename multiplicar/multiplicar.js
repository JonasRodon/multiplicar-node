// requireds
const fs = require('fs')
const colors = require('colors')

let listarTabla = (base, limite = 10) => {
  console.log('======================'.green)
  console.log(`==Table de ${base}==`.green)
  console.log('======================'.green)
  let data = ''
  for (let i = 1; i <= limite; i++) {
    data += `${base} * ${i} = ${base * i} \n`
  }
  console.log(data)
}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`)// eslint-disable-line
      return
    }
    let data = ''
    // 2*1=2
    // 2*2=4
    // 2*3=6
    // ...

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`
    }
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err)
      else { resolve(`tabla-${base}-al-${limite}.txt`) }
    })
  })
}

module.exports = {
  crearArchivo,
  listarTabla
}
