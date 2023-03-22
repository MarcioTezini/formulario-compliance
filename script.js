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

// FUNÇÃO TIPO DE DENÚNCIA
function aparecer1() {

    var select = document.getElementById('tipo-denuncia');
    let tipodenuncia = document.querySelector('.input2');
    let financeiro = document.querySelector('.input4');
    let contact = document.querySelector('.contato');
    let politica = document.querySelector('.input5');
    let violation = document.querySelector('.input7');
    let conhecimento = document.querySelector('.input8');
    let campofinal = document.querySelector('.input10');


    if (select.value == "duvidas") {
        financeiro.classList.remove('open');
        tipodenuncia.classList.remove('open');
        conhecimento.classList.remove('open');
        campofinal.classList.remove('open');
        politica.classList.remove('open');
        violation.classList.remove('open');
        contact.classList.add('open');
    }

    else if (select.value == "criticas") {
        financeiro.classList.remove('open');
        tipodenuncia.classList.remove('open');
        conhecimento.classList.remove('open');
        campofinal.classList.remove('open');
        politica.classList.remove('open');
        violation.classList.remove('open');
        contact.classList.add('open');
    }

    else if (select.value == "desvios") {
        contact.classList.remove('open');
        financeiro.classList.remove('open');
        tipodenuncia.classList.add('open');
        conhecimento.classList.add('open');
        campofinal.classList.add('open');
    }

    else if (select.value == "desvios-fc") {
        contact.classList.remove('open');
        tipodenuncia.classList.remove('open');
        financeiro.classList.add('open');
        conhecimento.classList.add('open');
        campofinal.classList.add('open');
    }

    else if (select.value == "descumprimento") {
        contact.classList.remove('open');
        tipodenuncia.classList.remove('open');
        financeiro.classList.remove('open');
        politica.classList.add('open');
        conhecimento.classList.add('open');
        campofinal.classList.add('open');
    }

    else if (select.value == "violacao") {
        contact.classList.remove('open');
        tipodenuncia.classList.remove('open');
        financeiro.classList.remove('open');
        politica.classList.remove('open');
        violation.classList.remove('open');
        conhecimento.classList.add('open');
        campofinal.classList.add('open');
    }

    else {
        financeiro.classList.remove('open');
        tipodenuncia.classList.remove('open');
        conhecimento.classList.remove('open');
        campofinal.classList.remove('open');
        politica.classList.remove('open');
        violation.classList.remove('open');
    }
}
function aparecer2() {

    var select = document.getElementById('desvio-cop');
    let outrosdesv = document.querySelector('.input3');

    if (select.value == "outros-desvios") {
        outrosdesv.classList.add('open');
    }

    else {
        outrosdesv.classList.remove('open');
    }
}
function aparecer3() {

    var select = document.getElementById('descum');
    let outrosdesv = document.querySelector('.input6');

    if (select.value == "outros-dv-cp") {
        outrosdesv.classList.add('open');
    }

    else {
        outrosdesv.classList.remove('open');
    }
}
function aparecer4() {

    var select = document.getElementById('outros-ft');
    let outrosdesv = document.querySelector('.input9');

    if (select.value == "outros-fatos") {
        outrosdesv.classList.add('open');
    }
    
    else {
        outrosdesv.classList.remove('open');
    }
}