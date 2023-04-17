function denunciashow() {
    let inputon = document.querySelector('.campo-de-denuncia');
    if (inputon.classList.add('open')) {

    }
}
function inputshow() {
    var select = document.getElementById('radio1')
    let inputon = document.querySelector('.nome-email');
    if (select = 'radio1') {
        inputon.classList.add('open');

    }
}

function inputshow2() {
    var select = document.getElementById('radio2')
    let inputon = document.querySelector('.nome-email');
    if (select = 'radio2') {
        inputon.classList.remove('open');

    }
}
function inputshow() {
    var select = document.getElementById('radio3')
    let inputon = document.querySelector('.nome-email');
    if (select = 'radio3') {
        inputon.classList.add('open');

    }
}

function inputshow2() {
    var select = document.getElementById('radio4')
    let inputon = document.querySelector('.nome-email');
    if (select = 'radio4') {
        inputon.classList.remove('open');

    }
}

function inputshow1() {
    let inputon = document.querySelector('.input11');
    if (inputon.classList.contains('open')) {
        inputon.classList.remove('open');

    } else {
        inputon.classList.add('open');
    }
}
function aparecer() {
    var select = document.getElementById('relacaoSup');
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

    var select = document.getElementById('tipoDenuncia');
    let tipodenuncia = document.querySelector('.input2');
    let financeiro = document.querySelector('.input4');
    let politica = document.querySelector('.input5');
    let violation = document.querySelector('.input7');
    let conhecimento = document.querySelector('.input8');
    let campofinal = document.querySelector('.input10');

    if (select.value == "desvios") {
        financeiro.classList.remove('open');
        politica.classList.remove('open');
        violation.classList.remove('open');
        tipodenuncia.classList.add('open');
        conhecimento.classList.add('open');
        campofinal.classList.add('open');
    }

    else if (select.value == "desvios-fc") {
        tipodenuncia.classList.remove('open');
        violation.classList.remove('open');
        politica.classList.remove('open');
        financeiro.classList.add('open');
        conhecimento.classList.add('open');
        campofinal.classList.add('open');
    }

    else if (select.value == "descumprimento") {
        tipodenuncia.classList.remove('open');
        financeiro.classList.remove('open');
        violation.classList.remove('open');
        politica.classList.add('open');
        conhecimento.classList.add('open');
        campofinal.classList.add('open');
    }

    else if (select.value == "violacao") {
        tipodenuncia.classList.remove('open');
        financeiro.classList.remove('open');
        politica.classList.remove('open');
        violation.classList.add('open');
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

    var select = document.getElementById('desvioCop');
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

    var select = document.getElementById('outrosFt');
    let outrosdesv = document.querySelector('.input9');

    if (select.value == "outros-fatos") {
        outrosdesv.classList.add('open');
    }

    else {
        outrosdesv.classList.remove('open');
    }
}
function envioForm() {
    let inputon = document.querySelector('.protocolo');
    if (inputon.classList.contains('open')) {
        inputon.classList.remove('open');

    } else {
        inputon.classList.add('open');
    }
}

// function enviar() {
//     let result = parseInt(document.querySelector('#input-inicial').value);
//     switch (typeof (result)) {
//         case "number":
//             console.log("é numero");

//             break;
//         case "string":
//             console.log("é string");
//             break;

//         default:
//             console.log("nao é numero", typeof (result));
//             break;
//     }
// }

function aceitar() {
    var selectori = document.getElementById('saveCookies')
    let inputon = document.querySelector('.modal-cook');
    if (selectori = 'saveCookies') {
        inputon.classList.add('hide1');

    }
}
function fazerPost(url, body) {
    console.log("Body=",body)
    let request =new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload= function() {
        console.log(this.responseText)
    }

    return request.responseText

}



function denuncia(){

    event.preventDefault();
    let url = "http://127.0.0.1:5000/"
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let relacaoSup = document.getElementById('relacaoSup').value
    let especifique = document.getElementById('especifique').value
    let tipoDenuncia = document.getElementById('tipoDenuncia').value
    let desvioCop = document.getElementById('desvioCop').value
    let especifique2 = document.getElementById('especifique2').value
    let finan = document.getElementById('finan').value
    let descum = document.getElementById('descum').value
    let especifique3 = document.getElementById('especifique3').value
    let  direit = document.getElementById('direit').value
    let  outrosFt = document.getElementById('outrosFt').value
    let especifique4 = document.getElementById('especifique4').value
    let nomes = document.getElementById('nomes').value
    let mensagem = document.getElementById('mensagem').value
    let testemunha = document.getElementById('testemunha').value
    let vitimas = document.getElementById('vitimas').value
    let evidencias = document.getElementById('evidencias').value
    let email2 = document.getElementById('email2').value
 
    console.log(name)
    console.log(email)
    
    body= {
        "name" : name,
        "email" : email,
        "relacaoSup" : relacaoSup,
        "especifique" : especifique,
        "tipoDenuncia" : tipoDenuncia,
        "desvioCop" : desvioCop,
        "especifique2" : especifique2,
        "finan" : finan,
        "descum" : descum,
        "especifique3" : especifique3,
        " direit" :  direit,
        "outrosFt" : outrosFt,
        "especifique4" : especifique4,
        "nomes" : nomes,
        "mensagem" : mensagem,
        "testemunha" : testemunha,
        "vitimas" : vitimas,
        "evidencias" : evidencias,
        "email2" : email2

    }


    fazerPost(url, body)
}


