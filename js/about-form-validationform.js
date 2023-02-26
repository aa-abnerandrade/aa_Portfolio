const inputs = document.querySelectorAll('.input');
console.log(inputs.values);



function validaName(strInputName) {
    const regexName = /^([A-Za-z]\s?){3,20}$/g;
    let checkErrorName = strInputName.match(regexName);

    if(!checkErrorName){
        return 'caracteres inválidos';
    }else{
        return ' ';
    }
}

function validaEmail(strInputEmail) {
    // console.log('validação de email');
    let user = strInputEmail.substring(0, strInputEmail.indexOf("@"));
    let domain = strInputEmail.substring(strInputEmail.indexOf("@")+ 1, strInputEmail.length);
    // console.log(user);
    // console.log(domain);

    if ((user.length >=1) &&
    (domain.length >=3) &&
    (user.search("@")==-1) &&
    (domain.search("@")==-1) &&
    (user.search(" ")==-1) &&
    (domain.search(" ")==-1) &&
    (domain.search(".")!=-1) &&
    (domain.indexOf(".") >=1)&&
    (domain.lastIndexOf(".") < domain.length - 1)) {
        return ' ';
    } else {
        return 'digite um email válido';
    }
}

function validaSubject(strInputSubject) {
    const regexSubject = /^([A-Za-z]\s?){3,20}$/g; 
    let checkErrorSubject = strInputSubject.match(regexSubject);

    if(!checkErrorSubject){
        return 'caracteres inválidos';
    }else{
        return ' ';
    }
}

function validaMessage(strInputMessage) {
    const regexMessage = /^([A-Za-z]\s?){10,240}$/g; 
    let checkErrorMessage = strInputMessage.match(regexMessage);

    if(!checkErrorMessage){
        return 'caracteres inválidos';
    }else{
        return ' ';
    }
}




function validateTotal(inputFull) {
    // console.log(inputFull);
    // console.log(inputFull.name);
    // console.log(inputFull.type);
    let inputContent = inputFull.value;
    let inputName = inputFull.name;

    if(inputContent == '') {
        
        inputFull.parentElement.querySelector('.input-mensagem-erro').innerHTML = `campo ${inputName} não pode estar vazio.`;
        // console.log("Identificado erro no formulário")
    
    } else {
        let responseError;
        switch (inputName) {
            case 'nome':
                responseError = validaName(inputContent);
                break;
            case 'email':
                responseError = validaEmail(inputContent);
                break;
            case 'assunto':
                responseError = validaSubject(inputContent);
                break;
            case 'mensagem':
                responseError = validaMessage(inputContent);
                break;
            default:
                responseError = ' ';
        }
        console.log(responseError);
        inputFull.parentElement.querySelector('.input-mensagem-erro').innerHTML = `${responseError}`;
        console.log("Input aceito no formulário")
    }
}







inputs.forEach((input)=> {
    input.addEventListener('blur', (e)=> {
        console.log(input.value);
        validateTotal(input);
    });   
})

