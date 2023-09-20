function valida(formulario) {
    if (formulario.nome.value == "") {
        alert("Preencha o campo Nome");
        formulario.nome.focus();
        certo = false;
    } else if ((formulario.nome.value.length < 3) || (formulario.nome.value.length > 50)) {
        alert("O campo nome deve possuir entre 3 e 50 caracteres");
        formulario.nome.focus();
        certo = false;
    } else if (formulario.email.value == "") {
        alert("Preencha o campo E-mail");
        formulario.email.focus();
        certo = false;
    } else if (!formulario.email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        alert("Digite um endereço de Email valido");
        formulario.email.focus();
        certo = false;
    } else if (formulario.fone.value == "") {
        alert("Preencha o campo Telefone");
        formulario.fone.focus();
        certo = false;
    } else if (isNaN(formulario.fone.value)) {
        alert("O campo Telefone devera conter apenas valores numéricos");
        formulario.fone.focus();
        certo = false;
    } else if ((formulario.fone.value.length < 10) || (formulario.fone.value.length > 11)) {
        alert("O campo Telefone deve possuir entre 10 e 11 caracteres");
        formulario.fone.focus();
        certo = false;
    } else if (formulario.endereco.value == "") {
        alert("Preencha o campo Endereco");
        formulario.endereco.focus();
        certo = false;
    } else {
        certo = true;
    }
}

function envia() {
    if (certo) {
        formulario.submit();
    }
}