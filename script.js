const quizData = [
    {
        question: "Which language is primarily used for styling web pages?",
        options: ["HTML", "Java", "CSS", "Python"],
        answer: "CSS"
      },
    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML"
    },
    {
        question: "Which programming language is known for its snake logo?",
        options: ["Java", "C", "Python", "Ruby"],
        answer: "Python"
      },
      {
        question: "Which of the following is a looping statement in programming?",
        options: ["if", "else", "for", "print"],
        answer: "for"
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
      },
    {
        question: "Which symbol is used for single-line comments in Python?",
        options: ["//", "#", "/*", "<!--"],
        answer: "#"
      },
      {
        question: "Which company developed the Java programming language?",
        options: ["Microsoft", "Sun Microsystems", "Apple", "Google"],
        answer: "Sun Microsystems"
      },
      {
        question: "What is the file extension for a Python file?",
        options: [".java", ".py", ".html", ".cpp"],
        answer: ".py"
      },
      {
        question: "Which method is used to output something in Python?",
        options: ["echo", "console.log", "printf", "print"],
        answer: "print"
      },
    
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet", "Colorful Style Syntax"],
        answer: "Cascading Style Sheets"
      }
    
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;
const timerEl = document.getElementById('time');
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const resultEl = document.querySelector('.result');
const scoreEl = document.getElementById('score');
const restartBtn = document.querySelector('.restart-btn');

// Function to load the question
function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }
    clearInterval(timerInterval);
    timeLeft = 15;
    timerEl.textContent = timeLeft;
    startTimer();
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = ''; // Clear previous options
    currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

// Check the answer
function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

// Start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// End the quiz and show the results
function endQuiz() {
    clearInterval(timerInterval);
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = score;
    restartBtn.style.display = 'block';
}

// Restart the quiz
restartBtn.addEventListener('click', () => {
    // Reset variables
    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    timerEl.textContent = timeLeft;

    // Reset the display
    questionEl.style.display = 'block';
    optionsEl.style.display = 'flex'; // Ensure options are displayed correctly
    resultEl.style.display = 'none';
    restartBtn.style.display = 'none';

    // Load the first question
    loadQuestion();
});

// Initialize the quiz with the first question
loadQuestion();
