// Custom JavaScript for JavaScript quiz for my personal website.

// Marissa Tavano
// Created in 2019
// Updated: 2019  



// Function that creates the quiz.
function createQuiz() {
    // A place to store the HTML output.
    const quizOutput = [];

    // This is the code we want to run for each question.
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        
        // Store the list of answer choices.
        const answerChoices = [];

        // This is the code we want to run for each available answer.
        for(answerLetter in currentQuestion.answerChoices) {

            // Add an HTML radio button for each answer option.
            answerChoices.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${answerLetter}">
                    ${currentQuestion.answerChoices[answerLetter]}
                </label>`
            );
                
        }

        // Add this question and its answers to the HTML output.
        quizOutput.push(
            `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answerChoices"> ${answerChoices.join("")} </div>
            </div>`
        );
        
    });

    // Lastly, combine our output list into one string of HTML and put it on the page.
    quizContainer.innerHTML = quizOutput.join('');
    
}




// Function that shows the results of the quiz.
function showQuizResults() {
    // Get the answer containers from our quiz.
    const answerContainers = quizContainer.querySelectorAll('.answerChoices');

    // Keep track of the user's answers.
    let numCorrectAnswers = 0;

    // This is the code we want to run for each question.
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        
        // Find the selected answer.
        const answerContainer = answerContainers[questionNumber];
        const selectedAnswer  = `input[name=question${questionNumber}]:checked`;
        const userAnswer      = (answerContainer.querySelector(selectedAnswer) || {}).value;
        

        // If the selected answer is correct:
        if(userAnswer === currentQuestion.correctAnswer) {
            
            // Increase the number of correct answers by one.
            numCorrectAnswers++;

            // Change the color of the answers to green.
            answerContainers[questionNumber].style.color = '#44c052';
            
        } 
        else {
            // If answer is wrong or blank:
            // Change the color of the answers to red.
            answerContainers[questionNumber].style.color = '#e50000';
            
        }
        
    });

    // Show the number of correct answers out of total.
    quizResultsContainer.innerHTML = `You got ${numCorrectAnswers} correct answer(s) out of ${quizQuestions.length}.`;
    
}



// Get the named elements from the HTML.
const quizContainer        = document.getElementById("quiz");
const quizResultsContainer = document.getElementById("results");
const submitButton         = document.getElementById("submit");
  
  
  
// Questions for the quiz with their answer options and the correct answer.
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        answerChoices: {
            a: "How to Make Lasagna",
            b: "Hot Mail",
            c: "Hyper Text Markup Language",
            d: "High Text Markup Language"
        },
        correctAnswer: "c"
    },
    {
        question: "What does CSS stand for?",
        answerChoices: {
            a: "Cascading Style Sheets",
            b: "Creative Style Sheets",
            c: "Computer Style Sheets"
        },
        correctAnswer: "a"
    },
    {
        question: "What does JS stand for?",
        answerChoices: {
            a: "Just Saying",
            b: "JavaScript",
            c: "Jelly Sandwich",
            d: "Jamaican Sausage"
        },
        correctAnswer: "b"
    }
];
  
  

// Display the quiz.
createQuiz();

// On submit, show the results of the quiz.
submitButton.addEventListener("click", showQuizResults);




