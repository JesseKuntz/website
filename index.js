const cards = [...document.getElementsByClassName('card')];
const panels = [...document.getElementsByClassName('panel')];
const darkModeCat = document.querySelector('.dark-mode-cat');

function resetCards(currentCard) {
  const otherCards = cards.filter(card => { return card != currentCard })
  otherCards.forEach(otherCard => {
    otherCard.classList.remove('active');
    otherCard.style.height = '240px';
    otherCard.lastElementChild.style.display = 'block';
  });
}

cards.forEach(card => {
  card.addEventListener('click', function () {
    resetCards(card);

    this.classList.toggle('active');
    const fade = card.querySelector('.fade');

    if (card.style.height === '100%') {
      card.style.height = '240px';
      fade.style.display = 'block';
    } else {
      card.style.height = '100%';
      fade.style.display = 'none';
    }

    window.scrollTo({
      'left': 0,
      'top': card.offsetTop - 20
    });
  });
});

function meow() {
  const audio = new Audio('assets/dark-mode/meow.mp3');
  audio.play();
}

darkModeCat.addEventListener('click', () => {
  meow();

  const root = document.documentElement;
  const rootStyles = getComputedStyle(root);

  const darkColor = rootStyles.getPropertyValue('--dark-color');
  const lightColor = rootStyles.getPropertyValue('--light-color');
  const darkModeImage = rootStyles.getPropertyValue('--dark-mode-cat');
  const lightModeImage = rootStyles.getPropertyValue('--light-mode-cat');
  const linkLightColor = rootStyles.getPropertyValue('--link-light-color');
  const linkVisitedLightColor = rootStyles.getPropertyValue('--link-visited-light-color');
  const linkDarkColor = rootStyles.getPropertyValue('--link-dark-color');
  const linkVisitedDarkColor = rootStyles.getPropertyValue('--link-visited-dark-color');

  root.style.setProperty('--dark-color', lightColor);
  root.style.setProperty('--light-color', darkColor);
  root.style.setProperty('--dark-mode-cat', lightModeImage);
  root.style.setProperty('--light-mode-cat', darkModeImage);
  root.style.setProperty('--link-light-color', linkDarkColor);
  root.style.setProperty('--link-visited-light-color', linkVisitedDarkColor);
  root.style.setProperty('--link-dark-color', linkLightColor);
  root.style.setProperty('--link-visited-dark-color', linkVisitedLightColor);
});
