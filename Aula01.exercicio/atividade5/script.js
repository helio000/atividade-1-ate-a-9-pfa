function ordenarNumeros() {
    let numeros = document.querySelectorAll('.numero');
    let lista = [];

    for (let i = 0; i < numeros.length; i++) {
        lista.push(Number(numeros[i].value));
    }

    lista.sort((a, b) => a - b);

    resultado.innerHTML = `Números em ordem crescente: ${lista.join(", ")}`;
}
