let url = 'https://fakestoreapi.com/carts';

let carts = document.getElementById('carts');


let resp = await fetch(url);
let dados = await resp.json();




for (let i = 0; i < dados.length; i++) {

    let informacoes = document.createElement('div');
    informacoes.classList.add('informacoes');

    let card = document.createElement('div');
    card.classList.add("card");

    let colId = document.createElement('h2');
    colId.textContent = "id: " + dados[i].id;
    informacoes.appendChild(colId);

    let colUserId = document.createElement('p');
    colUserId.textContent = "userId: " + dados[i].userId;
    informacoes.appendChild(colUserId);

    let colData = document.createElement('p');
    colData.textContent = "data: " + dados[i].date;
    informacoes.appendChild(colData);

    let colProdutos = document.createElement('p');
    colProdutos.textContent = "produtos: " + dados[i].products.map(p => `ID ${p.productId} (qtd: ${p.quantity})`).join(', ');
    informacoes.appendChild(colProdutos);

    card.appendChild(informacoes);
    carts.appendChild(card);

}

