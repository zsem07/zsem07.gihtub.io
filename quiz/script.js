// load quiz data from a JSON file
const quizData = [
    {
        "question": "Melylik évben született Kósi Zsigmond?",
        "answers": [
            "2007",
            "2006",
            "2008"
        ],
        "correctAnswer": "2007"
    },
    {
        "question": "A három ember közül ki nem játszik Dungeons & Dragons-t?",
        "answers": [
            "Botond",
            "Francisco",
            "Zsigmond"
        ],
        "correctAnswer": "Botond"
    },
    {
        "question": "A három ember közül melyik tanul valamilyen harcművészetet?",
        "answers": [
            "Botond",
            "Francisco",
            "Zsigmond"
        ],
        "correctAnswer": "Zsigmond"
    },
    {
        "question": "Reszponzív-e az oldal?",
        "answers": [
            "Igen",
            "Nem",
            "Nem tudom"
        ],
        "correctAnswer": "Igen"
    },
    {
        "question": "Milyen kép van a főoldal tetején?",
        "answers": [
            "Több egyéni kép.",
            "Egy csoport kép.",
            "Nincs semilyen kép a főoldal tetején."
        ],
        "correctAnswer": "Egy csoport kép."
    }
];


const questionContainer = document.getElementById("question_container");
quizData.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
        <h2>${question.question}</h2>
        ${question.answers.map(answer => (
            `<input type="radio" name="${question.question}_answers" value="${answer}">
            <label for="${question.question}_answers">${answer}</label><br>`
        )).join('')}
        ${index !== quizData.length - 1 ? '<hr>' : ''}
    `;
    questionContainer.insertBefore(questionElement, questionContainer.children[questionContainer.children.length - 1]);
});

function rate() {
    let score = 0;
    let maxScore = quizData.length;
    quizData.forEach((question) => {
        const selectedAnswer = document.querySelector(`input[name="${question.question}_answers"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
            score++;
        }
    });
    document.getElementById("score").textContent = score;
    document.getElementById("max_score").textContent = maxScore;
    const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
    document.getElementById("percentage").textContent = percentage.toFixed(0);

    document.getElementById("rating").style.display = "block";
    document.getElementById("question_container").style.display = "none";
    
}