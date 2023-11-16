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

// generatore elementi in DOM
function generatoreElementiDom (tag, className, content) {
    const elementoDom = document.createElement(tag);
    elementoDom.classList.add(className);
    elementoDom.append(content);
    return elementoDom;
}

// campominato
function campoMinato () {
    console.log(textPlay);
    textPlay.classList.add('d-none');
    console.log('ho cliccato play');
    for(let i = 1; i <= celleLivello1; i++) {
        //invocata funzione (generatore elementi in DOM) in altra funzione
        const myElementDom = generatoreElementiDom('div', 'cella', i);
        boxCelle.append(myElementDom);
        myElementDom.addEventListener('click', 
        function() {
            myElementDom.classList.add('blu')
            console.log(i);
        })
    };
};


//                          OPERATIONS

//Global scope
const celleLivello1 = 100;


// Js e Dom
const gridGame = document.getElementById('bottom-board');

const boxCelle = document.createElement('div');

const playButton = document.querySelector('input.play');

const resetButton = document.querySelector('input.reset');

const textPlay = document.querySelector('.play-text');

boxCelle.classList.add('box-celle','d-flex', 'flex-wrap', 'text-center', 'align-start');

gridGame.append(boxCelle);

playButton.addEventListener('click', campoMinato);
