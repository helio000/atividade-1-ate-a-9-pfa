function calcularDesconto() {
    let peca = document.getElementById('peca').value;
    let preco = Number(document.getElementById('preco').value);
    let desconto = 0;

    if (peca === "camisa") {
        desconto = 0.20;
    } else if (peca === "bermuda") {
        desconto = 0.10;
    } else if (peca === "calca") {
        desconto = 0.15;
    }

    let precoFinal = preco * (1 - desconto);

    resultado.innerHTML = `Peça: ${peca.charAt(0).toUpperCase() + peca.slice(1)} <br> Preço Final: R$ ${precoFinal.toFixed(2)}`;
}
