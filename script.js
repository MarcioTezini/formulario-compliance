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
    let option = document.querySelector('.contato');
    if (select.value == "duvidas") {
        option.classList.add('open');
    }
    else {
        option.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option01 = document.querySelector('.contato1');
    if (select.value == "criticas") {
        option01.classList.add('open');
    }
    else {
        option01.classList.remove('open');
    }
    // campo desvios comportamentais
    var select = document.getElementById('tipo-denuncia');
    let option02 = document.querySelector('.input2');
    let option888 = document.querySelector('.input8');
    let option999 = document.querySelector('.input10');
    if (select.value == "desvios") {
        option02.classList.add('open');
        option888.classList.add('open');
        option999.classList.add('open');


    }
    else {
        option02.classList.remove('open');
        option888.classList.remove('open');
        option999.classList.remove('open');
    }
    
    // campo desvios financeiro
    var select = document.getElementById('tipo-denuncia');
    let option05 = document.querySelector('.input4');
    let option111 = document.querySelector('.input8');
    let option222 = document.querySelector('.input10');
    if (select.value == "desvios-fc") {
        option05.classList.add('open');
        option111.classList.add('open');
        option222.classList.add('open');
    }
    if (select.value == "desvios")( 
        option01
    )
    else {
        option05.classList.remove('open');
        option111.classList.remove('open');
        option222.classList.remove('open');
    }
    // var select = document.getElementById('tipo-denuncia');
    // let option06 = document.querySelector('.input001');
    // if (select.value == "desvios-fc") {
    //     option06.classList.add('open');
    // }
    // else {
    //     option06.classList.remove('open');
    // }
    // var select = document.getElementById('tipo-denuncia');
    // let option07 = document.querySelector('.input003');
    // if (select.value == "desvios-fc") {
    //     option07.classList.add('open');
    // }
    // else {
    //     option07.classList.remove('open');
    // }
    // Fim campo desvios financeiro


    // campo descumprimento
    var select = document.getElementById('tipo-denuncia');
    let option08 = document.querySelector('.input5');
    if (select.value == "descumprimento") {
        option08.classList.add('open');
    }
    else {
        option08.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option09 = document.querySelector('.input004');
    if (select.value == "descumprimento") {
        option09.classList.add('open');
    }
    else {
        option09.classList.remove('open');
    }
    var select = document.getElementById('tipo-denuncia');
    let option10 = document.querySelector('.input006');
    if (select.value == "descumprimento") {
        option10.classList.add('open');
    }
    else {
        option10.classList.remove('open');
    }
    // Fim campo descumprimento

    // campo violacao
    var select = document.getElementById('tipo-denuncia');
    let option11 = document.querySelector('.input7');
    if (select.value == "violacao") {
        option11.classList.add('open');
    }
    else {
        option11.classList.remove('open');
    }

    var select = document.getElementById('tipo-denuncia');
    let option12 = document.querySelector('.input007');
    if (select.value == "violacao") {
        option12.classList.add('open');
    }
    else {
        option12.classList.remove('open');
    }

    var select = document.getElementById('tipo-denuncia');
    let option13 = document.querySelector('.input009');
    if (select.value == "violacao") {
        option13.classList.add('open');
    }
    else {
        option13.classList.remove('open');
    }
    // Fim campo violacao
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
function aparecer4() {
    var select = document.getElementById('outros-ft');
    let option = document.querySelector('.input9');
    if (select.value == "outros-fatos") {
        option.classList.add('open');
    }
    else {
        option.classList.remove('open');
    }
}


