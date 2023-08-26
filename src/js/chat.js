import '../css/chat.css';

export default function addRedButton(chat, chatClose) {
  const chatOpen = document.createElement('div');
  const { right, bottom } = chat.getBoundingClientRect();
  chat.style.display = 'none';
  chatOpen.className = 'chat_open';
  chatOpen.style.left = right - 40 + 'px';
  chatOpen.style.top = bottom - 40 + 'px';
  chat.parentElement.insertBefore(chatOpen, chat);
  
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
}
