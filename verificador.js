// Função para verificar as respostas e mostrar o resultado
function verificarRespostas() {
    let pontuacao = 0;

    // Pergunta 1
    let respostaP1 = document.querySelector('input[name="pergunta-1"]:checked').value;
    if (respostaP1 === 'HTML') {
        pontuacao++;
    }

    // Pergunta 2
    let respostaP2 = document.querySelector('input[name="pergunta-2"]').value.toLowerCase();
    if (respostaP2 === 'google.com') {
        pontuacao++;
    }

    // Pergunta 3
    let respostaP3 = document.querySelector('input[name="pergunta-3"]').value;
    if (respostaP3.length >= 8) {
        pontuacao++;
    }

    // Pergunta 4
    let respostaP4 = document.querySelector('input[name="pergunta-4"]').value;
    if (respostaP4 === '1991-01-01') {
        pontuacao++;
    }

    // Pergunta 5
    let respostasP5 = document.querySelectorAll('input[name="pergunta-5"]:checked');
    if (respostasP5.length === 2) {
        let valoresRespostasP5 = Array.from(respostasP5).map(input => input.value);
        if (valoresRespostasP5.includes('JavaScript') && valoresRespostasP5.includes('Java')) {
            pontuacao++;
        }
    }

    // Pergunta 7
    let respostaP7 = document.querySelector('select[name="Pergunta-7"]').value;
    if (respostaP7 === 'type') {
        pontuacao++;
    }

    // Mostrar a pontuação e avaliação
    let resultado = document.createElement('p');
    let mensagem = '';

    if (pontuacao <= 2) {
        mensagem = 'Não desista! Cada tentativa é uma oportunidade de aprender mais.';
    } else if (pontuacao <= 4) {
        mensagem = 'Você ainda precisa melhorar. Estude mais sobre programação.';
    } else if (pontuacao <= 7) {
        mensagem = 'Bom trabalho! Seu conhecimento em programação está satisfatório.';
    } else {
        mensagem = 'Parabéns! Você concluiu o quiz com a maestria de um Engenheiro de Software.';
    }

    resultado.textContent = `Sua pontuação: ${pontuacao}. ${mensagem}`;
    document.body.appendChild(resultado);
}

// Chamar a função para verificar as respostas ao clicar em um botão
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar o envio do formulário
    verificarRespostas();
});
