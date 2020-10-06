// exemplos de JS utilizando a especificação ES5
// vamos aprender
//Array.forEach()
//Array.map()
//Array.filter()
//Array.reduce()
//Array.every()
//Array.some()
//Array.indexOf()
//JSON.parse()
//JSON.stringify()
// Date.now() -> já aprendemos


chefe()

function chefe(){

let vetor = [10,30,50,70,90]

vetor.forEach(funcao)

vetor.forEach(acumula)
// percorrer o vetor


}
// os parametros são somente o elemento
function acumula(elemento){
    conteudo = conteudo + "= " + elemento
}

function funcao(elemento, posicao){
    if(posicao %2 == 0){
    console.log(`O elemento ${elemento} está em posição par`)
}
else {
    console.log(`O elemento ${elemento} está em posição ímpar`)
}
}

// função map

var idades = [10,13,17,18,19,20,22,26]

var novo = idades.map(multiplica)

var novo2 = idades.map(parImpar)

// multiplica(10)
// multiplica(13)
// multiplica(17)
// multiplica(18)
// multiplica(19)
// multiplica(20)
// multiplica(22)
// multiplica(26)

console.log(novo)
console.log(novo2)

function parImpar(elemento){
    if(elemento %2 == 0){
        return 0
    }
    else{
        return 1
    }
}

function multiplica(elemento){
    return elemento * 2 // todos os elemtnos do vetor serão multiplicados por 2
}

var x = function teste(){
    console.log(`Variaveis do tipo de um função`)
}

x()

var soma = function soma(a,b){
    console.log(a + b)
}

soma(3,6)

var subtracao = function (a, b){
    console.log(a - b)
}
subtracao(6,1)

// filter
// reduce
// some