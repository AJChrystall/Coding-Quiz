const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-btn');
const timer = document.getElementById('timer');
const quizTime = 120; // in seconds
let remainingTime = quizTime;
let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "Madrid",
      c: "Berlin"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the largest country in the world?",
    answers: {
      a: "China",
      b: "Russia",
      c: "USA"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the tallest mammal?",
    answers: {
      a: "Elephant",
      b: "Giraffe",
      c: "Horse"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the capital of Japan?",
    answers: {
      a: "Beijing",
      b: "Tokyo",
      c: "Seoul"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the largest organ in the human body?",
    answers: {
      a: "Brain",
      b: "Heart",
      c: "Skin"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the name of the tallest waterfall in the world?",
    answers: {
      a: "Angel Falls",
      b: "Niagara Falls",
      c: "Victoria Falls"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of the closest star to Earth?",
    answers: {
      a: "Proxima Centauri",
      b: "Alpha Centauri",
      c: "Betelgeuse"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the largest ocean in the world?",
    answers: {
      a: "Indian Ocean",
      b: "Atlantic Ocean",
      c: "Pacific Ocean"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the name of the first man to walk on the moon?",
    answers: {
      a: "Buzz Aldrin",
      b: "Neil Armstrong",
      c: "Yuri Gagarin"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the highest mountain in the world?",
    answers: {
      a: "Mount Everest",
      b: "Mount Kilimanjaro",
      c: "Mount McKinley"
    },
    correctAnswer: "a"
  },
];

// Function to start the quiz
function startQuiz() {
  // Render the first question
  showQuestion(currentQuestionIndex);
  
  // Start the countdown timer
  countdown();

   // Add event listener to submit button
   submitButton.addEventListener('click', submitAnswer);
  }


// Function to render a single question
function showQuestion(index) {
  // Get the current question
  const question = questions[index];
  
  // Display the question text
  questionContainer.textContent = question.question;
  
  // Create radio buttons for the answer options
  for (const key in question.answers) {
    if (question.answers.hasOwnProperty(key)) {
      const answer = question.answers[key];
      
      // Create the radio button and label elements
      const radioButton = document.createElement('input');
      radioButton.type = 'radio';
      radioButton.name = 'answer';
      radioButton.value = key;
      
      // Append the radio button and label elements to the question container
      const label = document.createElement('label');
      label.textContent = answer;
      label.setAttribute('for', key);
      questionContainer.appendChild(radioButton);
      questionContainer.appendChild(label);
    }
  }
}

// Function to handle the submission of an answer
function submitAnswer() {
  // Get the selected answer
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  // Check if an answer was selected
  if (selectedAnswer === null) {
    alert('Please select an answer!');
    return;
  }

  // Get the current question
  const question = questions[currentQuestionIndex];

  // Check if the selected answer is correct
  if (question.correctAnswer === selectedAnswer.value) {
    score++;
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if the quiz is over
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestion(currentQuestionIndex);
  }
}

// Function to end the quiz
function endQuiz() {
  // Clear the question container
  questionContainer.innerHTML = '';

  // Hide the submit button
  submitButton.style.display = 'none';

  // Display the final score
  resultsContainer.innerHTML = `<p>Your final score is ${score} out of ${questions.length}.</p>`;
}


// Function to start the countdown timer
function countdown() {
  const countdownTimer = setInterval(() => {
    // Update the remaining time
    remainingTime--;

    // Update the timer display
    timer.textContent = `Time Remaining: ${remainingTime}`;

    // Check if the time has run out
    if (remainingTime === 0) {
      clearInterval(countdownTimer);
      endQuiz();
    }
  }, 1000);
}
