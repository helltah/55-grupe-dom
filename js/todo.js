const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');
const listDOM = document.querySelector('.list');

let count = 0;
let deleteCount = 0;

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    listDOM.innerHTML `
        <div class="item">
            <div class="header">
                <div class="index">${++count}</div>
                <button class="btn" type="button">Delete</button>
            </div>
            <div class="content">${inputDOM.value}</div>
        </div>` + listDOM.innerHTML;

    const deleteBtnListDOM = document.querySelectorAll('.btn');

    for (const btnDOM of deleteBtnListDOM) {
        btnDOM.addEventListener('click', () => {
            btnDOM.parentNode.parentNode.remove();
        });
    }


});