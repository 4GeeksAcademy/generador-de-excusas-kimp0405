import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let quien = ['Mi novia', 'Mi abuela', 'Mi tio', 'Mi entrenador'];
  let accion = ['destruyó', 'empeñó', 'vendió', 'escoñetó'];
  let queHace = ['mi tarea', 'mis zapatos', 'mi bicicleta'];
  let cuando = ['de camino a Tucupita', 'cuando fui al baño', 'cuando estaba estudiando', 'durante mi almuerzo', 'jugando dominó'];

  function generateExcuse() {
    const quienRandom = quien[Math.floor(Math.random() * quien.length)];
    const accionRandom = accion[Math.floor(Math.random() * accion.length)];
    const queHaceRandom = queHace[Math.floor(Math.random() * queHace.length)];
    const cuandoRandom = cuando[Math.floor(Math.random() * cuando.length)];
    return `${quienRandom} ${accionRandom} ${queHaceRandom} ${cuandoRandom}.`;
  }
  let p = document.querySelector('#excuse');
  p.innerHTML = generateExcuse();

  const imagenes = [
    "https://us.123rf.com/450wm/mancunion55/mancunion551610/mancunion55161000008/69509805-horror-mask-on-black-background-with-copyspace-made-from-sugar-and-salt.jpg",
    "https://wallpapers.com/images/hd/old-skull-on-black-horror-hr8i2zenoeo6mlcj.jpg",
    "https://i.pinimg.com/564x/7d/34/1c/7d341cac09ed774ee83eacfccbc67821.jpg"
  ];
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  const imagenSeleccionada = imagenes[indiceAleatorio];
  document.getElementById("imagen-generada").src = imagenSeleccionada;



};
