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
let carta = document.createElement('div')
let pintaTop = document.createElement('div')
let number = document.createElement('div')
let pintaBack = document.createElement('div')

const simbolos = ["♠", "♥", "♦", "♣"]
const valores = ["A",2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"] 


let aleatorioSim = simbolos[Math.floor(Math.random() * simbolos.length)];
pintaTop.innerHTML = aleatorioSim
pintaBack.innerHTML = aleatorioSim

let aleatorioNum = valores[Math.floor(Math.random() * valores.length)];
number.innerHTML = aleatorioNum



btnDraw.textContent = "Draw"
btnSort.textContent = "Sort"
formulario.textContent ="Cantidad de Cartas:"
formulario.appendChild(inputform)
formulario.appendChild(btnDraw)
formulario.appendChild(btnSort)



carta.classList.add('carta') 

pintaTop.classList.add('pintaTop') 
pintaTop.innerHTML = aleatorioSim 
carta.appendChild(pintaTop)


number.classList.add('number') 
number.innerHTML = aleatorioNum 
carta.appendChild(number) 


pintaBack.classList.add('pintaBack') 
pintaBack.innerHTML = aleatorioSim 
carta.appendChild(pintaBack) 

container.appendChild(carta) 

if (aleatorioSim == "♥") {
  pintaTop.classList.add(pintaTop) 
  pintaBack.classList.add(pintaBack);

} else if (aleatorioSim == "♦") {
  pintaTop.classList.add(pintaTop)
  pintaBack.classList.add(pintaBack);

} else if (aleatorioSim == "♠") {
  pintaTop.classList.add(pintaTop)
  pintaBack.classList.add (pintaBack);

} else {
  pintaTop.classList.add(pintaTop)
  pintaBack.classList.add (pintaBack);
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

/*
btnDraw.addEventListener('click', () => {
  container.innerHTML = ''; // Limpia el contenedor
  const cantidad = parseInt(inputform.value);
  console.log(cantidad);
  

  if (!isNaN(cantidad) && cantidad > 0) {
    for (let i = 0; i < cantidad; i++) {
      // Crear carta individual
      const carta = document.createElement('div');
      const pintaTop = document.createElement('div');
      const number = document.createElement('div');
      const pintaBack = document.createElement('div');

      const aleatorioSim = simbolos[Math.floor(Math.random() * simbolos.length)];
      const aleatorioNum = valores[Math.floor(Math.random() * valores.length)];

      pintaTop.classList.add('pintaTop');
      pintaTop.innerHTML = aleatorioSim;

      pintaBack.classList.add('pintaBack');
      pintaBack.innerHTML = aleatorioSim;

      number.classList.add('number');
      number.innerHTML = aleatorioNum;

      carta.classList.add('carta');
      carta.appendChild(pintaTop);
      carta.appendChild(number);
      carta.appendChild(pintaBack);

      // Colorea si es rojo
      if (aleatorioSim === "♥" || aleatorioSim === "♦") {
        pintaTop.classList.add('rojo');
        pintaBack.classList.add('rojo');
        number.classList.add('rojo');
      }

      container.appendChild(carta);
    }
  } else {
    alert("Por favor ingresa un número válido.");
  }
});
*/