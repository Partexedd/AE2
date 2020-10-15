let ej1 = ["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10];

console.log("Solo texto: "+ej1.filter(function(array) {
    return typeof array === 'string'
}))

console.log("Numeros impares: "+ej1.filter(function(num) {
    return num % 2 == 0;
}))