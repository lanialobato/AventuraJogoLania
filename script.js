const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        // Encontra o passo atual ativo
        const atual = document.querySelector('.ativo');
        
        // Pega o ID do próximo passo a partir do atributo 'data-proximo'
        const proximoPassoID = 'passo-' + this.getAttribute('data-proximo');
        
        // Esconde o passo atual
        atual.classList.remove('ativo');
        
        // Mostra o próximo passo
        const proximoPasso = document.getElementById(proximoPassoID);
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
    });
});