const TIMER = 1000;

const refs = {
  body: document.body,
  bntElStart: document.querySelector('button[data-start]'),
  btnElStop: document.querySelector('button[data-stop]'),
};

refs.bntElStart.addEventListener('click', onStart);
refs.btnElStop.addEventListener('click', onStop);
refs.bntElStop = true;
let intervalId = null;

function onStart() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, TIMER);

  refs.bntElStart.disabled = true;
  refs.btnElStop.disabled = false;

  // refs.bntElStart.setAttribute('disabled', true);
  // refs.btnElStop.removeAttribute('disabled');
}

function onStop() {
  clearInterval(intervalId);
  refs.bntElStart.disabled = false;
  refs.btnElStop.disabled = true;

  // refs.bntElStart.removeAttribute('disabled');
  // refs.btnElStop.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
