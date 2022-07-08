//score and question display variable
const scoreDisplay = document.getElementById("score-display")
const questionDisplay = document.getElementById("question-display")

//create an array of questions 
const questions = [
    {
        quiz: ["value", "extimate", "evaluate"],
        options: ["jury",'assess'],
        correct: 1
    },
    {
        quiz: ["deer", "elk", "doe"],
        options: ["cat",'moose'],
        correct: 1
    },
    {
        quiz: ["car", "truck", "motorcycle"],
        options: ["bus",'house'],
        correct: 0
    },
    {
        quiz: ["fear", "terror", "shock"],
        options: ["scary",'joy'],
        correct: 0
    },
    {
        quiz: ["water", "snow", "ice"],
        options: ["hamburger",'steam'],
        correct: 1
    }
]

//set and display score
let score = 0
scoreDisplay.textContent = score

//populate the quesiton

function populateQuesitons()  {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        questionBox.innerHTML = "Box!"
        questionDisplay.append(questionBox);

    })

}

populateQuesitons() ;
