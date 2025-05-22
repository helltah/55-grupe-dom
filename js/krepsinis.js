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
        <div class="entry home">Pirma komanda pelne 1 taska.</div>
        <div class="entry away">Antra komanda pelne 3 taskus.</div>
    </div>`;

    const [homeResultDOM, awayResultDOM] = appDOM.querySelectorAll('.result');
    const [home1, home2, home3, away1, away2, away3] = appDOM.querySelector('.button');
    const historyDOM = appDOM.querySelector('.history');

     let homeScore = 0;
     let awayScore = 0;

     