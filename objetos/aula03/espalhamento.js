onst cliente = {
    nome: "Xaxá",
    idade: 45,
    email: "xaxa@firma.com",
    telefone: ["4255555444", "42999885544"],
};

cliente.endereco = [
{
    rua: "R. Dr. Orlando Araujo Costa",
    numero: 1931,
    apartamento: true,
    complemento: "ap 934",
},
]

function LigaParacliente(telefonecomercial,telefoneresidencial){
    console.log(`ligando para ${telefonecomercial}`);
    console.log(`${telefoneresidencial}`);

}

LigaParacliente((cliente.telefone[0],cliente.telefone[1]));