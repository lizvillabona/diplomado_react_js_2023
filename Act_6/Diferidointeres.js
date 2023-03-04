// Ejercicio: 
// El Banco Bancolombia ofrece prestamos a sus clientes 
// Tiene una tasa de 3% mensual 
// si realizmos una compra de un television en oferta por un valor de 3'500.000 de pesos,
// con un descuento del 20% pagando con Tc Bancolombia Visa... 
// pero diferimos la deuda a 12 meses 
// cuanto sera el gasto total de la compra? 
// economicamente es rentable realizar la compra?
// en cuantos meses se puede comprar un Tv con las mismas condiciones ahorrando sin usar el credito?

console.log('INICIO')
const valorProducto = 3500000                                   // Valor del producto sin descuento
const descuentoPorcentual = 20                                  // descuento promocion 
const descuentoFinal = valorProducto * (descuentoPorcentual/100)
// const valorPrestamo = valorProducto * (1 - (descuentoPorcentual/100))
const valorPrestamo = valorProducto - descuentoFinal
const tiempoMeses = 24
const tasaInteresMensual = 3

let saldoDeuda = valorPrestamo
let gastoTotalCompra = 0 

// calculando el gasto 
let saldoDiferido = valorPrestamo/tiempoMeses
console.log('valorPrestamo con el descuento realizado', valorPrestamo)
console.log('saldoDiferido', saldoDiferido)

// // mes 1
// let interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// let valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 2
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)

// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)


// // mes 3
// interesMensual = saldoDeuda*tasaInteresMensual/100
// console.log('interesMensual', interesMensual)

// valorCuota = saldoDiferido + interesMensual
// console.log('valorCuota', valorCuota)

// saldoDeuda = saldoDeuda - saldoDiferido
// console.log('saldoDeuda', saldoDeuda)
let totalInteresPagado = 0
for (let index = 0; index < tiempoMeses; index++) {
    // staments operacion que estoy copiando n veses 
    interesMensual = saldoDeuda*tasaInteresMensual/100
    console.log('saldoDiferido', saldoDiferido)
    console.log('interesMensual', interesMensual)
    totalInteresPagado = totalInteresPagado + interesMensual

    valorCuota = saldoDiferido + interesMensual
    console.log('valorCuota', valorCuota)

    saldoDeuda = saldoDeuda - saldoDiferido
    console.log('saldoDeuda', saldoDeuda)
    console.log("")
}
console.log(`Me hicieron un descuento de: ${descuentoFinal} por la compra del T.V`)
console.log(`Al final de este prestamos paguen: ${totalInteresPagado} de intereses`)


console.log('FIN')