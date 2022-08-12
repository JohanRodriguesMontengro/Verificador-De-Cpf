let Continuar = "S"

function cpfOfClient() {
    for(i = 0; i == 0;){
        let cpfOfClient = prompt(`Digite seu cpf!`)
        let confirmação = confirm(`O seu cpf é ${cpfOfClient}. Aguardando confirmação`)
        var cpfFalse0 = 00000000000, cpfFalse1 = 11111111111, cpfFalse2 = 22222222222, cpfFalse3 = 33333333333, cpfFalse4 = 44444444444,cpfFalse5 = 55555555555, cpfFalse6 = 66666666666, cpfFalse7 = 77777777777, cpfFalse8 = 88888888888, cpfFalse9 = 99999999999

        if(isNaN(cpfOfClient) || cpfOfClient.length != 11 || cpfOfClient == cpfFalse0 || cpfOfClient == cpfFalse1 || cpfOfClient == cpfFalse2 ||cpfOfClient == cpfFalse3 ||cpfOfClient == cpfFalse4 || cpfOfClient == cpfFalse5 ||cpfOfClient == cpfFalse6 ||cpfOfClient == cpfFalse7 || cpfOfClient == cpfFalse8 ||cpfOfClient == cpfFalse9) 
        {
            alert(`Insira somente números`)
        } else {
            alert(`Aguarde para verificarmos`)
        }
        if(confirmação == true) {
            i = 1
            return cpfOfClient
        } else {
            alert(`Ok iremos redirecionar o senhor. Para digitar novamente seu cpf`)
        }
    }
}
function Verification() {
    var firstNumber = cpfOfClient[0] * 10 + cpfOfClient[1] * 9 + cpfOfClient[2] * 8 + cpfOfClient[3] * 7 + cpfOfClient[4] * 6 + cpfOfClient[5] * 5 + cpfOfClient[6] * 4 + cpfOfClient[7] * 3 + cpfOfClient[8] * 2

    var firstCalculation = firstNumber * 10 % 11
    firstCalculation = firstCalculation >= 10? firstCalculation = 0: firstCalculation
    
    var secondNumber = cpfOfClient[0] * 11 + cpfOfClient[1] * 10 + cpfOfClient[2] * 9 + cpfOfClient[3] * 8 + cpfOfClient[4] * 7 + cpfOfClient[5] * 6 + cpfOfClient[6] * 5 + cpfOfClient[7] * 4 + cpfOfClient[8] * 3 + firstCalculation * 2
    
    var secondCalculation = secondNumber * 10 % 11
    secondCalculation = secondCalculation >= 10? secondCalculation = 0: secondCalculation

      if(firstCalculation == cpfOfClient[9] && secondCalculation == cpfOfClient[10]) {
      switch(CpfOfClient[8]) {
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
          case 9:
              alert('Seu cpf foi emitido no estado: Paraná ou Santa Catarina')
              break;
          default:
              alert('Seu cpf é falso')
              break;
            }
        }
    }
    while (Continuar == "S") {
        cpfOfClient()
        Verification()
}