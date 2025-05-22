import { header } from './header.js' ;

header();

const appDOM = document.getElementById('app')

appDOM.innerHTML = `
 <div class="board">
        <div class="team">
                <div class="result">0</div>
            <p class="home">NAMAI</p>
            <div class="actions">
                <button>+1</button>
                <button>+2</button>
                <button>+3</button>
            </div>
        </div>
        <div class="team">
              <div class="result">0</div>
            <p class="away">SVECIAI</p>
            <div class="actions">
                <button>+1</button>
                <button>+2</button>
                <button>+3</button>
            </div>
        </div>
    </div>
    <div class="history">
        
    </div>`;

    const [homeResultDOM, awayResultDOM] = appDOM.querySelectorAll('.result');
    const [home1, home2, home3, away1, away2, away3] = appDOM.querySelectorAll('button');
    const historyDOM = appDOM.querySelector('.history');

     let homeScore = 0;
     let awayScore = 0;

    home1.addEventListener('click', () => {
        homeScore += 1;
        homeResultDOM.textContent = homeScore;
        historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry home">Pirma komanda pelne 1 taska.</div>')
    });
        
    home2.addEventListener('click', () => {
        homeScore += 2;
        homeResultDOM.textContent = homeScore;
         historyDOM.insertAdjacentHTML('afterbegin','<div class="entry home">Pirma komanda pelne 2 taskus.</div>')
    });
        
    home3.addEventListener('click', () => {
        homeScore += 3;
        homeResultDOM.textContent = homeScore;
         historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry home">Pirma komanda pelne 3 taskus.</div>')
    });

    away1.addEventListener('click', () =>{
        awayScore += 1;
        awayResultDOM.textContent = awayScore;
        historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry away">Antra komanda pelne 1 taska.</div>')
    });
    
    away2.addEventListener('click', () =>{
        awayScore += 2;
        awayResultDOM.textContent = awayScore;
        historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry away">Antra komanda pelne 2 taskus.</div>')

    });
    
    away3.addEventListener('click', () =>{
        awayScore += 3;
        awayResultDOM.textContent = awayScore;
        historyDOM.insertAdjacentHTML('afterbegin', '<div class="entry away">Antra komanda pelne 3 taskus.</div>')

    });

    
    