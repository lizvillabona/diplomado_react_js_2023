/ Ejercicio
// Realizar un programa que ayude a calcular el indice de masa corporal de un paciente a partir de su peso y altura
// en base a el resultado mostrar un mensaje si la persona se encuentra en peso ideal, sobre peso, u obesidad ver tabla referencia


// operaciones aritmeticas 

// calculo de interes simple
// I = P * i * N
// F = P + I

// F --> Capital Final
// I --> Interes Futuro
// P --> Capital Inicial
// i --> Tasa de Interes
// N --> Tiempo


// calculo de interes compuesto
// F = P (1+i)^N
// F --> Capital Final
// P --> Capital Inicial
// i --> Tasa de Interes
// N --> Tiempo



// Ejercicio: 
// El Banco Bancolombia ofrece un vehiculo de inversion llamado, CDT que es una inversion a n años 
// segun se puedan acomodar los inversionistas, 
// Tiene una tasa del 12 % anual --> 12/100 --> 0.12
// si tenemos un capital de 10'000.000 de pesos 
// y queremos invertir el 50% de nuestros ahorros a un plazo fijo, 3 años
// cuanto serian las ganancias si se negociara la inversion con interes Simple?
// cuanto serian las ganancias si se negociara la inversion con interes Compuesto?

// cual es una inversion mas rentable? y porque? 

const montoAhorro = 10000000                // ahorros en pesos
const invesionSimple = montoAhorro / 2      // inversion en interes simple
const invesionCompuesta = montoAhorro / 2   // inversion en interes compuesto
const tiempo = 3                            // años 
const tasaInteres = 0.12                    // tasa de interes

let gananciaInversionSimple = 0             // Resultado para la inversion con interes simple
let gananciaInversionCompuesta = 0          // Resultado para la inversion con interes compuesto

console.log('INICIO')
console.log('...Calculando Interes Simple... ')
// cacluar el interes generado
// I = P * i * N
const interesGenerado = invesionSimple * tasaInteres * tiempo
console.log('interesGenerado', interesGenerado)

// cacluar el capital final
// F = P + I
gananciaInversionSimple = invesionSimple + interesGenerado
console.log('gananciaInversionSimple', gananciaInversionSimple)


console.log('...Calculando Interes Comuesto... ')
// calculo de interes compuesto
// F = P (1+i)^N
gananciaInversionCompuesta = invesionCompuesta * Math.pow((1 + tasaInteres), tiempo)
console.log('gananciaInversionCompuesta', gananciaInversionCompuesta)

console.log('FIN')


