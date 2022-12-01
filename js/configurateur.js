const optionsTissu = [
    { couleur: 'Jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
    { couleur: 'Orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
    { couleur: 'Violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
];
const optionsPoche = [
    { couleur: 'Bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
    { couleur: 'Fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
    { couleur: 'Rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
    { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
];
const couleurText = [
    { couleur: 'Blanc', code: '#FFFFFF' },
    { couleur: 'Noir', code: '#000000' },
    { couleur: 'Bleu', code: '#11119e' },
    { couleur: 'Fuchsia', code: '#991157' },
    { couleur: 'Rouge', code: '#d31431' },
    { couleur: 'vert', code: '#a1cc16' },
    { couleur: 'Jaune', code: '#e2d047' },
    { couleur: 'Orange', code: '#f1722f' }
];
let selectedTissu = 'Jaune';
let selectedPoche = 'Bleu';
let customText = '';
let selectedTextColor = 'Noir';
let textOption = true;
const prixLettre = 1.80;
let prixTissu = 0;
let prixPoche = 0;
let prixTextePerso = 0;
let prixConfig = 0;


window.addEventListener("load", () => {
console.log("everything's ready !");
prixArticle();

})

const titrePrix = document.querySelector('.price');

const textCustom = document.getElementById('customText');
const textColor = document.getElementById('textColorOptions');
const textConfig = document.querySelector('.textePerso');

const blockTissu = document.getElementById('tissu');
const titreTissu = document.getElementById('displayTissu');
const imgTissu = document.getElementById('optionTissuImage');

const blockPoche = document.getElementById('optionPoche');
const titrePoche = document.getElementById('displayPoche')
const imgPoche = document.getElementById('optionPocheImage')




// start Option Tissu

    optionsTissu.forEach(tissu => {

        // console.log(tissu);

        const divTissu = document.createElement('div');
        divTissu.classList.add("colorRound");
        divTissu.style.backgroundColor = tissu.code;
        divTissu.setAttribute("id", "tissu" + tissu.couleur);

        if (selectedTissu == tissu.couleur) {

            divTissu.classList.add("selectedColor");
            titreTissu.textContent = tissu.couleur;
            imgTissu.setAttribute("src", tissu.image);
            prixTissu = tissu.price;
        }
        blockTissu.appendChild(divTissu);

        divTissu.addEventListener('click', event => {
            
            // alert("salut");
           optionsTissu.forEach(tissu => {
                document.getElementById("tissu" + tissu.couleur).classList.remove("selectedColor");
           }) 

           divTissu.classList.add("selectedColor");
            titreTissu.textContent = tissu.couleur;
            imgTissu.setAttribute("src", tissu.image);

            prixTissu = tissu.price;

            // console.log(prixTissu);

            prixArticle();
        })        
    });

    // Start Option poche
 
    optionsPoche.forEach(poche => {

        // console.log(poche);

        const divPoche = document.createElement('div');
        divPoche.classList.add("colorRound");
        divPoche.style.backgroundColor = poche.code;
        divPoche.setAttribute("id", "poche" + poche.couleur);

        if (selectedPoche == poche.couleur) {

            divPoche.classList.add("selectedColor");
            titrePoche.textContent = poche.couleur;
            imgPoche.setAttribute("src", poche.image);
            prixPoche = poche.price;

        }
        blockPoche.appendChild(divPoche);

        const clickPoche = document.getElementById(poche.couleur);

        divPoche.addEventListener('click', event => {
            
            // alert("salut");
           optionsPoche.forEach(poche => {
                document.getElementById("poche" + poche.couleur).classList.remove("selectedColor");
           }) 

           divPoche.classList.add("selectedColor");
            titrePoche.textContent = poche.couleur;
            imgPoche.setAttribute("src", poche.image);

            prixPoche = poche.price;
 
            prixArticle();
        }) 
    });



// start config texte
const textPerso = document.querySelectorAll('[name="useText"]').forEach(radioElement => {
    radioElement.addEventListener("change", event => {
        const activeText = event.target.value;
        // console.log(activeText);

        if (activeText == "false") {
            textCustom.style.display = 'none';
            textColor.style.display = 'none';
            textConfig.style.display = 'none';
            prixTextePerso = 0;
            prixArticle();

        } else if ( activeText == "true") {
            textCustom.style.display = '';
            textColor.style.display = '';
            textConfig.style.display = '';
            textCustom.value = '';
            textConfig.textContent = textCustom.placeholder;

            // console.log(textCustom);
            prixArticle();
        }
    })
})


// Start couleur texte custom

couleurText.forEach(couleur => {

    // console.log(tissu);

    const divTextColor = document.createElement('div');
    divTextColor.classList.add("colorRound");
    divTextColor.style.backgroundColor = couleur.code;
    divTextColor.setAttribute("id","texte" + couleur.couleur);

    if (selectedTextColor == couleur.couleur) {

        divTextColor.classList.add("selectedColor");
        textConfig.style.color = couleur.code;
    }
    textColor.appendChild(divTextColor);

    divTextColor.addEventListener('click', event => {
        
        // alert("salut");
       couleurText.forEach(couleur => {
            document.getElementById("texte" + couleur.couleur).classList.remove("selectedColor");
       }) 

       divTextColor.classList.add("selectedColor");
       textConfig.style.color = couleur.code;
    

    })        
});


textCustom.addEventListener("input", (event) => {
    const nbLetter = event.target.value.length;
    const customText  = event.target.value;

    // console.log(customText);
    // console.log(nbLetter);

    prixTextePerso = nbLetter * prixLettre;

    // console.log(prixTextePerso);
    textConfig.textContent = customText;
    prixArticle();

})


// fonction calcule prix
function prixArticle() {

    prixConfig = prixTissu + prixPoche + prixTextePerso;

    titrePrix.textContent = prixConfig.toFixed(2) + " €";

    // console.log(prixConfig);
};

