
chefe ()

function chefe(){
var vetor = [] // declara o vetor 
exe7(vetor) // estamos passando o vetor como parametro 

}

function exe7(vet){ // vet representa o vetor -> o que fizemos com vet, sera feito com o vetor 

var numero = Number(prompt(`Informe um numero`))
do{ 

    // coloca o numero em vet
    vet.push(numero)
    numero = Number(prompt(`Informe outro numero, informe numero negativo para ecnerrar`))
}    
while (numero >= 0) 

}

