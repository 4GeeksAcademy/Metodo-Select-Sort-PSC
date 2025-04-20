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
const carta = document.createElement('div')
const pintaTop = document.createElement('div')
const number = document.createElement('div')
const pintaBack = document.createElement('div')

const simbolos = ["♠", "♥", "♦", "♣"]
const valores = ["A",2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"] 


let aleatorioSim = simbolos[Math.floor(Math.random() * simbolos.length)];
pintaTop.innerHTML = aleatorioSim
pintaBack.innerHTML = aleatorioSim

let aleatorioNum = valores[Math.floor(Math.random() * valores.length)];
number.innerHTML = aleatorioNum


/* Formulario */
btnDraw.textContent = "draw"
btnSort.textContent = "sort"
formulario.appendChild(inputform)
formulario.appendChild(btnDraw)
formulario.appendChild(btnSort)

/* Añadiendo caracteristicas a las cartas */

carta.classList.add('carta') /*en mi clase "carta" añademe lo que este en mi div 'carta' */

pintaTop.classList.add('pintaTop') /* se crea la lista de clases "pintaTop" y se añade la variable 'pintaTop' que es mi div*/
pintaTop.innerHTML = aleatorioSim /*se añade en mi variable pintaTop mi variable aleatorioSim que es el mathrandom creado */
carta.appendChild(pintaTop) /*añade a mi div "carta" la variable resultante del mathrandom que se almacenó en la variable pintaTop */


number.classList.add('number') /* se crea la lista de clases "number" y se añade la variable 'number' que es mi div*/
number.innerHTML = aleatorioNum /*se añade en mi variable pintaTop mi variable aleatorioSim que es el mathrandom creado */
carta.appendChild(number) /*añade a mi div "carta" la variable resultante del mathrandom que se almacenó en la variable number */


pintaBack.classList.add('pintaBack') /* se crea la lista ded clases "pintaBack" y se añade la variable 'pintaBack' que es mi div*/
pintaBack.innerHTML = aleatorioSim /*se añade en mi variable pintaBack mi variable aleatorioSim que es el mathrandom creado */
carta.appendChild(pintaBack) /*añade a mi div "carta" la variable resultante del mathrandom que se almacenó en la variable pintaBack */

container.appendChild(carta) /*añade en mi div 'container' lo que tengo almacenado en mi div 'carta' */

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

btnDraw.addEventListener("click", function() {
  const cardContainer = document.querySelector("container");
  container.innerHTML = ""; // Clear the old cards

  generatedCards = [];
  changeLog = [];

  const quantity = parseInt(number.value);

  for (let i = 0; i < quantity; i++) {
    let card = carta();
    generatedCards.push(card);
  }

  container.innerHTML = ""; // Clear the change log when drawing new cards
});

btnSort.addEventListener("click", function() {
  const sortedCards = bubbleSort(generatedCards);
  changeLog = [];

  for (let i = 0; i < sortedCards.length; i++) {
    let step = sortedCards[i].outerHTML;
    changeLog.push(step);
  }

  displayChangeLog();
});

function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      const currentValue = getValue(arr[i]);
      const nextValue = getValue(arr[i + 1]);

      if (currentValue > nextValue) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;

        // Capture the intermediate step
        const step = arr.map(carta => carta.outerHTML);
        changeLog.push(step);
      }
    }
  } while (swapped);

  return arr;
}

function getValue(carta) {
  const numberElement = carta.querySelector("number");
  const value = numberElement.innerHTML;

  if (value === "A") {
    return 1;
  } else if (value === "J") {
    return 11;
  } else if (value === "Q") {
    return 12;
  } else if (value === "K") {
    return 13;
  } else {
    return parseInt(value);
  }
}

function displayChangeLog() {
  container.innerHTML = "";

  for (let i = 0; i < changeLog.length; i++) {
    const cardEntry = document.createElement("div");
    cardEntry.innerHTML = changeLog[i];
    container.appendChild(cardEntry);
  }
}







/*

if (randomPinta == "♥") {
  carta.classList.add("♥");
} else if (randomPinta == "♦") {
  carta.classList.add("♦");
} else if (randomPinta == "♠") {
  carta.classList.add("♠");
} else {
  carta.classList.add("♣");
}

if (randomNumero == "1") {
  number.innerHTML = "A";
} else if (randomNumero == "11") {
  number.innerHTML = "J";
} else if (randomNumero == "12") {
  number.innerHTML = "Q";
} else if (randomNumero == "13") {
  number.innerHTML = "K";
} else {
  number.innerHTML = randomNumero;
}

pintaTop.innerHTML = randomPinta;
pintaBack.innerHTML = randomPinta;
 
  const Sort = (arrayUnordered) => {
    let arrayPosition = 0;
    while (arrayPosition < arrayUnordered.length - 1) {
      for (let elementPosition = arrayPosition + 1; elementPosition < arrayUnordered.length; i++) {
        if (arrayUnordered[arrayPosition] > arrayUnordered[elementPosition]) {
          let aux = arrayUnordered[arrayPosition];
          arr[arrayPosition] = arrayUnordered[elementPosition];
          arr[elementPosition] = aux;
        }
      }
      arrayPosition++;
    }
    return arrayUnordered;
  };
  console.log("sort"); 



  */