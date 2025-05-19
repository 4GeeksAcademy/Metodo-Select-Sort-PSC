import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


/* crear input  */
const container = document.querySelector('.container')
const formulario = document.querySelector('#formulario')
const inputform = document.createElement('input')
const btnDraw = document.createElement('button')
const btnSort = document.createElement('button')


const simbolos = ["♠", "♥", "♦", "♣"]
const valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]


btnDraw.textContent = "Draw"
btnSort.textContent = "Sort"
formulario.textContent = "Cantidad de Cartas:"
formulario.appendChild(inputform)
formulario.appendChild(btnDraw)
formulario.appendChild(btnSort)

btnDraw.addEventListener("click", () => {
  container.innerHTML = ""

  let i = 1

  while (i <= inputform.value) {

    let carta = document.createElement('div')
    let pintaTop = document.createElement('div')
    let number = document.createElement('div')
    let pintaBack = document.createElement('div')
    carta.classList.add('carta')

    let aleatorioSim = simbolos[Math.floor(Math.random() * simbolos.length)];
    pintaTop.innerHTML = aleatorioSim
    pintaBack.innerHTML = aleatorioSim

    let aleatorioNum = valores[Math.floor(Math.random() * valores.length)];
    number.innerHTML = aleatorioNum

    pintaTop.classList.add('pintaTop')
    pintaTop.innerHTML = aleatorioSim
    carta.appendChild(pintaTop)


    number.classList.add('number')
    number.innerHTML = aleatorioNum
    carta.appendChild(number)


    pintaBack.classList.add('pintaBack')
    pintaBack.innerHTML = aleatorioSim
    carta.appendChild(pintaBack)


    if (aleatorioSim == "♥") {
      pintaTop.classList.add("pintaTop")
      pintaBack.classList.add("pintaBack");

    } else if (aleatorioSim == "♦") {
      pintaTop.classList.add("pintaTop")
      pintaBack.classList.add("pintaBack");

    } else if (aleatorioSim == "♠") {
      pintaTop.classList.add("pintaTop")
      pintaBack.classList.add("pintaBack");

    } else {
      pintaTop.classList.add("pintaTop")
      pintaBack.classList.add("pintaBack");
    }

    if (aleatorioNum == "1") {
      carta.innerHTML = "A";
    } else if (aleatorioNum == "11") {
      carta.innerHTML = "J";
    } else if (aleatorioNum == "12") {
      carta.innerHTML = "Q";
    } else if (aleatorioNum == "13") {
      carta.innerHTML = "K";
    } else {
      carta.innerHTML = aleatorioNum;
    }


    container.appendChild(carta);
    if (aleatorioNum === 'A') {
      aleatorioNum = 1;
    } else if (aleatorioNum === 'J') {
      aleatorioNum = 11;
    } else if (aleatorioNum === 'Q') {
      aleatorioNum = 12;
    } else if (aleatorioNum === 'K') {
      aleatorioNum = 13;
    } else {
      carta.innerHTML = aleatorioNum;
    }
  }
}
    btnDraw.addEventListener("click", () => {
      container.innerHTML = "";
      ordenadas.innerHTML = "";
      cartasArray = [];

      const cantidad = parseInt(inputform.value);
      if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingresa un número válido.");
        return;
      }

      for (let i = 0; i < cantidad; i++) {
        const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
        const valor = valores[Math.floor(Math.random() * valores.length)];
        cartasArray.push({ simbolo, valor });
        const cartaHTML = crearCarta(simbolo, valor);
        container.appendChild(cartaHTML);
      }
    });

    btnSort.addEventListener("click", () => {
      ordenadas.innerHTML = ""; // limpiar historial
      let array = [...cartasArray];

      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
          if (valorNumerico(array[j].valor) > valorNumerico(array[j + 1].valor)) {
            // Intercambiar
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;

            // Mostrar paso actual
            const paso = document.createElement("div");
            paso.style.display = "flex";
            paso.style.marginBottom = "10px";

            array.forEach(carta => {
              const cartaHTML = crearCarta(carta.simbolo, carta.valor);
              paso.appendChild(cartaHTML);
            });

            ordenadas.appendChild(paso);
          }
        }
      }
    });

