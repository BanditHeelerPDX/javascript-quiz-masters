// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('.choice-text'));
// const progressText = document.querySelector('#progressText');
// const scoreText = document.querySelector('#score');
// const progressBarFull = document.querySelector('#progressBarFull');
// const game_clock = 30;

// let currentQuestion = {};
// let acceptingAnswers = true;
// let score = 0;
// let questionCounter = 0;
// let availableQuestions = [];

// let questions = [ 
//     {    
//     question: "Which of the following will properly create an array?",    
//     choice1: "let oldArray = new Array[16]",
//     choice2: "var myarray = ['Dwayne', 16, 32, 48]",
//     choice3: "let yourarray = myarray()",
//     choice4: "var thearray = vacuums('hoover', 'dyson', 'magnavox')",
//     answer: 1,
//     },
//     {
//     question: "What type of programming language is Javascript?",
//     choice1: "Object-focused",
//     choice2: "Superficial",
//     choice3: "Object-oriented",
//     choice4: "Vanilla",
//     answer: 3,
//     },
//     {
//     question: "Which of the following is not a property of the navigator object?",
//     choice1: "appName",
//     choice2: "appCodeName",
//     choice3: "appType",
//     choice4: "appVersion",
//     answer: 3,
//      },
//   {
//     question: "Which of these is not a method of the Date object?",
//     choice1: "getDate()",
//     choice2: "getHours()",
//     choice3: "getTimezoneOffset()",
//     choice4: "getShorty()",
//     answer: 4,
//   },
//   {
//     question: "To resize a window relative to its current size, use this method:",
//     choice1: "resizeTo()",
//     choice2: "resizeBy()",
//     choice3: "scrollTo()",
//     choice4: "moveBy()",
//     answer: 2,
//   },
//   {
//     question: "Window: message event",
//     choice1: "This event bubbles, but cannot be cancelled.",
//     choice2: "This event can be cancelled but does not bubble.",
//     choice3: "This event bubbles and can be cancelled.",
//     choice4: "This event is not cancellable and does not bubble.",
//     answer: 4,
//   }
// ];

// const SCORE_POINTS = 2;
// const MAX_QUESTIONS = 10;

// startGame = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions];
//     timeLeft = game_clock
//     getNewQuestion();
//     countdown = setInterval(() => {
//         timeLeft--;
//         progressBarFull.style.width = `${(timeLeft/game_clock) * 1000}%`;
//         timeLeftText.textContent = `${timeLeft} seconds left`;
//         if(timeLeft === 0) {
//             clearInterval(countdown);
//             localStorage.setItem('mostRecentScore', score);
//             return window.location.assign('/gameover.html');
//         }
//     }, 1000);
// };

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//         localStorage.setItem('mostRecentScores, score')
//         return window.location.assign('/end.html')
//     };

//     questionCounter++;
//     progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
//     progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

//     const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//     currentQuestion = availableQuestions[questionIndex];
//     question.innerText = currentQuestion.question;

//     choices.forEach(choice => {
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice' + number]
//     });

//     availableQuestions.splice(questionIndex, 1);

//     acceptingAnswers = true;
// };

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false;
//         const selectedChoice = e.target;
//         const selectedAnswer = selectedChoice.dataset['number'];

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
//         if(classToApply === 'correct') {
//             incrementScore(SCORE_POINTS)
//         } else {
//             timeLeft -= 5;
//             if (timeLeft < 0) {
//                 timeLeft = 0;
//             }
//             }
//         })

//         e.target.parentElement.classList.add(classToApply);

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()
//         }, 1000);
//     });


// incrementScore = num => {
//     score +=num;
//     scoreText.innerText = score;
// };

// startGame();

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const timeLeftText = document.querySelector('#timeLeft');

const game_clock = 30;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];

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

const SCORE_POINTS = 2;
const TOTAL_QUESTIONS = questions.length;

let countdown;

startGame = () => {
    availableQuestions = [...questions];
    score = 0;
    getNewQuestion();
    countdown = setInterval(() => {
        game_clock--;
        progressBarFull.style.width = `${(game_clock / 30) * 100}%`;
        timeLeftText.textContent = `${game_clock} seconds left`;
        if (game_clock === 0) {
            clearInterval(countdown);
            localStorage.setItem('mostRecentScore', score);
            return window.location.assign('/gameover.html');
        }
    }, 1000);
};

getNewQuestion = () => {
    if (availableQuestions.length === 0) {
      localStorage.setItem('mostRecentScores, score');
      return window.location.assign('/end.html');
    }
  
    progressText.innerText = `Question ${questionCounter + 1}`;
    progressBarFull.style.width = `${(timeLeft / game_clock) * 100}%`;
  
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
  
    choices.forEach(choice => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];
    });
  
    availableQuestions.splice(questionIndex, 1);
  
    acceptingAnswers = true;
  };

  choices.forEach(choice => {
    choice.addEventListener('click', e => {
      if (!acceptingAnswers) return;
  
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset['number'];
  
      let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
      if (classToApply === 'correct') {
        incrementScore(SCORE_POINTS);
      } else {
        timeLeft -= 5;
        if (timeLeft < 0) {
          timeLeft = 0;
        }
      }
  
      selectedChoice.parentElement.classList.add(classToApply);
  
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
  });
  
  incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };
  
  startGame();