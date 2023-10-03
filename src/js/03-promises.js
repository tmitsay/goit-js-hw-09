const form = document.querySelector('.form');

form.addEventListener('click', onCreatePromise);

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

  for (let i = 1; i <= dataAmount; i += 1) {
    dataDelay += dataStep;

    // console.log(`i: ${i}`);

    createPromise(i, dataDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    event.currentTarget.reset();
  }
}
