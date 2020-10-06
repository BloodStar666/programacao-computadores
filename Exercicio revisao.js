chefe()

function chefe(){
    // declaração da matriz
    let matriz = [] // guarda os pontos dos times nas rodadas
    // declaração do vetor
    let vetor = [] // guarda os nomes, cidades e medias de pontos dos times 
    cadastra(matriz, vetor)
    calculaMediaPontos(matriz, vetor)
    calculaTimeMaisPontosRodada(matriz, vetor)
}
function calculaTimeMaisPontosRodada(mat, vet){
for(let j = 0; j < 3; j++){
    let maisPontos = mat[0][j]
    let nomeTimeMaisPontos = vet[0].nome
    for(leti = 0; i < 4; i++){
        if (mat[i][j] > maisPontos){
            maisPontos = mat[i][j]
            nomeTimeMaisPontos = vet[i].nome
        }
    }
    console.log(`O time ${nomeTimeMaisPontos} fez ${maisPontos} na rodadada ${j+1}`)
}

}

function calculaMediaPontos(mat, vet){
    for(let i = 0; i < 4; i++){ // para cada time
for(let j = 0; j < 3; j++){ // para cada rodada 
vet[i].media = vet[i].media + mat[i]
}
// terminamos de acumular
vet[i].media = vet[i].media / 3
    }
    console.log(vet)
}


function cadastra(mat, vet){
for(let i = 0; i < 4; i++){ // para cada time 
    let objeto = new Object()
    objeto.nome = prompt(`Informe o nome do time`)
    objeto.cidade = prompt(`Informe a cidade do time`)
    objeto.media = 0 // define como 0 
// adiciona no vet
vet.push(objeto)
mat[i] = []
// cria o vetor na matriz
for(let j = 0; j < 3; j++){
    mat[i][j] = Number(prompt(`Informe os pontos do time ${objeto.nome} na rodada ${j+1}`))

}
}

}