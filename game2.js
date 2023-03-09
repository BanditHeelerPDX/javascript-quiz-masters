const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreData = document.getElementById('score');
const questionCounterText = document.getElementById('questionCounter')
const timerData = document.getElementById('timer');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timer = 20;

let questions = [ 
    {    
    question: "Which of the following will properly create an array?",    
    choice1: "let oldArray = new Array[16]",
    choice2: "var myarray = ['Dwayne', 16, 32, 48]",
    choice3: "let yourarray = myarray()",
    choice4: "var thearray = vacuums('hoover', 'dyson', 'magnavox')",
    answer: 1,
    },
    {
    question: "What type of programming language is Javascript?",
    choice1: "Object-focused",
    choice2: "Superficial",
    choice3: "Object-oriented",
    choice4: "Vanilla",
    answer: 3,
    },
    {
    question: "Which of the following is not a property of the navigator object?",
    choice1: "appName",
    choice2: "appCodeName",
    choice3: "appType",
    choice4: "appVersion",
    answer: 3,
     },
  {
    question: "Which of these is not a method of the Date object?",
    choice1: "getDate()",
    choice2: "getHours()",
    choice3: "getTimezoneOffset()",
    choice4: "getShorty()",
    answer: 4,
  },
  {
    question: "To resize a window relative to its current size, use this method:",
    choice1: "resizeTo()",
    choice2: "resizeBy()",
    choice3: "scrollTo()",
    choice4: "moveBy()",
    answer: 2,
  },
  {
    question: "Window: message event",
    choice1: "This event bubbles, but cannot be cancelled.",
    choice2: "This event can be cancelled but does not bubble.",
    choice3: "This event bubbles and can be cancelled.",
    choice4: "This event is not cancellable and does not bubble.",
    answer: 4,
  }
];

const SCORE_POINTS = 3;
const TOTAL_QUESTIONS = questions.length;

startGame = () => {
    startTimer();
    questionCounter = 0;
    //timer = 20;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

startTimer = () => {
  setInterval(() => {
    timer--;
    timerData.innerText = timer;
    if (timer <= 0) {
      clearInterval();
      localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/gameover.html');
    }
  }, 1000);
}

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= TOTAL_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/gameover.html')
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${TOTAL_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText= currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach( choice => {
    choice.addEventListener('click', e => {
        event.preventDefault;
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

          if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
          } else {
            timer -= 3;
          }



        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 250);
ev
        getNewQuestion();
    });
});

incrementScore = num => {
    score += num;
    scoreData.innerText = score;
}

startGame();

