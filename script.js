function inputshow() {
    let inputon = document.querySelector('.nome-email');
    if (inputon.classList.contains('open')) {
        inputon.classList.remove('open');

    } else {
        inputon.classList.add('open');
    }
}
function aparecer() {
    var select = document.getElementById('relacao-sup');
    let option = document.querySelector('.input1');
    if (select.value == "outros") {
        option.classList.add('open');
    }
    else {
        option.classList.remove('open');
    }
}
function aparecer1() {
    var select = document.getElementById('tipo-denuncia');
    let option = document.querySelector('.contato1');
    if (select.value == "duvidas") {
        option.classList.add('open');
    }
    else {
        option.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option1 = document.querySelector('.contato');
    if (select.value == "criticas") {
        option1.classList.add('open');
    }
    else {
        option1.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option2 = document.querySelector('.input2');
    if (select.value == "desvios") {
        option2.classList.add('open');
    }
    else {
        option2.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option3 = document.querySelector('.input8');
    if (select.value == "desvios") {
        option3.classList.add('open');
    }
    else {
        option3.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option04 = document.querySelector('.input10');
    if (select.value == "desvios") {
        option04.classList.add('open');
    }
    else {
        option04.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option5 = document.querySelector('.input4');
    if (select.value == "desvios-fc") {
        option5.classList.add('open');
    }
    else {
        option5.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option6 = document.querySelector('.input5');
    if (select.value == "descumprimento") {
        option6.classList.add('open');
    }
    else {
        option6.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option7 = document.querySelector('.input7');
    if (select.value == "violacao") {
        option7.classList.add('open');
    }
    else {
        option7.classList.remove('open');
    }
}
function aparecer2() {
    var select = document.getElementById('desvio-cop');
    let option = document.querySelector('.input3');
    if (select.value == "outros-desvios") {
        option.classList.add('open');
    }
    else {
        option.classList.remove('open');
    }
}
function aparecer3() {
    var select = document.getElementById('descum');
    let option = document.querySelector('.input6');
    if (select.value == "outros-dv-cp") {
        option.classList.add('open');
    }
    else {
        option.classList.remove('open');
    }
}

