let total = 0;
limpar();

function adicionar() {
    let quantidadeDeProdutos = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let preco = valor * quantidadeDeProdutos;

    let listaDeProdutos = document.getElementById('lista-produtos');
    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDeProdutos}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

    total = total + preco;
    let precoTotal = document.getElementById('valor-total');
    precoTotal.textContent = `R$${total}`;
    document.getElementById('quantidade').value = '1';
    

}

function limpar() {
    let botaoLimparClicado = document.querySelector('.botao-form botao-limpar');
    botaoLimparClicado = document.getElementById('lista-produtos').innerHTML = '';
    botaoLimparClicado = document.getElementById('valor-total').textContent = 'R$0';
}