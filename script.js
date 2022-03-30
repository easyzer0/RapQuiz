const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    resetState()
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer() {

}

const questions = [
    {
        question: "What is the name of Jay-Z's debut album?",
        answers: [
            { text: "Reasonable Doubt", correct: true},
            { text: "The Blueprint", correct: false},
            { text: "American Gangster", correct: false},
            { text: "4:44", correct: false}
        ]
    },
    {
        question: "What rap group is Andre 3000 a part of?",
        answers: [
            { text: "Three 6 Mafia", correct: false},
            { text: "UGK", correct: false},
            { text: "Outkast", correct: true},
            { text: "Wu-Tang Clan", correct: false}
        ]
    },
    {
        question: "Which Wu-Tang Clan member has the solo album named Liquid Swords?",
        answers: [
            { text: "RZA", correct: false},
            { text: "Ghostface Killah", correct: false},
            { text: "Raekwon", correct: false},
            { text: "GZA", correct: true}
        ]
    }

]
