var Continue = "S"

while (Continue == "S") {
    var Verifier = "S"
    while (Verifier == "S") {
        // Pergunta ao cliente qual é o seu Cpf 
        var CpfOfClient = prompt("Informe qual é o seu cpf, para verificarmos", "digite aqui")

        // Cria um variável com alguns cpf falsos conhecidos
        var CpfFalse0 = 00000000000, 
        CpfFalse1 = 11111111111, 
        CpfFalse2 = 22222222222, 
        CpfFalse3 = 33333333333, 
        CpfFalse4 = 44444444444,
        CpfFalse5 = 55555555555, 
        CpfFalse6 = 66666666666, 
        CpfFalse7 = 77777777777, 
        CpfFalse8 = 88888888888, 
        CpfFalse9 = 99999999999

        // Se o cpf do cliente não for números ou se o tamanho não for exatamente 11ou se for um dos cpf falsos conhecidos 
        // ele dá "cpf inválido, digite somente números"
        if(isNaN(CpfOfClient) || CpfOfClient.length != 11 || 
        CpfOfClient == CpfFalse0 || 
        CpfOfClient == CpfFalse1 || 
        CpfOfClient == CpfFalse2 ||
        CpfOfClient == CpfFalse3 ||
        CpfOfClient == CpfFalse4 || 
        CpfOfClient == CpfFalse5 ||
        CpfOfClient == CpfFalse6 ||
        CpfOfClient == CpfFalse7 || 
        CpfOfClient == CpfFalse8 ||
        CpfOfClient == CpfFalse9){
            alert('cpf inválido, digite somente números')
        } else {
            // Caso o if acima não for executado  executa a função abaixo
            Verifier = "N"
            alert('cpf válido, aguarde para verificarmos')
        }
    }
    // Faz o calculo para descobrir o primeiro número depois do "-"
    var VerifierOfFirstNumber = 
    parseInt(CpfOfClient[0]) * 10 + parseInt(CpfOfClient[1]) * 9 +
    parseInt(CpfOfClient[2]) * 8 + parseInt(CpfOfClient[3]) * 7 +
    parseInt(CpfOfClient[4]) * 6 + parseInt(CpfOfClient[5]) * 5 +
    parseInt(CpfOfClient[6]) * 4 + parseInt(CpfOfClient[7]) * 3 +
    parseInt(CpfOfClient[8]) * 2
    var FirstCalculation = (VerifierOfFirstNumber * 10) % 11 // o simbolo "%" significa o RESTO da divisão 
    // Caso o calculo de o resultado de 10 ou maior, nós o consideramos como 0
    if( FirstCalculation >= 10){
        FirstCalculation = 0
    }
    // Faz o calculo para descobrir o segundo número depois do "-"
    var VerifierOfSecondNumber = 
    parseInt(CpfOfClient[0]) * 11 + parseInt(CpfOfClient[1]) * 10 +
    parseInt(CpfOfClient[2]) * 9 + parseInt(CpfOfClient[3]) * 8 +
    parseInt(CpfOfClient[4]) * 7 + parseInt(CpfOfClient[5]) * 6 +
    parseInt(CpfOfClient[6]) * 5 + parseInt(CpfOfClient[7]) * 4 +
    parseInt(CpfOfClient[8]) * 3 + FirstCalculation * 2
    var SecondCalculation = (VerifierOfSecondNumber * 10) % 11 
    // Caso o calculo de o resultado de 10 ou maior, nós o consideramos como 0
    if(SecondCalculation >= 10) {
        SecondCalculation = 0
    }

    // So executa a função abaixo caso o Primeiro Calculo de o resultado igual ao primeiro digito depois do "-" e, 
    // se o segundo calculo der o resultado do segundo número depois do "-"
    if(FirstCalculation == CpfOfClient[9] && SecondCalculation == CpfOfClient[10]){
        alert('Seu cpf é verdadeiro:)')
    
        // Função switch para verificar em qual estado pode ter sido emitido o seu cpf 
        switch(parseInt(CpfOfClient[8])) {
            case 0:
                alert('Seu cpf foi emitido no estado: Rio Grande Do Sul')
                break;
            case 1:
                alert('Seu cpf foi emitido no estado: Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul ou Tocantins')
                break;
            case 2:
                alert('Seu cpf foi emitido no estado: Amazonas, Pará, Roraima, Amapá, Acre ou Rondônia')
                break;
            case 3:
                alert('Seu cpf foi emitido no estado: Ceará, Maranhão ou Piauí')
                break;
            case 4:
                alert('Seu cpf foi emitido no estado: Paraíba, Pernambuco, Alagoas ou Rio Grande do Norte') 
                break;
            case 5:
                alert('Seu cpf foi emitido no estado: Bahia ou Sergipe')
                break;
            case 6:
                alert('Seu cpf foi emitido no estado: Minas Gerais')
                break;
            case 7:
                alert('Seu cpf foi emitido no estado: Rio de Janeiro ou Espírito Santo') 
                break;
            case 8:
                alert('Seu cpf foi emitido no estado: São Paulo')
                break;
            default:
                alert('Seu cpf foi emitido no estado: Paraná ou Santa Catarina')
                break;
        }
    } 
    // Caso não executa a função if acima executa a função abaixo
    else {
        alert('Seu cpf é falso')
    }
    // Pergunta ao o cliente se ele quer validar outro cpf
    Continue = prompt('Deseja verificar mais um cpf? [S]im ou [N]ao', 'Digite em letra maiúscula')
}