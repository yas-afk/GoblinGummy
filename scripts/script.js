//menu() para abrir a aba ao clicar no icone de menus

function menuItens(){
    var menu = document.querySelector('#menu')

    if (menu.style.display == 'none'){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }



    // document.querySelector("#botaoMenu").innerHTML = `
    //     <nav style="margin: 0px 1700px;" id="menu">
    //         <a id="menuClicavel" href="#">
    //             <img src="images/icons/house-fill.svg" alt="">
    //             <h3>Home</h3>
    //         </a>
    //         <a id="menuClicavel" href="#">
    //             <img src="images/icons/megaphone-fill.svg" alt="">
    //             <h3>Novidades</h3>
    //         </a>
    //     </nav>
    // `
}

