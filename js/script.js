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

var perguntas = [
  {
    pergunta: 'Qual porcentagem da superfície da Terra é coberta pelos oceanos?',
    opcoes: ['50%', '61%', '71%', '85%'],
    correta: 2,
    explicacao: 'Os oceanos cobrem cerca de 71% da superfície terrestre, sendo essenciais para o clima e a vida.'
  },
  {
    pergunta: 'Qual é o oceano mais profundo do mundo?',
    opcoes: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Ártico', 'Oceano Pacífico'],
    correta: 3,
    explicacao: 'O Oceano Pacífico é o mais profundo — a Fossa das Marianas tem cerca de 11.000 metros.'
  },
  {
    pergunta: 'Qual tecnologia o OceanGuard usa para detectar manchas de óleo?',
    opcoes: ['GPS convencional', 'Radar SAR Orbital', 'Câmeras subaquáticas', 'Drones aéreos'],
    correta: 1,
    explicacao: 'O Radar de Abertura Sintética (SAR) consegue detectar manchas de óleo mesmo à noite ou com nuvens.'
  },
  {
    pergunta: 'Quanto dos recifes de coral estão ameaçados de destruição?',
    opcoes: ['Menos de 10%', 'Cerca de 30%', 'Mais de 50%', 'Praticamente 100%'],
    correta: 2,
    explicacao: 'Mais de 50% dos recifes de coral estão ameaçados por aquecimento, poluição e acidificação.'
  },
  {
    pergunta: 'Qual satélite da NASA fornece dados oceânicos para o OceanGuard?',
    opcoes: ['Hubble', 'James Webb', 'CYGNSS', 'Voyager'],
    correta: 2,
    explicacao:'O NASA CYGNSS monitora condições da superfície oceânica e é uma fonte-chave de dados.'
  },
  {
    pergunta: 'O que é ciência cidadã no OceanGuard?',
    opcoes: [
      'Pesquisa feita só por cientistas',
      'Pescadores e cidadãos registrando ocorrências',
      'Monitoramento automatizado por IA',
      'Dados coletados por governos'],
    correta: 1,
    explicacao: 'Ciência cidadã é quando qualquer pessoa contribui com dados para a ciência — como um pescador registrando poluição.'
  },
  {
    pergunta: 'Qual a principal causa do branqueamento de corais?',
    opcoes: ['Pesca predatória', 'Aumento da temperatura da água', 'Excesso de chuva', 'Marés altas'],
    correta: 1,
    explicacao: 'O calor faz os corais expulsarem as algas que vivem neles, causando o branqueamento e podendo matá-los.'
  },
  {
    pergunta: 'Quantas pessoas vivem a menos de 10 km da costa?',
    opcoes: ['100 milhões', '300 milhões', '600 milhões', '1 bilhão'],
    correta: 2,
    explicacao: 'Cerca de 600 milhões de pessoas vivem em zonas costeiras e dependem diretamente do oceano.'
  },
  {
    pergunta: 'O que significa Edge Computing no contexto do OceanGuard?',
    opcoes: [
      'Processamento na nuvem centralizada',
      'Processamento próximo à origem dos dados, como boias',
      'Tecnologia de tela de celular',
      'Um tipo de inteligência artificial'
    ],
    correta: 1,
    explicacao: 'Edge Computing processa os dados perto de onde eles são coletados, reduzindo o tempo de resposta.'
  },
  {
    pergunta: 'Qual agência europeia fornece dados de satélite para o OceanGuard?',
    opcoes: ['NASA', 'JAXA', 'ESA', 'INPE'],
    correta: 2,
    explicacao: 'A ESA (Agência Espacial Europeia) disponibiliza dados do programa Copernicus para monitoramento ambiental.'
  }
];

var numeroPerguntaAtual = 0;
var totalAcertos = 0;
var jaRespondeu = false;

function iniciarQuiz() {
  numeroPerguntaAtual = 0;
  totalAcertos = 0;
  jaRespondeu = false;

  document.getElementById('quiz-resultado').style.display = 'none';
  document.getElementById('quiz-pergunta-area').style.display = 'block';

  mostrarPergunta();
}

function mostrarPergunta() {
  jaRespondeu = false;

  var dadosPergunta = perguntas[numeroPerguntaAtual];

  document.getElementById('quiz-pergunta').textContent = dadosPergunta.pergunta;
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-proximo').style.display = 'none';
  document.getElementById('quiz-contador').textContent =
    'Pergunta ' + (numeroPerguntaAtual + 1) + ' de ' + perguntas.length;

  var porcentagem = ((numeroPerguntaAtual + 1) / perguntas.length) * 100;
  document.getElementById('quiz-barra').style.width = porcentagem + '%';

  var divOpcoes = document.getElementById('quiz-opcoes');
  divOpcoes.innerHTML = ''; 

  for (var i = 0; i < dadosPergunta.opcoes.length; i++) {
    var botao = document.createElement('button');
    botao.className   = 'quiz-opcao';
    botao.textContent = dadosPergunta.opcoes[i];
    botao.setAttribute('data-indice', i); 
    botao.onclick = function () {
      var indiceClicado = parseInt(this.getAttribute('data-indice'));
      verificarResposta(indiceClicado);
    };
    divOpcoes.appendChild(botao);
  }
}

function verificarResposta(indiceEscolhido) {
  if (jaRespondeu) return; 
  jaRespondeu = true;

  var dadosPergunta = perguntas[numeroPerguntaAtual];
  var todosBotoes = document.querySelectorAll('.quiz-opcao');
  var feedback = document.getElementById('quiz-feedback');

  for (var i = 0; i < todosBotoes.length; i++) {
    todosBotoes[i].disabled = true;
  }

  if (indiceEscolhido === dadosPergunta.correta) {
    todosBotoes[indiceEscolhido].classList.add('correta');
    feedback.style.color = '#86efac';
    feedback.textContent = '✓ Correto! ' + dadosPergunta.explicacao;
    totalAcertos++;
  } else {
    todosBotoes[indiceEscolhido].classList.add('errada');
    todosBotoes[dadosPergunta.correta].classList.add('correta');
    feedback.style.color = '#fca5a5';
    feedback.textContent = '✗ Incorreto.' + dadosPergunta.explicacao;
  }

  var btnProximo = document.getElementById('quiz-proximo');
  btnProximo.style.display = 'inline-block';

  if (numeroPerguntaAtual === perguntas.length - 1) {
    btnProximo.innerHTML = 'Ver resultado <i class="fa-solid fa-flag-checkered"></i>';
  } else {
    btnProximo.innerHTML = 'Próxima <i class="fa-solid fa-arrow-right"></i>';
  }
}

function proximaPergunta() {
  numeroPerguntaAtual++;

  if (numeroPerguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    exibirResultado();
  }
}

function exibirResultado() {
  document.getElementById('quiz-pergunta-area').style.display = 'none';
  document.getElementById('quiz-resultado').style.display = 'block';

  var porcentagem = Math.round((totalAcertos / perguntas.length) * 100);

  document.getElementById('resultado-pontos').textContent =
    totalAcertos + ' / ' + perguntas.length;

  var icone, titulo, mensagem;

  if (porcentagem >= 90) {
    icone    = '🏆';
    titulo   = 'Excelente!';
    mensagem = 'Você é um verdadeiro guardião dos oceanos! Conhecimento impressionante.';
  } else if (porcentagem >= 70) {
    icone    = '🌊';
    titulo   = 'Muito bom!';
    mensagem = 'Ótimo desempenho! Você conhece bem os desafios e as tecnologias do OceanGuard.';
  } else if (porcentagem >= 50) {
    icone    = '🐠';
    titulo   = 'Bom início!';
    mensagem = 'Você tem uma base interessante. Continue explorando para aprender mais!';
  } else {
    icone    = '🌱';
    titulo   = 'Continue aprendendo!';
    mensagem = 'Os oceanos têm muito a ensinar. Tente novamente e melhore seu resultado!';
  }

  document.getElementById('resultado-icone').textContent = icone;
  document.getElementById('resultado-titulo').textContent = titulo;
  document.getElementById('resultado-msg').textContent = mensagem;
}

function reiniciarQuiz() {
  iniciarQuiz();
}

iniciarQuiz();

function enviarFormulario(evento) {
  evento.preventDefault(); 

  var formularioValido = true;

  var campos = ['nome', 'email', 'assunto', 'mensagem'];
  for (var i = 0; i < campos.length; i++) {
    var campo = document.getElementById('f-' + campos[i]);
    var erro = document.getElementById('erro-' + campos[i]);
    campo.classList.remove('campo-erro');
    erro.textContent = '';
  }
  document.getElementById('erro-aceite').textContent = '';

  var campoNome = document.getElementById('f-nome');
  if (campoNome.value.trim() === '') {
    document.getElementById('erro-nome').textContent = 'Por favor, informe seu nome.';
    campoNome.classList.add('campo-erro');
    formularioValido = false;
  } else if (campoNome.value.trim().length < 3) {
    document.getElementById('erro-nome').textContent = 'O nome precisa ter pelo menos 3 letras.';
    campoNome.classList.add('campo-erro');
    formularioValido = false;
  }

  var campoEmail = document.getElementById('f-email');
  var emailDigitado = campoEmail.value.trim();
  var emailValido = emailDigitado.indexOf('@') > 0 && emailDigitado.indexOf('.') > 0;
  if (emailDigitado === '') {
    document.getElementById('erro-email').textContent = 'Por favor, informe seu e-mail.';
    campoEmail.classList.add('campo-erro');
    formularioValido = false;
  } else if (!emailValido) {
    document.getElementById('erro-email').textContent = 'Digite um e-mail válido (ex: nome@email.com).';
    campoEmail.classList.add('campo-erro');
    formularioValido = false;
  }

  var campoAssunto = document.getElementById('f-assunto');
  if (campoAssunto.value === '') {
    document.getElementById('erro-assunto').textContent = 'Selecione um assunto.';
    campoAssunto.classList.add('campo-erro');
    formularioValido = false;
  }

  var campoMensagem = document.getElementById('f-mensagem');
  if (campoMensagem.value.trim() === '') {
    document.getElementById('erro-mensagem').textContent = 'Escreva sua mensagem antes de enviar.';
    campoMensagem.classList.add('campo-erro');
    formularioValido = false;
  } else if (campoMensagem.value.trim().length < 10) {
    document.getElementById('erro-mensagem').textContent = 'Sua mensagem está muito curta (mínimo 10 caracteres).';
    campoMensagem.classList.add('campo-erro');
    formularioValido = false;
  }

  var campoAceite = document.getElementById('f-aceite');
  if (!campoAceite.checked) {
    document.getElementById('erro-aceite').textContent = 'Você precisa marcar essa opção para enviar.';
    formularioValido = false;
  }

  if (formularioValido) {
    var mensagemSucesso = document.getElementById('form-sucesso');
    mensagemSucesso.style.display = 'flex';
    document.getElementById('form-contato').reset();
    setTimeout(function () {
      mensagemSucesso.style.display = 'none';
    }, 5000);
  }
}
  document.querySelector('.tema-' + tema).classList.add('ativo');
}
