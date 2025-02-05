function compararNumeros() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let maior = num1 > num2 ? num1 : num2;
    let menor = num1 < num2 ? num1 : num2;

    resultado.innerHTML = `Maior Número: ${maior} <br> Menor Número: ${menor}`;
}
