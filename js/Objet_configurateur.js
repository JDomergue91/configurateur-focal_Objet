class Configurateur {

    constructor () {

    };

    get getHtml () {

    }

    static prixArticle() {
        prixConfig = prixTissu + prixPoche + prixTextePerso;

        titrePrix.textContent = prixConfig.toFixed(2) + " €";
    }
}