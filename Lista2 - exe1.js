chefe()

function chefe(){

// escopo local
let vendedores = [] 
let vendas = []
let opcao

do {
let opcao = Number(prompt(`Escolha \n [1]. Cadastrar vendedor \n [2]. Cadastrar venda \n [3]. [4].[5]. [6]. Sair`))
switch(opcao){ 
    case 1: cadastraVendedor(vendedores) 
    break 
    case 2: cadastraVendas(vendas, vendedores) 
    break
    case 3: consultaVendasFuncionarioMes(vendas)
    break
    case 4: consultaVendasFuncionario(vendas) 
    break
    case 5: consultaVendedorMes(vendas) 
    break
    case 6: consultaMes(vendas)
    break
    case 7: console.log(`Tchau`)
    default: console.log(`Tente novamente...`)
}
}
while(opcao != 7)
}
function consultaMes(vdas){
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i < vdas.length; i++){
        let posicao = vdas[i].mes - 1 // descubro a posição para colocar 
        meses[posicao] = meses[posicao] + vdas[i].valor // acumula o valor
    } 
    // encontraremos o maior valor vendido 
    let maiorValor = meses[0] // assumo que é janeiro 
    for(let i = 0; i < meses.length; i++){
        if(meses[i] > maiorValor){
            maiorValor = meses[i]
        }
    }
    // encontramos a posição do maior valor vendido 
    letposicao = meses.indexOf(maiorValor)
    console.log(`O mês que mais vendeu foi ${posicao+1}`)
}
function consultaVendedorMes(vdas){
    let mes = Number(prompt(`Informe o mês`))
let maiorVenda = 0 
let vendedorMaisVendeu = 0
for(let i = 0; i < vdas.length; i++){
    if (vdas[i].mes == mes){
        if(vdas[i].valor > maiorVenda)
        maiorVenda = vdas[i].valor
        vendedorMaisVendeu = vdas[i].vendedor
    }
} 
console.log(`O vendedor com mais vendas foi ${vendedorMaisVendeu} e valor ${maiorVenda}`)

function consultasVendasFuncionario(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    // percorre o vetor de vendas
    let soma = 0
    for(let I = 0; i < vdas.length; i++){
        if(vdas[i].vendedor == vendedor){ // encontrei a venda do vendedor naquele mês
            soma = soma + vdas[i].valor
        }
    }
    console.log(`A soma das vendas é ${soma}`)
}

function consultasVendasFuncionarioMes(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`informe o mês da venda`))
    // percorre o vetor de vendas
    for(let I = 0; i < vdas.length; i++){
        if((vdas[i].vendedor == vendedor) && (vdas[i].mes == mes)){ // enocntrei a venda do vendedor naquele mês
            console.log(`Valor da venda ${vdas[i].valor}`)
            return // sai da função
        }
    }
    console.log(`Não existe venda para este funcionario neste mês`)
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