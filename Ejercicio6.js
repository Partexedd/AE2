let users = ["Ana", "Javi", "Roberto", "Vanessa"];
let blacklisted = ["Vanessa", "Javi"];
let filtro = users.filter(a => !blacklisted.includes(a))
console.log(filtro)