function calculaINSS() {
    const salario = parseFloat(document.getElementById('salario').value);
    const resultado = document.getElementById('salarioFinal');

    if (isNaN(salario) || salario <= 0) {
        resultado.innerHTML = '<span class="erro">Por favor, insira um valor válido para o salário.</span>';
        return;
    }

    let desconto = 0;

    // Faixa de descontos
    if (salario <= 1212) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14;
    } else {
        desconto = 7087.22 * 0.14; // Teto de desconto para salários maiores que 7087,22
    }

    const salarioFinal = salario - desconto;

    // Exibe o resultado
    resultado.innerHTML = `
        Desconto de INSS: R$ ${desconto.toFixed(2)} <br>
        Salário Final: R$ ${salarioFinal.toFixed(2)}
    `;
}