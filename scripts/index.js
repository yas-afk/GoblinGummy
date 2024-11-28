function carregarCatalogo(){
    var produtos = [
        ["images/Goblin.png","Goblin Teste","R$1000,00"],
        ["images/GoblinInvertido.png","Goblin Testessss","R$1000,00"]
    ]
    produtos.forEach(cadaProduto =>{
        document.getElementById('catalogo').innerHTML += `
        <div class ="produto">
            <img src="${cadaProduto[0]}" alt="">
            <h4>${cadaProduto[1]}</h4>
            <h3>${cadaProduto[2]}</h3>

            <button>
                Comprar
                <img src="images/icons/plus-circle.svg" alt="">
            </button>


        </div>
        `
    })
}

carregarCatalogo()

function carregarInfluencers(){
    var influencers = [
        ["/images/influencers/GabiCattuzo.jpg", "Gabi Cattuzzo"],
    ]
    influencers.forEach(cadaInfluencer =>{
        document.querySelector('.carousel-inner').innerHTML += `
        <div class="carousel-item">
            <img src="${cadaInfluencer[0]}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${cadaInfluencer[1]}</h5>
            </div>
        </div>
        `

    })
}

carregarInfluencers()