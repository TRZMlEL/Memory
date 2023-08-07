let START = document.querySelector('#STARTbtn');
let body = document.body;
let cards = document.querySelectorAll('.card');
let backs = document.querySelectorAll('.back');
let fronts = document.querySelectorAll('.front');
let card, back;
let start = '0';
let WhenCheck = 0;
let randomization = 
[
  '<img draggable="false" alt="Homer Simpson" src="https://www.onthisday.com/images/people/homer-simpson.jpg?w=360"/>1', 
  '<img draggable="false" alt="Homer Simpson" src="https://www.onthisday.com/images/people/homer-simpson.jpg?w=360"/>1', 
  '<img draggable="false" alt="Peter Griffin" src="https://i.etsystatic.com/26158159/r/il/f19358/3615358457/il_1080xN.3615358457_n8dy.jpg"/>2', 
  '<img draggable="false" alt="Peter Griffin" src="https://i.etsystatic.com/26158159/r/il/f19358/3615358457/il_1080xN.3615358457_n8dy.jpg"/>2', 
  '<img draggable="false" alt="Eric Cartman" src="https://static.displate.com/857x1200/displate/2022-01-17/2e415d252369d5c277ce5dd2a9b5a2dc_42afc33ed09c099d45d0282b125e5628.jpg"/>3', 
  '<img draggable="false" alt="Eric Cartman" src="https://static.displate.com/857x1200/displate/2022-01-17/2e415d252369d5c277ce5dd2a9b5a2dc_42afc33ed09c099d45d0282b125e5628.jpg"/>3', 
  '<img draggable="false" alt="Rick Sanchez" src="https://i1.sndcdn.com/avatars-000631834902-vd4fox-t500x500.jpg"/>4', 
  '<img draggable="false" alt="Rick Sanchez" src="https://i1.sndcdn.com/avatars-000631834902-vd4fox-t500x500.jpg"/>4', 
  '<img draggable="false" alt="Stewie Griffin" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/01/stewie-griffin-header.jpg"/>5', 
  '<img draggable="false" alt="Stewie Griffin" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/01/stewie-griffin-header.jpg"/>5'
]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(randomization);
console.log(randomization);

fronts.forEach(front => {
  let firstItem = randomization[0];
  front.innerHTML = firstItem;
  console.log(front);
  randomization.splice(0, 1);
});

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
        card.classList.add("pairFound");
        card.classList.remove("card");
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
  
