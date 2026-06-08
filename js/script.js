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

  var indiceAtual = 0;                                     
var listaDeslides = document.querySelectorAll('.slide');  
var listaDots = document.querySelectorAll('.dot');     
var timerSlide;                                          

function mostrarSlide(indice) {

  if (indice >= listaDeslides.length) { indice = 0; }
  if (indice < 0) { indice = listaDeslides.length - 1; }

  indiceAtual = indice;

  for (var i = 0; i < listaDeslides.length; i++) {
    listaDeslides[i].classList.remove('ativo');
    listaDots[i].classList.remove('ativo');
  }

  listaDeslides[indiceAtual].classList.add('ativo');
  listaDots[indiceAtual].classList.add('ativo');
}

function mudarSlide(direcao) {
  mostrarSlide(indiceAtual + direcao);
  resetarTimer(); 
}

function irParaSlide(indice) {
  mostrarSlide(indice);
  resetarTimer();
}

function iniciarTimer() {
  timerSlide = setInterval(function () {
    mostrarSlide(indiceAtual + 1);
  }, 5000);
}

function resetarTimer() {
  clearInterval(timerSlide);
  iniciarTimer();
}

iniciarTimer();
  document.querySelector('.tema-' + tema).classList.add('ativo');
}
