import assignCollapseAction from './collapse';

const rollBtn = document.querySelector('.roll');
const container = document.querySelector('.container');
const card = container.querySelector('.card');
container.style.left = rollBtn.getBoundingClientRect().left + 'px';
container.style.top = rollBtn.getBoundingClientRect().bottom + 2 + 'px';
assignCollapseAction(rollBtn, card);

const chat = document.querySelector('.chat');
const chatOpen = document.querySelector('.chat_open');
const chatClose = document.querySelector('.chat_close');
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

import createLiker from './liker'

const likeBtn = document.querySelector('.like');
createLiker(likeBtn);
