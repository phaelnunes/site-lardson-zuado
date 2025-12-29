// 1. Selecionamos o botão
var botao = document.getElementById('meuBotao');

// 2. Selecionamos o container que tem a foto e a frase
var surpresa = document.getElementById('conteudoSurpresa');

// 3. Adicionamos o evento de clique
botao.addEventListener('click', function() {
    // Muda o estilo de 'none' (invisível) para 'block' (visível)
    surpresa.style.display = 'block';
    
    // Opcional: Tocar um alerta ou mudar o texto do botão
    botao.innerText = "Surpresa revelada!";
});