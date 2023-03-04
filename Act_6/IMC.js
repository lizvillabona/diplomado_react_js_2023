edad = 25            // años 
var altura = 167         // cm

// - Decimales 
peso = 71          // kg

// estos pueden representar datos de interes para nuestros programas. 


// con estos valores podemos realizar operaciones por ejemplo
imc = peso/((altura/100) * (altura/100))
imc = peso/Math.pow((altura/100), 2)


mensaje = "el IMC es de: " + imc
console.log(mensaje)


// Booleanos
banderaTrue = true
banderaFalse = false

// operaciones de tablas de verdad

//resultado = (banderaTrue && banderaFalse) || banderaFalse
// console.log('resultado', resultado)

if(imc>0&&imc<18.5){
    console.log('INSUFICIENCIA P')
} else if (imc>18.5&&imc<24.9){ 
 console.log('NORMAL')
} else if (imc>=25&&imc<30){
    console.log('PREOBESIDAD')
} else{
    console.log('OBESIDAD')
}