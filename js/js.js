
// Quiz de Teen Wolf, Twilight e Marvel
// Autor: Miguelito
// Data: 2024-06-15

/*
 *   constantante para armazenar as perguntas, respostas e a resposta correta de cada pergunta.
 *   cada objeto dentro do array representa uma pergunta, 
 *       com a propriedade 'q' para a pergunta, 'a' para as respostas possíveis e 'c' para o índice da resposta correta.
 */
const questions = [

    {
        q:"Qual é a cidade principal de Teen Wolf?",
        a:["Beacon Hills","Forks","Gotham","Smallville"],
        c:0
    },

    {
        q:"Quem é o protagonista de Teen Wolf?",
        a:["Stiles","Scott","Derek","Liam"],
        c:1
    },

    {
        q:"Qual amigo de Scott é conhecido pela inteligência?",
        a:["Liam","Theo","Stiles","Jackson"],
        c:2
    },

    {
        q:"Quem é conhecido como Alfa em Teen Wolf?",
        a:["Scott","Allison","Lydia","Mason"],
        c:0
    },

    {
        q:"Qual criatura sobrenatural aparece frequentemente?",
        a:["Dragões","Lobisomens","Elfos","Anjos"],
        c:1
    },

    {
        q:"Qual o sobrenome de Edward?",
        a:["Black","Swan","Cullen","Hale"],
        c:2
    },

    {
        q:"Em que cidade vive Bella?",
        a:["Forks","Seattle","Phoenix","Boston"],
        c:0
    },

    {
        q:"Quem é o melhor amigo lobisomem de Bella?",
        a:["Edward","Jacob","Carlisle","Emmett"],
        c:1
    },

    {
        q:"Bella torna-se?",
        a:["Feiticeira","Caçadora","Vampira","Lobisomem"],
        c:2
    },

    {
        q:"Qual família é central na saga Twilight?",
        a:["Volturi","Cullen","Black","Denali"],
        c:1
    },

    {
        q:"Quem empunha o Mjölnir?",
        a:["Thor","Loki","Hulk","Tony"],
        c:0
    },

    {
        q:"Qual é o alter ego do Homem de Ferro?",
        a:["Steve","Bruce","Tony Stark","Peter"],
        c:2
    },

    {
        q:"Quem lidera os Vingadores frequentemente?",
        a:["Capitão América","Rocket","Wanda","Vision"],
        c:0
    },

    {
        q:"Qual vilão procura as Joias do Infinito?",
        a:["Ultron","Thanos","Loki","Red Skull"],
        c:1
    },

    {
        q:"Quem é o Homem-Aranha?",
        a:["Peter Parker","Matt Murdock","Logan","Bucky"],
        c:0
    }
];

let current = 0; // variável para rastrear a pergunta atual
let correct = 0; // variável para rastrear o número de respostas corretas

/*
 *   Função para mostrar a introdução do quiz, escondendo a tela de boas-vindas e exibindo a tela de introdução.
 */
function showIntro(){
    welcome.classList.add("hidden");
    intro.classList.remove("hidden");
}

/**
 * Função para iniciar o quiz, escondendo a tela de introdução e exibindo a tela do quiz.
 */
function startQuiz(){
    intro.classList.add("hidden");
    quiz.classList.remove("hidden");
    loadQuestion();
}

/**
 * Função para carregar a pergunta atual.
 */
function loadQuestion(){

    let q = questions[current];

    // Atualiza o contador de perguntas
    counter.innerText =
    `Pergunta ${current+1} de ${questions.length}`;

    // Atualiza o texto da pergunta
    question.innerText = q.q;

    // Atualiza a barra de progresso
    bar.style.width =
    ((current)/questions.length)*100+"%";

    answers.innerHTML = ""; // Limpa as respostas anteriores

    // Cria os elementos de resposta para a pergunta atual
    q.a.forEach((answer,index)=>{

        // Cria um elemento div para cada resposta
        let div=document.createElement("div");

        div.className="option"; // Adiciona a classe "option" ao div
        div.innerText=answer; // Define o texto da resposta

        // Adiciona um evento de clique para verificar a resposta
        div.onclick=()=>{

            if(index===q.c)
                correct++;

            current++;

            if(current<questions.length)
                loadQuestion();
            else
                finishQuiz();
        };

        answers.appendChild(div);
    });
}

/**
 * Função para finalizar o quiz, escondendo a tela do quiz e exibindo a tela de resultados.
 */
function finishQuiz(){

    quiz.classList.add("hidden");
    result.classList.remove("hidden");

    let finalScore = 750 + Math.round((correct/questions.length)*250); // Calcula a pontuação final com base nas respostas corretas

    score.innerText = finalScore + "/1000";

    // Determina o rank com base na pontuação final
    if(finalScore>=950)
        rank.innerText="🌟 Nível Lendário!";
    else if(finalScore>=850)
        rank.innerText="✨ Excelente!";
    else
        rank.innerText="💖 Incrível!";

    createConfetti();
}

function grandefinal(){
    result.classList.add("hidden");
    finale.classList.remove("hidden");
}

/**
 * Função para exibir uma mensagem especial, representando a "Batcaverna".
 */
function batcave(){

    alert(
            `Desenvolvido pelo seu, estranho e esquisito, amigo.
             — Miguel
             Que estranhamente colocou o site no ar exatamente as 
             17:17 do dia 17.
             Concidencia? Talvez. Mas o importante é que isso é um presente para você.
             `
        );
}

// Função para criar confetes animados na tela
function createConfetti(){

    for(let i=0;i<100;i++){

        let c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.background=
        `hsl(${Math.random()*360},100%,50%)`;

        c.style.animationDelay=
        Math.random()*3+"s";

        document.body.appendChild(c);
    }
}
