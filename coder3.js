//funcionamento de loguin
function verificar(){
    var email = document.getElementById("email-client");
    var pass = document.getElementById("password-client");
    if(email.value == 'root' && pass.value == "123456"){
        window.location.replace("R3.html")
    }
    else{
        alert("email ou senha incorreto!")
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
