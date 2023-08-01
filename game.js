let START = document.querySelector('#STARTbtn');
let body = document.body;
let cards = document.querySelectorAll('.card');
let backs = document.querySelectorAll('.back');
let card, back;

START.addEventListener('click', () => {
    START.style.visibility = 'hidden';
    cards.forEach(card => {
        card.style.position = 'relative';
        card.style.width = '30vmin';
        card.style.height = '45vmin';
        card.style.top = '0%';
    }); 
    backs.forEach(back=> {
        back.style.fontsize = '20vmin';
    });
    body.style.alignItems = 'stretch';
    body.style.justifyContent = 'space-around'
});