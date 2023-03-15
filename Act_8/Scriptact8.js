// Calcular areas 
// cuadrado
function calulateAreaCuadrado(lado) {
    return lado*lado
}
function Areatriangulo(base,altura){
    return (base*altura)/2
}

function Areacirculo(radio){
    return (Math.PI*(radio*radio))
}
function getAreacirculo(radio) {
    console.log("")
    console.log(`Hallar el area de un circulo de radio: ${radio}`)
    resultado = Areacirculo(radio)
    console.log(`El resultado es: ${resultado}`)

    return resultado
}
console.log(getAreacirculo(5))
console.log(getAreacirculo(10))


function getAreatriangulo(base, altura) {
    console.log("")
    console.log(`Hallar el area de un triangulo de base: ${base} y altura ${altura}`)
    resultado = Areatriangulo(base,altura)
    console.log(`El resultado es: ${resultado}`)

    return resultado
}
console.log(getAreatriangulo(5,7))
console.log(getAreatriangulo(10,6))



function getAreaCuadrado(lado) {
    console.log("")
    console.log(`Hallar el area de un cuadrado de lado: ${lado}`)
    resultado = calulateAreaCuadrado(lado)
    console.log(`El resultado es: ${resultado}`)

    return resultado
}
console.log(getAreaCuadrado(5))
console.log(getAreaCuadrado(12))