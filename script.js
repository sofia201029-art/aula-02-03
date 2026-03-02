var form = document.getElementById("meuform");
var erro = document.getElementById("mensagem_erro");
var modal = document.getElementById("modal_sucesso");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var codigo = document.getElementById("codigo").value;

    erro.innerHTML = ""; 

    if (nome == "") {
        erro.innerHTML = erro.innerHTML + "Coloca seu nome ai!<br>";
    }

    if (email == "") {
        erro.innerHTML = erro.innerHTML + "Email ta vazio!<br>";
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        erro.innerHTML = erro.innerHTML + "Email errado, coloca @ e . !<br>";
    }

    if (codigo == "") {
        erro.innerHTML = erro.innerHTML + "Faltou o codigo de barras!<br>";
    } else if (codigo.length != 13 || isNaN(codigo)) {
        erro.innerHTML = erro.innerHTML + "Tem que ter exatamente 13 numeros, sem letra!<br>";
    }

    if (erro.innerHTML == "") {
        modal.style.display = "flex";
    }
});

function fechar() {
    modal.style.display = "none";
}

