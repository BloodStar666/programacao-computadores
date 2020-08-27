chefe()

function chefe(){

    var numero = Number(prompt(`Informe um numero`))
    exe9(numero)
}
function exe9(num){
 
    var soma = 0 
    for(var divisor = num; divisor >= 1; divisor--){
        if (num % divisor == 0){
            soma = soma + divisor 
        }
    }
    console.log(`A soma dos divisores de ${num} é ${soma}`)
}