const refs = {
  body: document.body,
  bntElStart: document.querySelector('button[data-start]'),
  btnElStop: document.querySelector('button[data-stop]'),
};

refs.bntElStart.addEventListener('click', onStart);
refs.btnElStop.addEventListener('click', onStop);
let intervalId = null;

function onStart() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.bntElStart.setAttribute('disabled', true);
  refs.btnElStop.removeAttribute('disabled');
}

function onStop() {
  clearInterval(intervalId);
  refs.bntElStart.removeAttribute('disabled');
  refs.btnElStop.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
