function validarBotaoAcessar() {
    const email = document.getElementById('email');
    const senha = document.getElementById('password');
    const entrar = document.getElementById('entrar');

    if (email.value.trim() !== '' && senha.value.trim() !== '') {
        entrar.style.backgroundColor = '#4CAF50'; 
        entrar.classList.add('ativo');
        entrar.disabled = false; 
        entrar.style.cursor = 'pointer'; // Habilita o cursor

    
    } else {
        entrar.style.backgroundColor = '#132c0d67';
        entrar.disabled = true;
        entrar.classList.remove('ativo');
        entrar.style.cursor = 'not-allowed'; // Desabilita o cursor
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    // Encontra os campos de input
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');

    if (emailInput && senhaInput) {
        // Adiciona o "escutador" que chama a função a cada tecla digitada
        emailInput.addEventListener('input', validarBotaoAcessar);
        senhaInput.addEventListener('input', validarBotaoAcessar);
    
        // PARTE 2: CHAMADA INICIAL (assim que a página carrega)
        // Chama a função uma vez para definir o estado inicial do botão
        validarBotaoAcessar();
    }
});