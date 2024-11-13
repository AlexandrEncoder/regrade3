//funcionamento de loguin
function verificar(){
    const email = document.getElementById('email-nick');
    const pass = document.getElementById('password')
    if(email.value == 'cristina@gmail.com' && pass.value == 'cR1ss'){
        alert("ok")
    }
    else{
        alert("LOGIN OU SENHA INCORRETA\nTENTE NOVAMENTE")
    }

}

//Funcionamento da regra de 3

function resp(){
    const valueA = document.getElementById('value-A').value;
    const valueB = document.getElementById('value-B').value;
    const valueC = document.getElementById('value-C').value;
    if(valueA != '' && valueB != '' && valueC != ''){
        d = (valueB*valueC)/valueA;
        document.getElementById("result").innerHTML  = d
    }
    else{
        document.getElementById("result").innerHTML  = 'X'
    }

}