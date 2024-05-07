
let obj = document.getElementById('img');
// console.log(obj);

// obj.onclick = () =>console.log('teste');

let inputEmail = document.getElementById("registration__form__email");
let inputSenha = document.getElementById("registration__form__password");

let ulSorvetes = document.querySelector("#products__presentation");

const sorvetes = [];

const productsShop = [];


fetch("sorvetes.json").then((response) => {
    response.json().then((data) => {
        data.sorvetes.map((sorvete) => {
            sorvetes.push(sorvete);
        })
        renderSorvetes();
    })
});


const openModalInformation = (id) => {

    const modalMoreInformation = document.querySelector(".more__information__modal");

    if(modalMoreInformation.style.display == ''){
        modalMoreInformation.style.display = 'none';
    }
    console.log("Proximo é o resultado do display!")
    console.log(modalMoreInformation.style.display)
    console.log("Valeu!");
    if(modalMoreInformation.style.display == 'none'){
        modalMoreInformation.style.display = 'block';
    } else if(modalMoreInformation.style.display == 'block'){
        modalMoreInformation.style.display = 'none';
    }

    informationProduct(modalMoreInformation, id);
};

const addProductsOnCart = (id) => {
    productsShop.push(sorvetes.find((sorvete) => sorvete.id == id));
    console.log("Entrou!");
    console.log(productsShop);
}

// Renderização dos sorvetes em html

const renderSorvetes = () => {
    sorvetes.map((sorvete) => {
        ulSorvetes.innerHTML += 
            `<li class="ice__cream__product">
                <img class="ice__cream__img" src=${sorvete.imagemURL} alt="sorvete de morango">
                <div onclick="addProductsOnCart(${sorvete.id})" class="information__and__buttonAdd">
                    <div>
                        <button class="button__add__product">Adicionar Ao carrinho</button>
                    </div>
                    <div class="product__card">                        
                        <p>${sorvete.nome}</p>
                        <p>${sorvete.litros}</p>
                        <p onclick="openModalInformation(${sorvete.id})" class="more__information">Saiba mais...</p>
                        <div class="more__information__modal" >
                        </div>
                    </div>
                </div>
            </li>`
    })
}

// Open modal shop

const modalShop = document.querySelector(".modal__shop");
modalShop.style.display = 'none';


const openModal = () => {
    console.log("Valeu!");
    if(modalShop.style.display == 'none'){
        modalShop.style.display = 'block';
    } else if(modalShop.style.display == 'block'){
        modalShop.style.display = 'none';
    }
    renderProductsShop();
};

// Renderização dos sorvetes no carrinho

const renderProductsShop = () => {

    modalShop.innerHTML = '';

    modalShop.innerHTML += 
        `
            <i onclick="closeInformationModalAndShop()"  class="fa-solid fa-circle-xmark icon__information__modal"></i>            
        `;

    productsShop.map((sorvete) => {
        modalShop.innerHTML += 
        `
            <div class="content__modal__shop">
                <img class="modal__shop__img" src=${sorvete.imagemURL} alt="sorvete de morango">
                <p>${sorvete.nome}</p>         
            </div>
        `;
    })

}

const closeInformationModalAndShop = () => {
    modalShop.style.display = 'none';
}

const closeInformationModal = () => {
    const modalMoreInformation = document.querySelector(".more__information__modal");
    modalMoreInformation.style.display = 'none';
};

const informationProduct = (modalMoreInformation, id) => {
    const sorveteSelecionado = sorvetes.find(sorvete => sorvete.id == id )
    console.log('Sorvete selecionado: ' + sorveteSelecionado);
    modalMoreInformation.innerHTML = 
    `
        <div class="information__product">
            <i onclick="closeInformationModal()"  class="fa-solid fa-circle-xmark icon__information__modal"></i>
            <div class="img__information__product">
                <img class="" src=${sorveteSelecionado.imagemURL} alt="sorvete de morango">
            </div>
            <div class="content__information__product">                
                <p id="presentation__name">${sorveteSelecionado.nome}</p><br>  
                <p class="capitular">Conteúdo</P>             
                <p>${sorveteSelecionado.litros}</p><br>
                <p class="capitular">Ingredientes</p>
                <p>${sorveteSelecionado.ingredientes}</p><br>
                <p>Disponível</p> 
                <p class="capitular">${sorveteSelecionado.disponibilidade}</p>                
            </div>
        </div>
    `;
}