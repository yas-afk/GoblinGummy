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