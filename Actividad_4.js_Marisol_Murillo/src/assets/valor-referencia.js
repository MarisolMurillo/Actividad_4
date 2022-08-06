console.warn('parámetro por valor y por referencia')
console.warn('parámetro por valor')

let a = 10
let b = a
b = b + 12
//b += 12 esto es lo mismo que arriba b = b + 12


console,console.log({ a, b })

console.warn('parámetro por referencia')

let manuel = {edad: 20}
let carolina = manuel
carolina.edad = 30

console.log ({manuel, carolina})

console.warn('rompiendo la referencia')

let jordan = {edad: 20}
let anderson = {...jordan} 
// aqui los tres punticos es para crear una copia
anderson.edad = 30

console.log ({anderson, jordan})
