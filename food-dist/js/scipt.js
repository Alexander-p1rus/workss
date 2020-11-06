window.addEventListener("DOMContentLoaded", () => {
  const deadLine = "2020-11-09";

  function addZero(number) {
    if (number < 10) {
      return (number = `0${number}`);
    } else {
      return number;
    }
  }

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date());

    let days = Math.floor(t / 1000 / 60 / 60 / 24);
    let hours = Math.floor((t / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let seconds = Math.floor((t / 1000) % 60);

    return {
      t: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setTimer(selector, endTime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");

    let interval = setInterval(uptade, 1000);

    uptade();
    function uptade() {
      const t = getTimeRemaining(endTime);

      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
      if (t == 0) {
        clearInterval(interval);
      }
    }
  }

  setTimer(".timer", deadLine);
});
//////

class CardMenu {
  constructor(src, nameCard, text, price, parentSelector) {
    this.src = src;
    this.nameCard=nameCard;
    this.text = text;
    this.price = price;
    this.parentSelector = document.querySelector(parentSelector);
  }

  render() {
    const div = document.createElement("div");

    div.innerHTML = `<div class="menu__item">
        <img src=${this.src} alt="vegy">
        <h3 class="menu__item-subtitle">${this.nameCard}</h3>
          <div class="menu__item-descr">${this.text}</div>
          <div class="menu__item-divider"></div>
         <div class="menu__item-price">
         <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>`;
    this.parentSelector.append(div);
  }
}
new CardMenu(
  "img/tabs/vegy.jpg",
  "хуета",
  "однажды в студенную зимнюю пору я из лесу вышел был сильный мороз",
  "2333",
  '.menu__field .container'
).render();
new CardMenu(
  "img/tabs/vegy.jpg",
  "хуета",
  "однажды в студенную зимнюю пору я из лесу вышел был сильный мороз",
  "2333",
  '.menu__field .container'
).render();

