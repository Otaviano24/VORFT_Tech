//---Scroll---

window.addEventListener("scroll", function(){
    let header = document.querySelector('#main-header-container')
    header.classList.toggle('rolagem', window.scrollY > 200)
})

//----Cart----

const cartItems = [];

function adicionarProduto(produtoId) {
    cartItems.push(produtoId);
    atualizarCarrinho();
}

function mostrarPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    atualizarPopup();
}

function fecharPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function atualizarCarrinho() {
    const cartCount = document.getElementById("cart-items");
    cartCount.textContent = cartItems.length; // Atualiza o número de itens no carrinho
}

function atualizarPopup() {
    const popupList = document.getElementById("popup-items");
    popupList.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Produto ${item}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.onclick = function() {
            removerProduto(item);
        };
        li.appendChild(removeButton);
        popupList.appendChild(li);
    });
}

function removerProduto(produtoId) {
    const index = cartItems.indexOf(produtoId);
    if (index !== -1) {
        cartItems.splice(index, 1);
        atualizarCarrinho();
        atualizarPopup();
    }
}

//----Google_Map-----

function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044}; // Coordenadas iniciais do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 4 // Nível de zoom do mapa
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!' // Título do marcador
    });
}
