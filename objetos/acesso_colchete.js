const cliente = {
    nome: "matheus",
    idade: 15,
    cpf:"1122233345",
    email:"matheus@dominio.com",
};

console.log('o nome do cliente é ${cliente["nome"]}e essa pessoa tem ${cliente["idade"}anos.');

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);

})