var textInput = document.querySelector("#input__texto");
var outImput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "gruth").replace(/i/g, "grubh").replace(/a/g, "grau")
    .replace(/o/g, "doom").replace(/u/g, "tuts");

    document.getElementById('output').innerHTML = '<textarea readonly id"input__texto">' + resultCripto +
    '</textarea>' + '<button class="bnt__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/gruth/g , "e").replace(/grubh/g, "i").replace(/grau/g, "a")
    .replace(/doom/g, "o").replace(/tuts/g, "u");

     document.getElementById('output').innerHTML = '<textarea readonly id"input__texto">' + resultDescripto +
    '</textarea>' + '<button class="bnt__copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar(){
    var textCop = document.getElementById('input__texto');

    textCop.select();
    document.execCommand('copy');

}