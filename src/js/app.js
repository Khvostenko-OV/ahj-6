const roll = document.querySelector('.roll');
const container = document.querySelector('.container');
const collapse = document.querySelector('.collapse');
const rect = collapse.getBoundingClientRect();
//container.style.display = 'none';
container.style.left = roll.getBoundingClientRect().left + 'px';
container.style.top = roll.getBoundingClientRect().bottom + 2 + 'px'

roll.addEventListener('click', () => {
  if (collapse.offsetHeight > 0) {
    collapse.classList.remove('collapse_1');
    collapse.classList.add('collapse_2');
} else {
    collapse.classList.remove('collapse');
    collapse.classList.add('collapse_1');
  }
});

collapse.addEventListener('animationend', (e) => { 
  if (e.animationName == 'rolldown') {
    collapse.classList.remove('collapse_1');
  } else {
    collapse.classList.remove('collapse_2');
    collapse.classList.add('collapse');
  }
});

const chat = document.querySelector('.chat');
const chatOpen = document.querySelector('.chat_open');
const chatClose = document.querySelector('.chat_close');
//const { right, top } = chatOpen.getBoundingClientRect();
chat.style.left = chatOpen.getBoundingClientRect().left + chatOpen.offsetWidth / 2 - 285 + 'px';
chat.style.top = chatOpen.getBoundingClientRect().top + chatOpen.offsetHeight / 2 - 120 + 'px';

chatOpen.addEventListener('click', () => {
  chat.style.display = 'inline-block';
  setTimeout(() => { chatOpen.style.display = 'none'}, 100)
});

chatClose.addEventListener('click', () => {
  chat.style.display = 'none';
  chatOpen.style.display = 'inline-block';
  chatOpen.classList.add('chat_open_open');
  chatOpen.addEventListener('animationend', () => {
    chatOpen.classList.remove('chat_open_open');
  });
});

const liker = document.querySelector('.liker');

liker.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.className = `heart heart${Math.floor(Math.random()*4)}`;
  liker.appendChild(heart);
  heart.addEventListener('animationend', () => { heart.remove() });
});