// ! Faça uma função que recebe 3 notas de um aluno e cálcula a média dele. 
// ! Ao término do processo, devemos ter a mensagem "a média desse aluno é x", sendo x o resultado do cálculo //

// function calcularMedia () {
    
//     let nota01 = parseFloat(prompt("Nota 01: "))
//     let nota02 = parseFloat(prompt("Nota 02: "))
//     let nota03 = parseFloat(prompt("Nota 03: "))
//     let media = (nota01 + nota02 + nota03 ) / 3

//     return console.log(`A média do aluno é de ${media.toFixed(2)}`)
// }

// calcularMedia()

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------->

// const calcularMedia = () => {
//     let nota01 = parseFloat(prompt("Nota 01: "));
//     let nota02 = parseFloat(prompt("Nota 02: "));
//     let nota03 = parseFloat(prompt("Nota 03: "));
//     let media = (nota01 + nota02 + nota03) / 3;

//     return console.log(`A média do aluno é de ${media.toFixed(2)}`);
// };

// calcularMedia();

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------->

// const calcularMedia = () => console.log(`A média do aluno é de ${((+prompt("Nota 01: ") + +prompt("Nota 02: ") + +prompt("Nota 03: ")) / 3).toFixed(2)}`);

// calcularMedia();

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------->

// (() => console.log((+prompt() + +prompt() + +prompt()) / 3))();

// ! ----------------------------------------------------------------------------------------------------------------------------------------------------------->

// ! Explicando:

// Nesse caso temos uma função 

(() => console.log('A média é: ' + (['Nota 1:', 'Nota 2:', 'Nota 3:'].map(prompt).reduce((a, b) => +a + +b) / 3).toFixed(2)))();

// (() => console.log((['Nota 1:', 'Nota 2:', 'Nota 3:'].map(prompt).reduce((a, b) => +a + +b) / 3).toFixed(2)))();

