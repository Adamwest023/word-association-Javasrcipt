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

            questionButton.addEventListener('click', () => checkAnswer(option, optionIndex, question.correct))


            questionButtons.append(questionButton)
        })


        questionDisplay.append(questionBox);

    })

}

populateQuesitons();


//fucntion to checkAnswer   
function checkAnswer(option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)

    if (optionIndex == correctAnswer) {
        score++;
        scoreDisplay.textContent = score;
    } else {
        score--
        scoreDisplay.textContent = score; 
    }

}
