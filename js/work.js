/****************************************************************
FILE JAVASCRIPT

***************************************************************/
'use strict';
// Programma:
// 1- Struttura gioco inizializzata HTML e Css (Header e Footer);
// 2- Griglia: struttura celle innestata con Javascript: rappresentazione 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    /*  <div class="box-celle d-flex flex-wrap text-center align-start">
            <div class="cella">1</div>
            <div class="cella">2</div>
            <div class="cella">3</div>
            <div class="cella">4</div>
            <div class="cella">5</div>
            <div class="cella">6</div>
            <div class="cella">7</div>
            <div class="cella">8</div>
            <div class="cella">9</div>
            <div class="cella">10</div>
            <div class="cella">11</div>
            <div class="cella">12</div>
            <div class="cella">13</div>
            <div class="cella">14</div>
        </div>  */
// - Se gamer clicca su bottonePlay allora campoMinato add classe active;
// - Se gamer clicca su cellaCampo, allora cellaCampo cambia colore (azzurro) + stampo in console numero cellaCampo su cui ho cliccato.


//                          FUNCTIONS
//funzione per creare elementi in DOM (tag, className, content)
function generatoreElementiDom (tag, className, content) {

    const elementoDom = document.createElement(tag);
    elementoDom.classList.add(className);
    elementoDom.append(content);
    return elementoDom;
}

//funzione per innesto di creazione della tavola gioco al click, perchè in operations viene richiamata la funzione in evento
function campoMinato () {
    console.log(textPlay);
    textPlay.classList.add('d-none');

    // controllo che clicco
    console.log('ho cliccato play');
    // creo ciclo for in cui richiarmo la fuzione per la creazione degli elementi cella
    for(let i = 1; i <= celleLivello1; i++) {
        // invoco la funzione generatoreElementiDom con argomenti
        const myElementDom = generatoreElementiDom('div', 'cella', i);




        // appendo all'elemento box contenitore in DOM i miei elementi cella creati
        boxCelle.append(myElementDom);
        };
};


//                          OPERATIONS

// Js e Dom
// dichiaro e assegno valore a variabile di appoggio in DOM per griglia
const gridGame = document.getElementById('bottom-board');
// dichiaro e assegno valore a variabile di box contenitore della griglia
const boxCelle = document.createElement('div');
// attribuisco le classi che ho in CSS all'elemento box contentiore della griglia
boxCelle.classList.add('box-celle','d-flex', 'flex-wrap', 'text-center', 'align-start');
// controllo che vengano attribuite le classi
console.log(boxCelle);
// appendo il box contenitore della griglia all'elemento già presente in DOM
gridGame.append(boxCelle);
// dichiaro e assegno valore a variabile per l'elemento bottonePlay
const elementButtonActive = document.querySelector('input.btn');
console.log(elementButtonActive);

// text-play
const textPlay = document.querySelector('.play-text');

// costante a scopo globale per indicare un livello (in previsione di altri livelli)
const celleLivello1 = 100;

// click su bottone, avvia anche la funzione perchè richiamata senza parentesi, quindi rieseguita (inception)
elementButtonActive.addEventListener('click', campoMinato);

- 
-
-