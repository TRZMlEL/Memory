let START = document.querySelector('#STARTbtn');
let body = document.body;
let cards = document.querySelectorAll('.card');
let backs = document.querySelectorAll('.back');
let card, back;

let cardClicked = true

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
});

let flippedCards = [];

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Sprawdzenie, czy karta jest już obrócona
    if (flippedCards.includes(card)) {
      // Karta jest już obrócona - cofnij obrót
      card.style.transform = 'rotateY(0deg)';
      // Usuń kartę z listy obróconych kart
      flippedCards = flippedCards.filter(flippedCard => flippedCard !== card);
    } else {
      // Karta nie jest jeszcze obrócona
      if (flippedCards.length < 1) {
        // Obróć kartę tylko jeśli mamy mniej niż dwie obrócone karty
        card.style.transform = 'rotateY(180deg)';
        // Dodaj kartę do listy obróconych kart
        flippedCards.push(card);
      } else {
        // Mamy już dwie obrócone karty - cofnij obrót wszystkich kart i zresetuj listę
        cards.forEach(otherCard => {
          otherCard.style.transform = 'rotateY(0deg)';
        });
        flippedCards = [];
      }
    }
  });
});
  
  
  
  
  