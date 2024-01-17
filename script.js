function obtenerNumero() {
    let input = prompt("Ingrese un número:");
    return input !== null ? parseInt(input) : null;
  }
  
  function fibonacci(n) {
    let serie = [0, 1];
    for (let i = 2; i < n; i++) {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
  }
  
  function mostrarResultado(serie) {
    document.getElementById('resultado').innerHTML = "<p>Serie de Fibonacci: " + serie.join(", ") + "</p>";
  }
  
  document.getElementById('generarBtn').addEventListener('click', function() {
    const numeroUsuario = obtenerNumero();
  
    if (numeroUsuario !== null && !isNaN(numeroUsuario)) {
      const serieFibonacci = fibonacci(numeroUsuario);
      mostrarResultado(serieFibonacci);
    } else {
      alert("Error: Ingrese un número válido.");
    }
  });
  