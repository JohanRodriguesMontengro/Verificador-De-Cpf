let Continuar = "S"

function cpfOfClient() {
    for(i = 0; i == 0;){
        let cpfOfClient = prompt(`Digite seu cpf!`)
        let confirmação = confirm(`O seu cpf é ${cpfOfClient}. Aguardando confirmação`)
        if(confirmação == true) {
            i = 1
            return cpfOfClient
        } else {
            alert(`Ok iremos redirecionar o senhor. Para digitar novamente seu cpf`)
        }
    }
}
function checkNumbers() {
    let universalCpfFalse = {
        CpfFalse0: 00000000000, 
        CpfFalse1: 11111111111, 
        CpfFalse2: 22222222222, 
        CpfFalse3: 33333333333, 
        CpfFalse4: 44444444444,
        CpfFalse5: 55555555555, 
        CpfFalse6: 66666666666, 
        CpfFalse7: 77777777777, 
        CpfFalse8: 88888888888, 
        CpfFalse9: 99999999999
    }
        if(isNaN(cpfOfClient) || cpfOfClient != 11 || cpfOfClient == universalCpfFalse) {
            alert(`Insira somente números`)
        } else {
            alert(`Aguarde para verificarmos`)
        }
}
function firstVerifier(firstNumber, firstCalculation) {
    firstNumber = cpfOfClient[0] * 10 + CpfOfClient[1] * 9 + CpfOfClient[2] * 8 + CpfOfClient[3] * 7 + CpfOfClient[4] * 6 + CpfOfClient[5] * 5 + CpfOfClient[6] * 4 + CpfOfClient[7] * 3 + CpfOfClient[8] * 2
}

while (Continuar == "S") {

}