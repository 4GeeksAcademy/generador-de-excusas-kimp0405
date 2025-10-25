import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload= () => {
  const partes = {
    quien: ['Mi novia', 'Mi abuela', 'Mi tío', 'Mi entrenador'],
    accion: ['destruyó', 'empeñó', 'vendió', 'escoñetó'],
    queHace: ['mi tarea', 'mis zapatos', 'mi bicicleta'],
    cuando: ['de camino a Tucupita', 'cuando fui al baño', 'cuando estaba estudiando', 'durante mi almuerzo', 'jugando dominó']
  };

  const excuse = arr => arr[Math.floor(Math.random() * arr.length)];
  document.querySelector('#excuse').textContent =
    `${excuse(partes.quien)} ${excuse(partes.accion)} ${excuse(partes.queHace)} ${excuse(partes.cuando)}.`;

  const imagenes = [
    "https://us.123rf.com/450wm/mancunion55/mancunion551610/mancunion55161000008/69509805-horror-mask-on-black-background-with-copyspace-made-from-sugar-and-salt.jpg",
    "https://wallpapers.com/images/hd/old-skull-on-black-horror-hr8i2zenoeo6mlcj.jpg",
    "https://i.pinimg.com/564x/7d/34/1c/7d341cac09ed774ee83eacfccbc67821.jpg"
  ];
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  const imagenSeleccionada = imagenes[indiceAleatorio];
  document.getElementById("imagen-generada").src = imagenSeleccionada;



};
