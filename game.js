let START = document.querySelector('#STARTbtn');
let body = document.body;
let cards = document.querySelectorAll('.card');
let backs = document.querySelectorAll('.back');
let card, back;
let start = '0';
let WhenCheck = 0;

START.addEventListener('click', () => {
    START.style.visibility = 'hidden';
    cards.forEach(card => {
        card.style.position = 'relative';
        card.style.width = '30vmin';
        card.style.height = '45vmin';
        card.style.top = '0%';
    }); 
    backs.forEach(back=> {
        back.style.fontSize = '5vmin';
    });
    body.style.alignItems = 'stretch';
    start = '1'
});

let content1, content2;

cards.forEach(card => {    
  card.addEventListener('click', () => {
    if (card.style.transform === 'rotateY(180deg)') {
      card.style.transform = 'rotateY(0deg)';
      WhenCheck--;
    } else {
      card.style.transform = 'rotateY(180deg)';
      WhenCheck++;

      if (WhenCheck === 1) {
        content1 = card.textContent.trim();
        console.log(content1);
      } else if (WhenCheck === 2) {
        content2 = card.textContent.trim();
        console.log(content2);

      if (content1 === content2) {
        console.log('working! nice');
      } else {
        cards.forEach(card => {
          console.log('working but different');
          setTimeout(() => {
            card.style.transform = 'rotateY(0deg)';
          }, 500);
        });
      };
        WhenCheck = 0;
      };
    };
  });
});
  
  