let lista=["Limon","Aguacate","Cebolla","Vinagre"]
//recorre elemento por elemento y los muestra con alert()
//el atributo i es el elemento actual en cada iteración.
console.log(lista)
//agregamos pato al final de la lista
lista.push("Tomate", "Aji");
console.log(lista)
//ordenar
const orden = lista.sort();
console.log(orden)
//eliminar
var eliminar = orden.splice(3,1);
console.log(eliminar)
console.log(orden)
// reemplazar
const indice= orden.indexOf("Cebolla");
orden[indice]= "Cebollita";
console.log(orden)
console.log('El tamaño del array es:',orden.length)