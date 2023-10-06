import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onCreatePromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function onCreatePromise(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;

  let dataDelay = Number(delay.value);
  let dataStep = Number(step.value);
  let dataAmount = Number(amount.value);

  if (dataDelay < 0 || dataStep < 0 || dataAmount <= 0) {
    Notiflix.Notify.warning('Enter a positive number, please');
  } else {
    for (let i = 0; i < dataAmount; i += 1) {
      // dataDelay += dataStep * i;

      // console.log(`i: ${i}`);

      createPromise(i + 1, dataDelay + i * dataStep)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
      event.currentTarget.reset();
    }
  }
}
