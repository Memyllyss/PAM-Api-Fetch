let url = 'https://fakestoreapi.com/users';

let users = document.getElementById('users');


let resp = await fetch(url);
let dados = await resp.json();


let imagens = [
    'johnWick.jpg',
    'davidBeckham.jpg',
    'kevinho.jpg',
    'donRomer.jpg',
    'derekZabrocki.jpg',
    'david.jpg',
    'miriam.jpg',
    'william.jpg',
    'kate.jpg',
    'jimmy.jpg'

];

for (let i = 0; i < dados.length; i++) {

    let informacoes = document.createElement('div');
    informacoes.classList.add('informacoes');

    let card = document.createElement('div');
    card.classList.add("card");

    let imagem = document.createElement('img');
    imagem.src = './img/' + imagens[i];
    card.appendChild(imagem);

    let id = document.createElement('h2');
    id.textContent = "id: " + dados[i].id;
    informacoes.appendChild(id);

    let titulo = document.createElement('p');
    titulo.textContent = "UserName: " + dados[i].username;
    informacoes.appendChild(titulo);

    let email = document.createElement('p');
    email.textContent = "Email: " + dados[i].email;
    informacoes.appendChild(email);

    let password = document.createElement('p');
    password.textContent = "Senha: " + dados[i].password;
    informacoes.appendChild(password);

    let name = document.createElement('p');
    name.textContent = "Nome: " + dados[i].name.firstname + " " + dados[i].name.lastname;
    informacoes.appendChild(name);

    let telefone = document.createElement('p');
    telefone.textContent = "Telefone: " + dados[i].phone;
    informacoes.appendChild(telefone);

    let endereco = document.createElement('p');
    endereco.textContent = "Endereço: " + dados[i].address.city + " " + dados[i].address.street + " " + dados[i].address.number + " " + dados[i].address.zipcode;
    informacoes.appendChild(endereco);

    let geolocalizacao = document.createElement('p');
    geolocalizacao.textContent = "Geolocalização: " + dados[i].address.geolocation.lat + " " + dados[i].address.geolocation.long;
    informacoes.appendChild(geolocalizacao);



    card.appendChild(imagem);
    card.appendChild(informacoes);
    users.appendChild(card);

}

