import '../css/collapse.css';

export default function assignCollapseAction(btn, card) {
  card.classList.add('collapse');

  btn.addEventListener('click', () => {
    if (card.offsetHeight > 0) {
      card.classList.remove('collapse_show');
      card.classList.add('collapse_hide');
    } else {
      card.classList.remove('collapse');
      card.classList.add('collapse_show');
    }
  });
  
  card.addEventListener('animationend', (e) => { 
    if (e.animationName === 'rolldown') {
      card.classList.remove('collapse_show');
    } else {
      card.classList.remove('collapse_hide');
      card.classList.add('collapse');
    }
  });
}
