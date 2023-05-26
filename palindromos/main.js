function verificarPalindromo() {
    var palabraInput = document.getElementById("palabra");
    var resultado = document.getElementById("resultado");
  
    if (palabraInput.value === "") {
      resultado.textContent = "Por favor, ingrese una palabra";
      resultado.style.color = "red";
      return;
    }
  
    var palabra = palabraInput.value.toLowerCase().replace(/[^a-z0-9]+/g, "");
    var reversa = palabra.split("").reverse().join("");
  
    if (palabra === reversa) {
      resultado.textContent = 'La palabra "' + palabra + '" es un palíndromo';
      resultado.style.color = "green";
    } else {
      resultado.textContent = 'La palabra "' + palabra + '" no es un palíndromo';
      resultado.style.color = "red";
    }
  }
  