function encontrarMaior() {
    let numeros = document.querySelectorAll('.numero');
    let maior = Number(numeros[0].value);

    for (let i = 1; i < numeros.length; i++) {
        let num = Number(numeros[i].value);
        if (num > maior) {
            maior = num;
        }
    }

 
    resultado.innerHTML = `O maior número digitado é: ${maior}`;
}
