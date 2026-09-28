const birthday = new Date("2003-05-29T05:00:00");
const el = document.getElementById("age-counter");
const msPerYear = 1000 * 60 * 60 * 24 * 365.2425;

const targetAge = Math.floor((Date.now() - birthday.getTime()) / msPerYear);

let current = 0;
const speed = 0.3; // isompi = nopeampi

function countUp() {
  current += speed;

  if (current >= targetAge) {
    el.textContent = targetAge; // näytä tasaluku lopuksi
    return;                     // stop: ei enää uutta kierrosta
  }

  el.textContent = Math.floor(current);
  requestAnimationFrame(countUp);
}

if (el) countUp();