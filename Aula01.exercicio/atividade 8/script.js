function calcularMedia() {
    let notas = document.querySelectorAll('.nota');
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += Number(notas[i].value);
    }

    let media = soma / notas.length;
    let situacao = "";

    if (media >= 6) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    resultado.innerHTML = `Média: ${media.toFixed(2)} <br> Situação: ${situacao}`;
}
