import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const TIME_CHANGE = 1000;

let currentDate = null;
let selectedDate = null;

const refs = {
  btnStart: document.querySelector('[data-start]'),
  calendar: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.disabled = true;

flatpickr(refs.calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      return window.alert('Please choose a date in the future');
    } else {
      refs.btnStart.disabled = false;
      const setTimer = () => {
        selectedDate = selectedDates[0].getTime();
        timer.start();
      };

      refs.btnStart.addEventListener('click', setTimer);
    }
  },
});

const timer = {
  timeId: null,

  start() {
    this.timeId = setInterval(() => {
      refs.btnStart.disabled = true;
      refs.calendar = true;
      currentDate = Date.now();
      const deltaTime = selectedDate - currentDate;
      const time = this.convertMs(deltaTime);

      if (deltaTime <= 0) {
        this.stop();
        return;
      }

      updateFaceClock(time);
    }, TIME_CHANGE);
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    // Remaining seconds
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  },

  stop() {
    clearInterval(this.timeId);
    refs.btnStart.disabled = true;
    refs.calendar.disabled = false;
    window.alert('Finish');
  },
};

function updateFaceClock({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

// function addLeadingZero(value) {
//   return String(value).padStart(2,0)
// }
