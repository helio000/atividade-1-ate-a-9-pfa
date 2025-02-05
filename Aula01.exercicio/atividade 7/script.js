function calcularReajuste() {
    let salario = Number(document.getElementById('salarioAtual').value);
    let novoSalario = 0;
    let percentual = 0;

    if (salario >= 1500 && salario < 1750) {
        percentual = 0.15;
    } else if (salario >= 1750 && salario < 2000) {
        percentual = 0.12;
    } else if (salario >= 2000 && salario < 3000) {
        percentual = 0.09;
    } else if (salario >= 3000) {
        percentual = 0.06;
    }

    novoSalario = salario * (1 + percentual);

    resultado.innerHTML = `Reajuste: ${(percentual * 100).toFixed(0)}% <br> Novo Salário: R$ ${novoSalario.toFixed(2)}`;
}
