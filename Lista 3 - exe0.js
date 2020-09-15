chefe()

function chefe(){
    // declara a matriz de notas
    let matriz = [] // uma matriz é um vetor 
    // vamos criar o vetor de alunos
    let vetor = [] 
    cadastra(matriz, vetor) // cadastra 3 alunos
    consultaMediaAlunos(matriz) // calcula a média das notas
    calculaMediaProvas(matriz)
    calculaMaiorNotaProva(matriz, vetor)

}
function calculaMaiorNotaProva(mat, vet){
    for(let j = 0; j < 4; j++){
       let  maiorNota = mat[0][j]
        let nomeMaiorNota = vet[0].nome
        for(let i = 0; i < 3; i++){
            if(mat[i][j] > maiorNota){
                maiorNota = mat[i][j]
                nomeMaiorNota = vet[i].nome
            }
        } 
        console.log(`A prova ${j+i} tem a maior nota ${maiorNota} do aluno ${nomeMaiorNota}`)
    }
}

function calculaMediaProvas(mat){
    for(let j = 0; j < 4; j++){
        let media = 0
        for(let i = 0; i < 3; i++){
            media = media + mat[i][j]
        }
    console.log(`A média da prova ${j+1} é ${media/3}`)
    }
}

function cadastra(mat){ // mat representa a matriz na função chefe 
    for(let i = 0; i < 3; i++){ // são 3 alunos
        let objeto = new Object()
        objeto.nome = prompt(`Informe o nome do aluno`)
        objeto.rg = prompt(`Informe o RG do aluno`)
        objeto.media = 0// vamos considerar que no cadastro a média do aluno é 0 
        // insere o objeto em vet
        vet.push(objeto)
        mat[i] = []
        alert(`Informe 4 notas do aluno ${objeto.nome}`)
        for(let j = 0; j < 4; j++){ // São 4 notas
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        } 
    }
}

function consultaMediaAlunos(mat, vet){ // mat representa a matriz na função chefe
    let medias = []
    for(let i = 0; i < 3; i++){ // para cada aluno  
        for(let j = 0; j < 4; j++){ // para cada nota
           // soma no vetor na posição i
           vet[i].media = vet[i].media + mat[i][j] 
        }
        // acabaram as notas do aluno i
        vet[i].media = bet[i].media / 4
    }
    // acabaram os alunos 
    console.log(vet)
}