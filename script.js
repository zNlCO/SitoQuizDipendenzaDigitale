const quizData = [
    {
        question: "Quanto tempo passi ogni giorno sui social media?",
        a: "Meno di un'ora",
        aSCORE: 1,
        b: "Circa 1-2 ore",
        bSCORE: 2,
        c: "Circa 3-4 ore",
        cSCORE: 3,
        d: "Più di 4 ore",
        dSCORE: 4,
    },
    {
        question: "Quando ti svegli la mattina, quale è la prima cosa che fai?",
        a: "Guardo il cellulare",
        aSCORE: 4,
        b: "Mi alzo e faccio colazione",
        bSCORE: 1,
        c: "Faccio la doccia",
        cSCORE: 2,
        d: "Leggo un libro o un giornale",
        dSCORE: 3,
    },
    {
        question: "Quanto spesso controlli la tua email?",
        a: "Meno di una volta al giorno",
        aSCORE: 1,
        b: "Ogni volta che ricevo una notifica",
        bSCORE: 3,
        c: "Ogni ora circa",
        cSCORE: 2,
        d: "Continuamente durante il giorno",
        dSCORE: 4,
    },
    {
        question: "Quanto spesso controlli il tuo telefono durante una conversazione faccia a faccia?",
        a: "Mai, lo lascio in borsa o in tasca",
        aSCORE: 1,
        b: "Solo se ricevo una notifica importante",
        bSCORE: 2,
        c: "Ogni volta che sento il suono della notifica",
        cSCORE: 3,
        d: "Continuamente, anche mentre parlo con qualcuno",
        dSCORE: 4,
    },
    {
        question: "Quanto tempo passi guardando video su YouTube o Netflix ogni giorno?",
        a: "Meno di un'ora",
        aSCORE: 1,
        b: "Circa 1-2 ore",
        bSCORE: 2,
        c: "Circa 3-4 ore",
        cSCORE: 3,
        d: "Più di 4 ore",
        dSCORE: 4,
    },
    {
        question: "Quanto spesso controlli i social media durante il lavoro o lo studio?",
        a: "Mai, rispetto le mie scadenze",
        aSCORE: 1,
        b: "Solo quando ho finito tutto il lavoro o lo studio",
        bSCORE: 2,
        c: "Ogni volta che ricevo una notifica",
        cSCORE: 3,
        d: "Continuamente durante il lavoro o lo studio",
        dSCORE: 4,
    },
    {
        question: "Quanto tempo passi giocando ai videogiochi ogni giorno?",
        a: "Meno di un'ora",
        aSCORE: 1,
        b: "Circa 1-2 ore",
        bSCORE: 2,
        c: "Circa 3-4 ore",
        cSCORE: 3,
        d: "Più di 4 ore",
        dSCORE: 4,
    },
    {
        question: "Quanto spesso usi il tuo telefono prima di dormire?",
        a: "Mai, lo lascio in un'altra stanza",
        aSCORE: 1,
        b: "Solo per impostare la sveglia",
        bSCORE: 2,
        c: "Per leggere o guardare qualcosa per un po'",
        cSCORE: 3,
        d: "Continuamente fino a quando non mi addormento",
        dSCORE: 4,
    },
    {
        question: "Quanto spesso prendi una pausa dai dispositivi digitali?",
        a: "Ogni giorno per alcune ore",
        aSCORE: 1,
        b: "Ogni settimana per un giorno intero",
        bSCORE: 2,
        c: "Raramente, solo quando mi sento sopraffatto",
        cSCORE: 3,
        d: "Mai, non riesco a staccarmi dai dispositivi digitali",
        dSCORE: 4,
    },
    {
        question: "Quanto sei a tuo agio nel fare attività che non coinvolgono dispositivi digitali?",
        a: "Molto a mio agio, lo faccio regolarmente",
        aSCORE: 1,
        b: "Abbastanza a mio agio, ma preferisco sempre avere il mio telefono con me",
        bSCORE: 2,
        c: "Non molto a mio agio, mi sento isolato senza i dispositivi digitali",
        cSCORE: 3,
        d: "Non sono a mio agio, non so cosa fare senza i dispositivi digitali",
        dSCORE: 4,
    },
];
const quiz = document.getElementById('quiz'),
    answerEls = document.querySelectorAll('.answer'),
    questionEl = document.getElementById('question'),
    a_text = document.getElementById('a_text'),
    b_text = document.getElementById('b_text'),
    c_text = document.getElementById('c_text'),
    d_text = document.getElementById('d_text'),
    submitBtn = document.getElementById('btnSubmit');
let currentQuiz = 0,
    score = 0;
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        assignScore(answer)
        console.log(score);
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz();

            if (currentQuiz == 9) {
                document.getElementById("btnSubmit").style.display = 'none';
                document.getElementById("submit").style.display = 'block';
            }

        }
    }
})

function assignScore(answer) {
    switch (answer) {
        case 'a':
            score += quizData[currentQuiz].aSCORE;
            break;
        case 'b':
            score += quizData[currentQuiz].bSCORE;
            break;
        case 'c':
            score += quizData[currentQuiz].cSCORE;
            break;
        case 'd':
            score += quizData[currentQuiz].dSCORE;
            break;
    }
}

function aumento() {
    assignScore(getSelected());
    document.getElementById("Text").value = score;
}