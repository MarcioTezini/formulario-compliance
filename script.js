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
    if (select.value =="outros" ){
        option.classList.add ('open');
    }   
     else {
        option.classList.remove('open');
    }
}
