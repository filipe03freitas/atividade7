// Pedindo os dados

const login = prompt('Informe o seu login: ');
const senha = prompt('Informe a senha: ');

// Apresentar a resposta

if (login === 'aluno' && senha === '123') {
    alert("Login realizado com sucesso!");

} else if(login === 'professor' && senha === '456'){
    alert("Login realizado com sucesso!");

} else{
    alert("Login ou senha incorretos!");
}