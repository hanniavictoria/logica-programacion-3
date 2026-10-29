const btn = document.getElementById("btnFactorizar");

btn.addEventListener("click", () => {
    let inputNumero = document.getElementById("numFactorizar");
    let num = Number(inputNumero.value);
    let resultado = factorizar(num);

    document.getElementById("resultado").innerText = "El factorial es: " + resultado;
});

function factorizar(num){
    
    if (num === 0 || num === 1) 
    return 1;

    let resultado = 1;
    
    while (num > 1) { 
        resultado *= num;
        num--;
  }
  return resultado;
}