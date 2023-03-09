import { descripción } from "./descripcion"
import { caja } from "./caja"
import { cuadrado_1 } from "./caja"


let box_1= document.querySelector(".cuadro_1")
let box_2 = document.querySelector(".cuadro_2")
let box_3 = document.querySelector(".cuadro_3")
let box_4 = document.querySelector(".cuadro_4")

function imprmir_cuadro_1 () {

    data.forEach((element, titulo) => {
    let cuadrado_1 = document.createElement("div");
    caja_1.innerHTML = cuadro_1 (titulo);
    box_1.appendChild(cuadrado_1)
    });

}

function imprmir_cuadro_2 () {
    data.forEach((element, titulo) => {
        let cajax1 = document.createElement("div");
        cuado_1.innerHTML = cuadro_1(titulo);
        box_2.appendChild(cuadrado_1)
    });

}

function imprmir_cuadro_3 () {

    data.forEach((element, función) => {
        let cajax1 = document.createElement("div");
        cuadro_1.innerHTML = cuadro_1(función);
        box_3.appendChild(cuadrado_1)
    });

}

function imprmir_cuadro_4 () {

    data.forEach((element, titulo) => {
        let cajax1 = document.createElement("div");
        cuadro_1.innerHTML = cuadro_1(función);
        box_4.appendChild(cuadrado_1)
    });

}

imprmir_cuadro_1();
imprmir_cuadro_2();
imprmir_cuadro_3();
imprmir_cuadro_4();