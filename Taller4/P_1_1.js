function funaleatoria(valor,objeto){
    return  Math.floor(Math.random()*objeto[valor].length)
}

function getLetterRandom(tipo){
    const listaobjetos = [["gato","perro","hormiga"],["Sala,Jardin,Patio"],["Arroz","Pasta","Fruta"],["PC","Celular","Tablet"]];
    
    switch(tipo){
        case 'animal':{
         const aleatorio = funaleatoria(0,listaobjetos)
        return listaobjetos[0] [aleatorio]
    }
        case 'casa':{
        const aleatorio = funaleatoria(1,listaobjetos)
        return listaobjetos[1] [aleatorio]
    } 
    case 'comida':{
        const aleatorio = funaleatoria(2,listaobjetos)
        return listaobjetos[2] [aleatorio]
    }
    case 'cosa':{
        const aleatorio = funaleatoria(3,listaobjetos)
        return listaobjetos[3] [aleatorio]
    }
    

}
}
x= getLetterRandom('tipo')
console.log(x)
