//Exercio 1
function criarCalculadora(operador){
    return function (a,b) {
        switch (operador) {
            case '+':
                console.log(a + b);
                break;
            case '*':
                console.log(a * b);
                break;
                return;
            default:
                console.log("Esse operador não faz calculo");
                break;
        }
    }
}

const calculadora = criarCalculadora('+');
calculadora(5,5);


//Exercio 2

//exemplo1
function enviarEmail(destinatario) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('E-mail enviado com sucesso para'[destinatario]);
        }, 2000)
    })
}

async function enviar() {
    console.log('Enviando e-mail para'[destinatario])
    const enviado= await enviarEmail();
    console.log(enviado)
}

//exemplo2
function enviarEmail (destinatario) {
    console.log(`Enviando e-mail para ${destinatario}`);
    // await esperar();
    console.log ('Finalizado')
}

//Exercio 3
