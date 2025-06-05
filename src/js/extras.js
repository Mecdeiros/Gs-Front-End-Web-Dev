document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ JavaScript carregado com sucesso!');

  // ===== SISTEMA DE TEMAS =====
  function setTheme(theme) {
    document.body.classList.remove('theme-default', 'theme-dark', 'theme-jade');
    document.body.classList.add('theme-' + theme);
    localStorage.setItem('theme', theme);

    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    console.log(`🎨 Tema alterado para: ${theme}`);
  }

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      setTheme(this.dataset.theme);
    });
  });

  const savedTheme = localStorage.getItem('theme') || 'default';
  setTheme(savedTheme);

  // ===== EFEITO STICKY BOLHA =====
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 60) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // ===== MENU MOBILE =====
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeBtn');

  if (hamburgerBtn && mobileMenu) {
    // Abrir menu
    hamburgerBtn.addEventListener('click', function () {
      console.log('🍔 Hamburger clicado!');
      
      mobileMenu.classList.add('active');
      hamburgerBtn.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      console.log('📱 Menu mobile aberto');
    });

    // Fechar menu - botão X
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        console.log('❌ Botão fechar clicado!');
        closeMenu();
      });
    }

    // Fechar menu - clique no backdrop
    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu) {
        console.log('🖱️ Clique no backdrop detectado');
        closeMenu();
      }
    });

    // Fechar menu - ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        console.log('⌨️ ESC pressionado');
        closeMenu();
      }
    });

    // Função para fechar menu
    function closeMenu() {
      mobileMenu.classList.remove('active');
      hamburgerBtn.classList.remove('active');
      document.body.style.overflow = '';
      console.log('📱 Menu mobile fechado');
    }

    // Fechar menu ao clicar em links internos
    document.querySelectorAll('.mobile-nav a[href^="#"]').forEach(link => {
      link.addEventListener('click', function () {
        console.log('🔗 Link interno clicado, fechando menu');
        closeMenu();
      });
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('🚀 Todos os sistemas inicializados com sucesso!');
});

document.addEventListener('DOMContentLoaded', function () {
  // ... (seu código já existente)

  // SLIDESHOW
  const slides = document.querySelectorAll('.slideshow-slide');
  const dots = document.querySelectorAll('.slideshow-dots .dot');
  const prevBtn = document.querySelector('.slideshow-arrow.left');
  const nextBtn = document.querySelector('.slideshow-arrow.right');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  prevBtn.addEventListener('click', () => {
    showSlide((current - 1 + slides.length) % slides.length);
  });

  nextBtn.addEventListener('click', () => {
    showSlide((current + 1) % slides.length);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  // (Opcional) Auto-slide a cada 8s
  // setInterval(() => nextBtn.click(), 8000);

  showSlide(0);
});


document.addEventListener('DOMContentLoaded', function () {

  // QUIZ INTERATIVO
  const quizData = [
    {
      q: "O que é uma enchente?",
      options: [
        "Quando a água do mar invade a cidade",
        "Quando rios, córregos ou ruas ficam cheios de água devido a chuvas intensas",
        "Quando falta água na cidade",
        "Quando chove granizo"
      ],
      answer: 1
    },
    {
      q: "Qual destes objetos NÃO deve ser jogado na rua para evitar alagamentos?",
      options: [
        "Papel",
        "Plástico",
        "Casca de fruta",
        "Todos os anteriores"
      ],
      answer: 3
    },
    {
      q: "Por que as cidades grandes sofrem mais com enchentes?",
      options: [
        "Porque têm mais festas",
        "Porque têm muito asfalto e pouco espaço para a água infiltrar no solo",
        "Porque chove mais nas cidades grandes",
        "Porque têm mais árvores"
      ],
      answer: 1
    },
    {
      q: "O que é um bueiro entupido?",
      options: [
        "Um buraco cheio de tesouros",
        "Um local onde a água da chuva deveria escoar, mas está bloqueado por lixo",
        "Um tipo de animal aquático",
        "Um brinquedo de parque"
      ],
      answer: 1
    },
    {
      q: "Qual destas atitudes ajuda a prevenir enchentes?",
      options: [
        "Jogar lixo no chão",
        "Plantar árvores e cuidar dos rios",
        "Tapar bueiros",
        "Construir casas em áreas de risco"
      ],
      answer: 1
    },
    {
      q: "O que pode acontecer com a saúde das pessoas após uma enchente?",
      options: [
        "Nada, é só esperar a água baixar",
        "Podem surgir doenças como leptospirose e diarreia",
        "Todo mundo fica mais forte",
        "As pessoas ganham superpoderes"
      ],
      answer: 1
    },
    {
      q: "Se você estiver em casa e começar uma enchente, o que NÃO deve fazer?",
      options: [
        "Procurar um lugar alto e seguro",
        "Tentar atravessar ruas alagadas",
        "Ouvir as orientações da Defesa Civil",
        "Desligar aparelhos elétricos"
      ],
      answer: 1
    },
    {
      q: "Por que é importante manter as margens dos rios limpas e preservadas?",
      options: [
        "Para os peixes fazerem festa",
        "Para evitar erosão e facilitar o escoamento da água",
        "Para plantar bananeira",
        "Para construir mais casas"
      ],
      answer: 1
    },
    {
      q: "O que significa “área de risco” em relação a enchentes?",
      options: [
        "Um lugar onde sempre faz sol",
        "Um local onde há maior chance de alagamentos ou deslizamentos",
        "Um parque de diversões",
        "Uma rua com muitos carros"
      ],
      answer: 1
    },
    {
      q: "Qual destas frases é verdadeira sobre chuvas fortes?",
      options: [
        "Sempre acontecem no verão",
        "Podem causar enchentes mesmo em cidades pequenas",
        "Só acontecem à noite",
        "Não afetam ninguém"
      ],
      answer: 1
    }
  ];

  // Elementos
  const quizConsent = document.getElementById('quizConsent');
  const consentCheckbox = document.getElementById('consentCheckbox');
  const startQuizBtn = document.getElementById('startQuizBtn');
  const quizForm = document.getElementById('quizForm');
  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  const quizProgress = document.getElementById('quizProgress');
  const quizResult = document.getElementById('quizResult');
  const quizScore = document.getElementById('quizScore');
  const restartQuizBtn = document.getElementById('restartQuizBtn');

  let currentQuestion = 0;
  let userAnswers = [];
  let consentGiven = false;

  // Consentimento
  if (consentCheckbox && startQuizBtn) {
    consentCheckbox.addEventListener('change', function () {
      startQuizBtn.disabled = !this.checked;
    });
    startQuizBtn.addEventListener('click', function () {
      consentGiven = true;
      quizConsent.style.display = 'none';
      quizForm.style.display = 'flex';
      showQuestion(0);
    });
  }

  // Mostrar pergunta
  function showQuestion(idx) {
    currentQuestion = idx;
    quizQuestion.textContent = quizData[idx].q;
    quizOptions.innerHTML = '';
    nextQuestionBtn.disabled = true;
    quizProgress.textContent = `Pergunta ${idx + 1} de ${quizData.length}`;

    quizData[idx].options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', function () {
        // Desmarca outros
        document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        userAnswers[idx] = i;
        nextQuestionBtn.disabled = false;
      });
      quizOptions.appendChild(btn);
    });
  }

  // Próxima pergunta
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', function () {
      if (typeof userAnswers[currentQuestion] === 'undefined') return;
      if (currentQuestion < quizData.length - 1) {
        showQuestion(currentQuestion + 1);
      } else {
        showResult();
      }
    });
  }

  // Mostrar resultado
  function showResult() {
    quizForm.style.display = 'none';
    quizResult.style.display = 'block';
    let correct = 0;
    quizData.forEach((q, i) => {
      if (userAnswers[i] === q.answer) correct++;
    });
    quizScore.textContent = `Você acertou ${correct} de ${quizData.length} perguntas!`;

    // Aqui você pode enviar o resultado para o backend se quiser
    if (consentGiven) {
      // Exemplo: fetch('/api/quiz', { method: 'POST', body: JSON.stringify({ score: correct }) });
      // Por enquanto, só mostramos no console:
      console.log('Resultado compartilhado:', correct);
    }
  }

  // Refazer quiz
  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', function () {
      userAnswers = [];
      quizResult.style.display = 'none';
      quizConsent.style.display = 'block';
      consentCheckbox.checked = false;
      startQuizBtn.disabled = true;
    });
  }
});