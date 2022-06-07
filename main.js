const Ingredientes =['Harina','Agua','Levadura','tomate','queso','cebolla','jamon','sal','oregano','aceitunas']
let pares = [];
let impares = [];

for (let i = 0; i < Ingredientes.length; i++) {

    if (Ingredientes[i].length % 2 == 0) {
        pares.push(Ingredientes[i])
      } else {
        impares.push(Ingredientes[i])
      }  
      
};
console.log('Los ingredientes pares son: ' + pares)
console.log('Los ingredientes impares son: ' + impares);

for (let i =0; i < 5; i++) {
    console.log (i)
}