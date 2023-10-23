function gerarSenhas() {
  var tamanho = document.getElementById("tamanho").value;
  var quantidade = document.getElementById("quantidade").value;
  var usarEspeciais = document.getElementById("chkEspeciais").checked;
  var usarMaiusculas = document.getElementById("chkMaiusculas").checked;
  var usarNumeros = document.getElementById("chkNumeros").checked;

  var caracteres = "abcdefghijklmnopqrstuvwxyz";
  var especiais = "!@#$%^&*()_+{}[]<>?/|";
  var maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeros = "0123456789";

  var resultados = [];

  for (var i = 0; i < quantidade; i++) {
    var senha = "";
    var caracteresDisponiveis = caracteres;

    if (usarEspeciais) {
      caracteresDisponiveis += especiais;
      senha += especiais[Math.floor(Math.random() * especiais.length)];
    }

    if (usarMaiusculas) {
      caracteresDisponiveis += maiusculas;
      senha += maiusculas[Math.floor(Math.random() * maiusculas.length)];
    }

    if (usarNumeros) {
      caracteresDisponiveis += numeros;
      senha += numeros[Math.floor(Math.random() * numeros.length)];
    }

    while (senha.length < tamanho) {
      senha += caracteresDisponiveis[Math.floor(Math.random() * caracteresDisponiveis.length)];
    }

    resultados.push(senha);
  }

  exibirSenhas(resultados);
}

function exibirSenhas(senhas) {
  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  for (var i = 0; i < senhas.length; i++) {
    var senhaElement = document.createElement("p");
    senhaElement.textContent = senhas[i];
    resultadoDiv.appendChild(senhaElement);
  }
}

function resetarPagina() {
  document.getElementById("tamanho").value = 8;
  document.getElementById("quantidade").value = 1;
  document.getElementById("chkEspeciais").checked = false;
  document.getElementById("chkMaiusculas").checked = false;
  document.getElementById("chkNumeros").checked = false;
  document.getElementById("resultado").innerHTML = "";
}