const primeiraVariavelDoCodigo = 'Primeiro Texto';


function printToConsole () {
    const primeiraVariavelDoCodigo = 'Segundo Texto';
    function segundaFuncao () {
        console.log("Segunda mensagem");

    }
    console.log(primeiraVariavelDoCodigo);
    segundaFuncao();
}

printToConsole();

// Escopo são os limites para os quais aquela informação é válida;