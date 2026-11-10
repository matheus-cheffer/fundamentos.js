const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados);
console.log(clientesEmString);


console.log(clienteemstring.nome);

const objetocliente = JSON.parse(clientesEmString);

console.log(objetoCliente);