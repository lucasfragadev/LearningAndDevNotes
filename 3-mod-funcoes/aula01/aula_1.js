const clientes = [];
let contador = 0;

function boasVindas(cliente) {
    contador += 1;
    console.log('------------------------------------');
    console.log(`Olá, ${cliente}, boa noite!`);
    console.log('Pegue aqui sua comanda!');
    console.log('Bom apetite!!!');
    
    const numeroFicha = contador.toString().padStart(3, '0');
    console.log(`Sua ficha é a de número: ${numeroFicha}`);
    
}

function novoCliente() {
    while (true) {
        const cliente = prompt("Insira o nome do cliente:");
                
        if (cliente === "0") {
            break;
        } else if (cliente === '') {
            console.log(`Você não digitou nada.`)
            console.log('Nome inválido.');
        } else if (cliente.length < 4) {
            console.log(`Você digitou ${cliente}.`)
            console.log('Nome inválido. Utilize pelo menos 4 caracteres.');
        } else {
            boasVindas(cliente.toUpperCase());
            clientes.push(cliente);
        }
    }
    
}

novoCliente();