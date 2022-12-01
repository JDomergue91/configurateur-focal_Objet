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
    
});

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

    const tissu = new Configurateur()
})