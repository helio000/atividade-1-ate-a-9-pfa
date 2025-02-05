function calcularAumento() {
    let nome = document.getElementById('nomeMercadoria').value;
    let preco = Number(document.getElementById('preco').value);
    let novoPreco = 0;

    if (preco < 1000) {
        novoPreco = preco * 1.05;
    } else {
        novoPreco = preco * 1.07;
    }

   
    resultado.innerHTML = `Mercadoria: ${nome} <br> Novo Preço: R$ ${novoPreco.toFixed(2)}`;
}
