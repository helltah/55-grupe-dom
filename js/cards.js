const listDOM = document.querySelector('.list');

const data = [
    {
        imgSrc: '#'
    },
];

for (let i=0; i<10; i++) {
listDOM.innerHTML += `<div class="card">
            <img class="card-img" src="#" alt="">
            <h2 class="card-title">Pavadinimas</h2>
            <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa magnam molestiae provident officiis reiciendis. Aut atque corporis mollitia soluta!</p>
            <a class="card-link" href="#">Read more...</a>
        </div>`;
}

