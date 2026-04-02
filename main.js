const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is HTML?",
        answers: [
            { text: "Programming Language", correct: false },
            { text: "Markup Language", correct: true },
            { text: "Database", correct: false },
            { text: "Operating System", correct: false }
        ]
    },
    {
        question: "What is CSS used for?",
        answers: [
            { text: "Styling", correct: true },
            { text: "Logic", correct: false },
            { text: "Database", correct: false },
            { text: "Security", correct: false }
        ]
    },
    {
        question: "Which is JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "MySQL", correct: false }
        ]
    },
    {
        question: "Which tag is used for links in HTML?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<p>", correct: false },
            { text: "<div>", correct: false },
            { text: "<span>", correct: false }
        ]
    },
    {
        question: "Which property is used for text color?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "background", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JS?",
        answers: [
            { text: "//", correct: true },
            { text: "<!-- -->", correct: false },
            { text: "#", correct: false },
            { text: "**", correct: false }
        ]
    },
    {
        question: "Which keyword declares a variable?",
        answers: [
            { text: "int", correct: false },
            { text: "var", correct: true },
            { text: "string", correct: false },
            { text: "float", correct: false }
        ]
    },
    {
        question: "Which method prints in console?",
        answers: [
            { text: "print()", correct: false },
            { text: "console.log()", correct: true },
            { text: "echo()", correct: false },
            { text: "write()", correct: false }
        ]
    },
    {
        question: "Which layout system is in CSS?",
        answers: [
            { text: "Grid", correct: true },
            { text: "Table", correct: false },
            { text: "Frame", correct: false },
            { text: "Block", correct: false }
        ]
    },
    {
        question: "Which event occurs on button click?",
        answers: [
            { text: "onhover", correct: false },
            { text: "onchange", correct: false },
            { text: "onclick", correct: true },
            { text: "onload", correct: false }
        ]
    }
];

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

startBtn.addEventListener("click", () => {
    shuffleArray(questions);
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    showQuestion();
});

function showQuestion() {
    resetState();
    const current = questions[currentIndex];
    questionEl.innerText = current.question;
    current.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.innerText = ans.text;
        btn.classList.add("answer-btn");

        btn.addEventListener("click", () => selectAnswer(btn, ans.correct));

        answersEl.appendChild(btn);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    answersEl.innerHTML = "";
}

function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    Array.from(answersEl.children).forEach(btn => {
        btn.disabled = true;
    });

    nextBtn.style.display = "block";
}

function showScore() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";
    scoreEl.innerText = `Your Score: ${score}/${questions.length}`;
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
        nextBtn.onclick = () => location.reload();
    }
});
