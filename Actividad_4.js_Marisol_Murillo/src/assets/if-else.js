console.log('conectando a if-else')

console.warn('construyendo un if')

let a = 5

if (a > 10) {
     console.log (`${a} es mayor a 10`)
} else {
    console.log (`${a} es menor a 10`)
}

console.log ('fin del programa')

//.........................................

console.warn('Dias de la semana')

const hoy = new Date()
let dia = hoy. getDay()
console.log({ dia })

if (dia === 0) {
    console.log('Domingo')
} else if (dia === 1){
    console.log('lunes')
} else {
    console.log('no es ni domingo ni lunes')
}

//...................................
console.warn ('punto 2 actividad')
const diasDeLaSemana = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
]
console.log(diasDeLaSemana[dia])

const diasSemanales = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
}
console.log(diasSemanales[dia])
