const cliente = {
    nome: "matheus",
    idade: 16,
    email: "matheus@firma.com",
    telefone: ["4255555444","42999885544"],
};

cliente.endereco = [
{
    rua: "R. DR. orlando araujo costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 934",

},
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`a chaves ${chave} tem o valor ${cliente[chave]}`);
    }
}