import assignCollapseAction from './collapse';

const rollBtn = document.querySelector('.roll');
const container = document.querySelector('.container');
const card = container.querySelector('.card');
container.style.left = rollBtn.getBoundingClientRect().left + 'px';
container.style.top = rollBtn.getBoundingClientRect().bottom + 2 + 'px';
assignCollapseAction(rollBtn, card);

import addRedButton from './chat';

const chat = document.querySelector('.chat');
addRedButton(chat, chat.querySelector('.chat_close'));


import createLiker from './liker'

createLiker(document.querySelector('.like'));
