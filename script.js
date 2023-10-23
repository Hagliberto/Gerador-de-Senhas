// Função para gerar senhas
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
      senha +=
        caracteresDisponiveis[
          Math.floor(Math.random() * caracteresDisponiveis.length)
        ];
    }

    resultados.push(senha);
  }

  exibirSenhas(resultados);
}

// Função para exibir as senhas geradas
function exibirSenhas(senhas) {
  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  for (var i = 0; i < senhas.length; i++) {
    var senhaContainer = document.createElement("div");
    senhaContainer.className = "senha-container";

    var senhaElement = document.createElement("p");
    senhaElement.textContent = senhas[i];
    senhaContainer.appendChild(senhaElement);

    // Botão de copiar senha
    var copiarBotao = document.createElement("button");
    copiarBotao.textContent = "Copiar";
    copiarBotao.className = "copiar-botao";
    copiarBotao.addEventListener("click", function () {
      var senha = this.parentElement.querySelector("p").textContent;
      copiarSenha(senha);
    });
    senhaContainer.appendChild(copiarBotao);

    resultadoDiv.appendChild(senhaContainer);

    // Adicionar separação entre as senhas geradas
    if (i < senhas.length - 1) {
      var separador = document.createElement("hr");
      resultadoDiv.appendChild(separador);
    }
  }
}

// Função para copiar senha para a área de transferência
function copiarSenha(senha) {
  var textarea = document.createElement("textarea");
  textarea.value = senha;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// Função para resetar os campos
function resetarPagina() {
  document.getElementById("tamanho").value = 8;
  document.getElementById("quantidade").value = 1;
  document.getElementById("chkEspeciais").checked = false;
  document.getElementById("chkMaiusculas").checked = false;
  document.getElementById("chkNumeros").checked = false;
  document.getElementById("resultado").innerHTML = "";
}

// Configuração dos botões após o DOM ser carregado
document.addEventListener("DOMContentLoaded", function () {
  // Configuração do botão "Gerar Senhas"
  document
    .querySelector("button.btn-primary")
    .addEventListener("click", gerarSenhas);

  // Configuração do botão "Sugestão de Senha"
  document
    .querySelector("button.btn-success")
    .addEventListener("click", sugestaoSenha);

  // Configuração do botão "Resetar"
  document
    .querySelector("button.btn-danger")
    .addEventListener("click", resetarPagina);
});
