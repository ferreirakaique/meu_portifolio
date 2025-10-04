window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const typingElement = document.getElementById("typing-text");

const textos = [
    "Web",
    "Mobile",
    "Tecnologia",
    "Inovação",
    "Software",
    "Cloud",
    "Experiências Digitais",
    "Automação"
];

let i = 0; // índice da frase
let j = 0; // índice da letra
let apagando = false;

function type() {
    let atual = textos[i];

    if (!apagando) {
        typingElement.textContent = atual.slice(0, j++);
        if (j > atual.length) {
            apagando = true;
            setTimeout(type, 1500); // pausa antes de apagar
            return;
        }
    } else {
        typingElement.textContent = atual.slice(0, j--);
        if (j < 0) {
            apagando = false;
            i = (i + 1) % textos.length; // próxima palavra
            j = 0; // *** conserta o bug da última palavra sumindo estranho ***
        }
    }

    setTimeout(type, apagando ? 50 : 100); // velocidade de apagar/digitar
}

type();


const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // remove ao sair
            }
        });
    },
    {
        threshold: 0., // 30% visível para ativar
    }
);

sections.forEach(section => observer.observe(section));
