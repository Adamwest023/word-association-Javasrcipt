//score and question display variable
const scoreDisplay = document.getElementById("score-display")
const questionDisplay = document.getElementById("question-display")

//create an array of questions 
const questions = [
    {
        quiz: ["value", "extimate", "evaluate"],
        options: ["jury", 'assess'],
        correct: 1
    },
    {
        quiz: ["deer", "elk", "doe"],
        options: ["cat", 'moose'],
        correct: 1
    },
    {
        quiz: ["car", "truck", "motorcycle"],
        options: ["bus", 'house'],
        correct: 0
    },
    {
        quiz: ["fear", "terror", "shock"],
        options: ["scary", 'joy'],
        correct: 0
    },
    {
        quiz: ["water", "snow", "ice"],
        options: ["hamburger", 'steam'],
        correct: 1
    }
]

//set and display score
let score = 0
let clicked = [ ]
scoreDisplay.textContent = score

//populate the quesiton

function populateQuesitons() {
    questions.forEach(question => {
        //createing the boxes in an individual div
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        const logoDisplay = document.createElement('h1')
        // logoDisplay.textContent = "&#9999"
        questionBox.append(logoDisplay)
        //adding the tip or quiz section to the box
        question.quiz.forEach(tip => {
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText);

        })

        //adding buttons to the box
        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option

            questionButton.addEventListener('click', () => checkAnswer(questionBox,questionButton,option, optionIndex, question.correct))


            questionButtons.append(questionButton)
        })

        //creating a right or wrong answer display
        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display');


        questionBox.append(answerDisplay);
        questionDisplay.append(questionBox);

    })

}

populateQuesitons();


//fucntion to checkAnswer   
function checkAnswer(questionBox,questionButton,option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)

    if (optionIndex == correctAnswer) {
        score++;
        scoreDisplay.textContent = score;
        addResult(questionBox, "Correct!", 'correct');
    } else {
        score--
        scoreDisplay.textContent = score; 
        addResult(questionBox, "Wrong!", 'wrong');
    }

    clicked.push(option)
    //if the clicked option is the same as the questionButton it will be disabled
    questionButton.disabled = clicked.includes(option)

}

//function to add results to the answer display
function addResult(questionBox,answer, className) {
    const answerDisplay =  questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}
