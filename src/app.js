import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const formulario = document.querySelector("#formulario")
const container = document.querySelector(".container")

const input = document.createElement("input")
const btnDraw = document.createElement("button")
const btnSort = document.createElement("button")

btnDraw.innerHTML = "Draw"
btnSort.innerHTML = "Sort"
formulario.appendChild(input)
formulario.appendChild(btnDraw)
formulario.appendChild(btnSort)

btnDraw.addEventListener("click", function(){
    alert(input.value)





    
})

btnSort.addEventListener("click", function(){
    alert("botonSort")
})

