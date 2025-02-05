function calculo(){
    let salario = Number(document.getElementById('salario').value);
    let filhos = Number(document.getElementById('filhos').value);
    let salarioFamilia = 0;

    if(salario < 2000)
        salarioFamilia = filhos * 45;

    salario = salario + salarioFamilia;

    resultado.innerHTML = `Salário Familia R$ ${salarioFamilia.toFixed(2)} <br> Salário total R$ ${salario.toFixed(2)}`
}