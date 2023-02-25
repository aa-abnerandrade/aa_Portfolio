const inputs = document.querySelectorAll('.input');
console.log(inputs.values);

function validate(inputFull) {
    console.log(inputFull.value);
    let inputContent = inputFull.value;
    if(inputContent == '') {
        inputFull.parentElement.querySelector('.input-mensagem-erro').innerHTML = 'Este campo não está válido'
        console.log("Identificado erro no formulário")
    }
}



inputs.forEach((input)=> {
    input.addEventListener('blur', (e)=> {
        console.log(input.value);
        validate(input);
    });   
})

