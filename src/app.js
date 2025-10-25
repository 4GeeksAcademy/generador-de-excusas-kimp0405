import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let who = ['Mi novia', 'Mi abuela', 'Mi tio', 'Mi entrenador'];
  let action = ['destruyó', 'empeñó', 'vendió', 'escoñetó'];
  let what = ['mi tarea', 'mis zapatos', 'mi bicicleta'];
  let when = ['de camino a Tucupita', 'cuando fui al baño', 'cuando estaba estudiando', 'durante mi almuerzo', 'jugando dominó'];

  function generateExcuse() {
    const whoRandom = who[Math.floor(Math.random() * who.length)];
    const actionRandom = action[Math.floor(Math.random() * action.length)];
    const whatRandom = what[Math.floor(Math.random() * what.length)];
    const whenRandom = when[Math.floor(Math.random() * when.length)];
    return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}.`;
  }
  let p = document.querySelector('#excuse');
  p.innerHTML = generateExcuse();
};
