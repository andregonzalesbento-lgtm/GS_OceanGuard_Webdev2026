// OCEANGUARD — script.js
// Disciplina: Web Development — FIAP 2026
// Equipe: André, Isabella, Nicholas, Richard, Samuel

var todasSecoes = document.querySelectorAll('section[id]');
var todosLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {

  var secaoAtual = '';

  for (var i = 0; i < todasSecoes.length; i++) {
    if (window.scrollY >= todasSecoes[i].offsetTop - 150) {
      secaoAtual = todasSecoes[i].id;
    }
  }

  for (var j = 0; j < todosLinks.length; j++) {
    todosLinks[j].style.color = '';
    if (todosLinks[j].getAttribute('href') === '#' + secaoAtual) {
      todosLinks[j].style.color = 'var(--ciano)';
    }
  }
});

function mudarTema(tema) {

  document.body.classList.remove('tema-verde', 'tema-escuro');

  if (tema === 'verde') {
    document.body.classList.add('tema-verde');
  }
  if (tema === 'escuro') {
    document.body.classList.add('tema-escuro');
  }

  var botoes = document.querySelectorAll('.tema-btn');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove('ativo');
  }
  document.querySelector('.tema-' + tema).classList.add('ativo');
}
