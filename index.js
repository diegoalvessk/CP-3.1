//exercicio1
let numero = 6
let arrayTabuada = []
let numeroTabuada = 1
for (let index = 1; index < 30; index += 3 ) {
    arrayTabuada[index - 1] = numero * numeroTabuada
    arrayTabuada[index] = (numero + 1) * numeroTabuada
    arrayTabuada[index + 1] = (numero + 2) * numeroTabuada
    numeroTabuada++
}

console.log(arrayTabuada)

//exercicio2

let numeroDePessoas = [[5,0], [10, 5], [15, 10], [12, 4]]
let quantosFicou = 0

for (let index = 0; index < numeroDePessoas.length; index++) {
    quantosFicou +=  numeroDePessoas[index][0] - numeroDePessoas[index][1]
    console.log(quantosFicou)
}

console.log("Ficou " + quantosFicou + " pessoas no onibus.")

//exercicio3

let arrayBingo = [1, 5, 9, 7, 2, 14, 25, 15, 15, 15]
let deuBingo = 0

for (let index = 0; index < arrayBingo.length; index++) {
    switch (arrayBingo[index]) {
        case 2:
            deuBingo++
            break;

         case 9:
            deuBingo++
            break;

        case 14:
            deuBingo++
            break;

        case 7:
            deuBingo++
            break;  
        
        case 15:
            deuBingo++
            break;
    
        default:
            break;
    }
}

if(deuBingo == 5 || deuBingo>5){
    console.log("GANHOU")
}else{
    console.log("PERDEU")
}

