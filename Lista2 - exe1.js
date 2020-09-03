chefe()

function chefe(){

// escopo local
let vendedores = [] 
let vendas = []
let opcao

do {
let opcao = Number(prompt(`Escolha \n [1]. Cadastrar vendedor \n [2]. Cadastrar venda \n [3]. Sair`))
switch(opcao){ 
    case 1: cadastraVendedor(vendedores) 
    break 
    case 2: cadastraVendas(vendas, vendedores) 
    break
    case 3: console.log(`Tchau`)
    default: console.log(`Tente novamente...`)
}
}
while(opcao != 3)
}

function cadastraVendedor(vended){ // vended representa o vetor vendedores
let objeto = new Object()
objeto.codigo = Number(prompt(`Informe o codigo do vendedor`))
objeto.nome = prompt(`Informe o nome do vendedor`)
// verificar se o codigo ja existe 
for(let i = 0; i < vended.length; i++){
    if(vended[i].codigo == objeto.codigo){
        console.log(`Cadastro cancelado! Ja existe um vendedor com o codigo informado!`)
        return 0 // sai da função pois não havera cadastramento 
    }
}
// insere no vended, mas na verdade insere no vetor vendedores 
vended.push(objeto)
}

function cadastraVendas(vdas, vdes){ // vdas representa vetor vendas, vdes representa o vetor vendedores 

    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o codigo da venda`))
    objeto.vendedor = Number(prompt(`Informe o codigo do vendedor`))
    objeto.mes = Number(prompt(`Informe o valor da venda`))
    // verific se o vendedor existe
    // percorrer o vetor de vendedores (vdes)
    for(let i = 0; i < vdes.length; i++)
    if(objeto.vendedor == vdes[i].codigo){// achamos o vendedor
       // verifica se existe venda para este vendedor no mesmo mês - não podemos registrar a venda
       for(let j = 0; j < vdas.length; j++){
           if((objeto.mes == vdas[i].mes) && (objeto.vendedor == vdas[i].vendedor)) 
           console.log(`Não podemos registrar essa venda`)
           return 0 // sai da função 
       }
    } 
// ja percorreu e nao achou, entao vamos inserir 
// insere a venda em vdas, que na verdade é vendas 
    vdas.push(objeto)
    console.log(`Venda nao registrada`)
    return 0 // sai da função 
    }
console.log(`Vendedor não existe`)