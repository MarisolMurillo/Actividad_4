/* console.log('conectado a funciones-2')

console.warn('funcion tradicional con clave valor repetida')

function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const persona = crearPersona('Teresa', 'Garcia')
console.log({ persona })

//.............................................................

console.warn('funcion tradicional con clave valor sin repetir - segunda')

function crearPersona2(nombre, apellido) {
    return {
        nombre,
        apellido,
    }
}

const persona2 = crearPersona2('Yanith', 'Garcia')
console.log({ persona2 })

//.........................................................

console.warn('funcion flecha con llaves - tercera')

const crearPersona3 = (nombre, apellido) => {
    return {
        nombre,
        apellido,
    }
}

const persona3 = crearPersona3('Deyron', 'Córdoba')
console.log({ persona3 })

//.....................................................

console.warn('funcion flecha sin llaves - cuarta')

const crearPersona4 = (nombre, apellido) => ({ nombre, apellido })

const persona4 = crearPersona4('Axel', 'Córdoba')
console.log({ persona4 })


//.....................................................

console.warn('pasando argumentos')

const argumentos = (...args) => {
    return args
}
//NOTA: el args con los tres puntitos me saca todos los datos y para sacar 
// algo en especifico es asi console. log ({datos[2]})
 
const datos = argumentos(10, true, false, 'Gustado', 'sepúlveda')

console.log({ datos })


//.....................................................

console.warn('Desestructurando')

const args = [50, 'kardashian', 'kim', true, function () {}]
const [edad, apellido, nombre, empresaria, modelo] = args

const realityShow = {
    edad,
    apellido,
    nombre,
    empresaria,
    modelo,
}

console.log(realityShow)
 */


