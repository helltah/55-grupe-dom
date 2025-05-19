const titleDOM = document.querySelector('title'); 
const h1DOM = document.querySelector('h1');
const title = 'Zuikio darzas';


h1DOM.textContent = title;
h1DOM.style.backgroundColor = 'yellow';
h1DOM.style.fontSize = '2rem';

let time = 0;

function changeTitle() {
    time++
    
    if (time % 2 === 0){
        titleDOM.textContent = `Document (${time})`;
    } else {
    titleDOM.textContent = `${title} (${time})`;
    }
    if (time > 6) {
        clearInterval(timer);
    } 
}

const timer = setInterval(changeTitle, 1000);

const liListDom = document.querySelectorAll('li');
const vegetables = ['pomidoras', 'agurkas', 'svogunas', 'bulve', 'dobiliukas'];

let index = 0;

for (const liDom of liListDom) {
    liDom.textContent = vegetables[index] ? vegetables[index] : 'error';
    if (vegetables[index]){
        liDom.classList.add('zuikio-darzove')
    } else {
        liDom.classList.add('zuikio-darzo-error')
    }
    index++;    
}

