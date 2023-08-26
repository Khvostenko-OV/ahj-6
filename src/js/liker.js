import '../css/liker.css';

export default function crateLiker(liker) {
  liker.addEventListener('click', () => {
    const heart = document.createElement('div');
    heart.className = `heart heart${Math.floor(Math.random()*4)}`;
    liker.appendChild(heart);
    heart.addEventListener('animationend', () => { heart.remove() });
  });
}
