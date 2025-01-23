"use strict";
let val1;
let val2;
let res;
let txtRes = document.getElementById("res");
function sumar() {
    val1 = parseFloat(document.getElementById("v1").value);
    val2 = parseFloat(document.getElementById("v2").value);
    if (isNaN(val1) || isNaN(val2))
        txtRes.innerHTML = "Por favor, ingresa ambos valores";
    else
        txtRes.innerHTML = (val1 + val2).toString();
}
function restar() {
    val1 = parseFloat(document.getElementById("v1").value);
    val2 = parseFloat(document.getElementById("v2").value);
    if (isNaN(val1) || isNaN(val2))
        txtRes.innerHTML = "Por favor, ingresa ambos valores";
    else
        txtRes.innerHTML = (val1 - val2).toString();
}
function multiplicar() {
    val1 = parseFloat(document.getElementById("v1").value);
    val2 = parseFloat(document.getElementById("v2").value);
    if (isNaN(val1) || isNaN(val2))
        txtRes.innerHTML = "Por favor, ingresa ambos valores";
    else
        txtRes.innerHTML = (val1 * val2).toString();
}
function dividir() {
    val1 = parseFloat(document.getElementById("v1").value);
    val2 = parseFloat(document.getElementById("v2").value);
    if (isNaN(val1) || isNaN(val2))
        txtRes.innerHTML = "Por favor, ingresa ambos valores";
    else
        txtRes.innerHTML = ((val1 == 0 || val2 == 0) ? "No se puede dividir entre 0" : val1 / val2).toString();
}
