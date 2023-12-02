const botoesNumericos = document.querySelectorAll('.numero');
const operacoes = document.querySelectorAll('.operacao');
const visor = document.querySelector('.visor_conteudo');
var storage = "";



botoesNumericos.forEach(botao => {
    botao.addEventListener('click', () => {
        if (visor.value==="Erro"){
            visor.value="0"
        }
        visor.value += botao.innerHTML; 
        checarVisor()
    });
});

operacoes.forEach(operacao => {
    operacao.addEventListener('click', () => {
        const idOperacao = operacao.id; 
        switch (idOperacao) {
            case 'soma':
                storage += visor.value + "+"
                visor.value = "0";
                break;

            case 'subtracao':
                storage += visor.value + "-"
                visor.value = "0";
                break;

            case 'divisao':
                storage += visor.value + "/"
                visor.value = "0";
                break;

            case 'multiplicacao':
                storage += visor.value + "*"
                visor.value = "0";
                break;

            case 'ponto':
                if(!((visor.value).includes("."))){
                visor.value+="."
                }
                break;

            case 'apagardel':  
                const valorVisor = visor.value;
                if (valorVisor !== "0"){
                    visor.value = valorVisor.slice(0,-1);
                }

                if (visor.value===""){
                    visor.value="0"
                }
                break;

            case 'resultado':
                calcular()
                break;

            case 'apagarce':
                visor.value =  '0';
                break;

            case 'apagarc':
                storage="";
                visor.value="0";
                break;

            default:
                break;
        }
    });
});

function checarVisor(){
    const valorChecagem =  visor.value;

    if (valorChecagem === "00"){
        visor.value = '0'
    }

    if (valorChecagem >= 2 && valorChecagem[0]==='0' && valorChecagem[1]!=="."){
        visor.value = valorChecagem[1]
    }
    
}

function calcular(){
    const expressao = storage +=visor.value;
    
                try {
                    resultado = eval(expressao);
                    
                    if (isNaN(resultado) || !isFinite(resultado)) {
                        visor.value = 'Erro';
                        storage= ""
                    } else {
                        visor.value = resultado;
                        storage = ""
                    }
                } catch (error) {
                    visor.value = 'Erro';
                }
}

