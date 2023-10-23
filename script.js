function gerarSenhas() {
    var tamanho = document.getElementById("tamanho").value;
    var quantidade = document.getElementById("quantidade").value;
    var resultado = document.getElementById("resultado");
    
    resultado.innerHTML = "";
    
    for (var i = 0; i < quantidade; i++) {
      var senha = "";
      var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      
      for (var j = 0; j < tamanho; j++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
      }
      
      var senhaElemento = document.createElement("p");
      senhaElemento.textContent = senha;
      resultado.appendChild(senhaElemento);
    }
  }

  function resetarPagina() {
    location.reload();
  }