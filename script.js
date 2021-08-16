// Right Answer Variables //
let startButton = document.getElementById("beginQuiz")
let rightAnswerOne = document.getElementById("right1")
let rightAnswerTwo = document.getElementById("rightone")
let rightAnswerThree = document.getElementById("rightone1")
let rightAnswerFour = document.getElementById("right1one")
let rightAnswerFive = document.getElementById("rightone1one")
let rightAnswerSix = document.getElementById("right1twotwo")
// Wrong Answers Variables //
//question one//
let wrongAnswer1 = document.getElementById("wrong1")
let wrongAnswer2 = document.getElementById("wrong2")
let wrongAnswer3 = document.getElementById("wrong3")
//question two//
let wrongAnswer4 = document.getElementById("wrongone")
let wrongAnswer5 = document.getElementById("wrongtwo")
let wrongAnswer6 = document.getElementById("wrongthree")
//question three//
let wrongAnswer7 = document.getElementById("wrongone1")
let wrongAnswer8 = document.getElementById("wrongtwo2")
let wrongAnswer9 = document.getElementById("wrongthree3")
//question four//
let wrongAnswer10 = document.getElementById("wrong1one")
let wrongAnswer11 = document.getElementById("wrong2two")
let wrongAnswer12 = document.getElementById("wrong3three")
//question five//
let wrongAnswer13 = document.getElementById("wrongone1one")
let wrongAnswer14 = document.getElementById("wrongtwo2two")
let wrongAnswer15 = document.getElementById("wrongthree3three")
//question six//
let wrongAnswer16 = document.getElementById("wrong1oneone")
let wrongAnswer17 = document.getElementById("wrong2twotwo")
let wrongAnswer18 = document.getElementById("wrong3threethree")

// correct and incorrect variables //
var correct = document.getElementById("Correct")
var incorrect = document.getElementById("Incorrect")

//score and initials variables//
var score = document.getElementById("scores")
var done = document.getElementById("complete")
var initials = document.getElementById("enterInitials")
var scoreCard = document.getElementById("scoreCard")
var highScoresData = JSON.parse(localStorage.getItem("highScores")) || []
var submit = document.getElementById("submit")
var startOverNew = document.getElementById("startover")


//time clock variables//
let mainEl = document.querySelector(".timeClock")
let timeEl = document.querySelector(".timeleft")
let sCount = 0;


// Begin button event listener and function for seconds left//
startButton.addEventListener("click", function () {
    document.getElementById("beginQuiz").remove();
    document.getElementById("intro").remove();
    document.getElementById("question-one").classList.remove("hidden")

    let secondsLeft = 30;

    setInterval(function () {
        secondsLeft--;

        if (secondsLeft >= 0) {
            mainEl = document.getElementById("timeClock");
            mainEl.innerHTML = secondsLeft;

        }

        if (rightAnswerSix || wrongAnswer16 || wrongAnswer17 || wrongAnswer18) {

        }

        if (secondsLeft === 0) {
            clearInterval(secondsLeft);
            mainEl.textContent = " "
            sendMessage();
        }
    }, 1000);

})

//function for "times up" message//
function sendMessage() {
    timeEl.textContent = " ";
    let timeUp = document.createElement("img")
    timeUp.setAttribute("src", "images/timesUp.png");
    timeEl.appendChild(timeUp);
}

//correct answer displayed function//
function correctAnswer() {

    if (rightAnswerOne) {
        correct.classList.remove("hidden")

        setTimeout(function () {
            correct.classList.add("hidden")
        }, 1200)
    }
}

//incorrect answer displayed function//
function incorrectAnswer() {

    if (wrongAnswer1) {
        incorrect.classList.remove("hidden")

        setTimeout(function () {
            incorrect.classList.add("hidden")
        }, 1200)
    }
}


function objectNew () {
    var newScore = {
        initials: "i",
        score: "s",
    }
    highScoresData.push(newScore)
    //JSON.stringify the array and save it to localStorage
    localStorage.setItem("highScores", JSON.stringify(highScoresData))
}

function scoreList() {
    scoreCard.innerHTML = '';
    let newScores = JSON.parse(localStorage.setItem("highScores"))
    for (let i = 0; i < newScores.length; i++) {
        const list = newScores[i];
        let listScore = document.createElement("li");
        listScore.textContent = list.initials + " " + list.score;
        scoreCard.appendChild(listScore)

    }
}

// Right answers event listeners //
rightAnswerOne.addEventListener("click", function () {
    document.getElementById("question-two").classList.remove("hidden");
    document.getElementById("question-one").remove();
    correctAnswer();
})

rightAnswerTwo.addEventListener("click", function () {
    document.getElementById("question-three").classList.remove("hidden");
    document.getElementById("question-two").remove();
    correctAnswer();
})

rightAnswerThree.addEventListener("click", function () {
    document.getElementById("question-four").classList.remove("hidden");
    document.getElementById("question-three").remove();
    correctAnswer();
})

rightAnswerFour.addEventListener("click", function () {
    document.getElementById("question-five").classList.remove("hidden");
    document.getElementById("question-four").remove();
    correctAnswer();
})

rightAnswerFive.addEventListener("click", function () {
    document.getElementById("question-six").classList.remove("hidden");
    document.getElementById("question-five").remove();
    correctAnswer();
})

rightAnswerSix.addEventListener("click", function () {
    document.getElementById("complete").classList.remove("hidden")
    document.getElementById("question-six").remove();
    correctAnswer();
})
//End of right answers//

//question one wrong answers//
wrongAnswer1.addEventListener("click", function () {
    document.getElementById("question-two").classList.remove("hidden");
    document.getElementById("question-one").remove();
    incorrectAnswer();
})
wrongAnswer2.addEventListener("click", function () {
    document.getElementById("question-two").classList.remove("hidden");
    document.getElementById("question-one").remove();
    incorrectAnswer();
})
wrongAnswer3.addEventListener("click", function () {
    document.getElementById("question-two").classList.remove("hidden");
    document.getElementById("question-one").remove();
    incorrectAnswer();
})

//question two wrong answers//
wrongAnswer4.addEventListener("click", function () {
    document.getElementById("question-three").classList.remove("hidden");
    document.getElementById("question-two").remove();
    incorrectAnswer();
})
wrongAnswer5.addEventListener("click", function () {
    document.getElementById("question-three").classList.remove("hidden");
    document.getElementById("question-two").remove();
    incorrectAnswer();
})
wrongAnswer6.addEventListener("click", function () {
    document.getElementById("question-three").classList.remove("hidden");
    document.getElementById("question-two").remove();
    incorrectAnswer();
})

//question three wrong answers //
wrongAnswer7.addEventListener("click", function () {
    document.getElementById("question-four").classList.remove("hidden");
    document.getElementById("question-three").remove();
    incorrectAnswer();
})
wrongAnswer8.addEventListener("click", function () {
    document.getElementById("question-four").classList.remove("hidden");
    document.getElementById("question-three").remove();
    incorrectAnswer();
})
wrongAnswer9.addEventListener("click", function () {
    document.getElementById("question-four").classList.remove("hidden");
    document.getElementById("question-three").remove();
    incorrectAnswer();
})

//question four wrong answers//
wrongAnswer10.addEventListener("click", function () {
    document.getElementById("question-five").classList.remove("hidden");
    document.getElementById("question-four").remove();
    incorrectAnswer();
})
wrongAnswer11.addEventListener("click", function () {
    document.getElementById("question-five").classList.remove("hidden");
    document.getElementById("question-four").remove();
    incorrectAnswer();
})
wrongAnswer12.addEventListener("click", function () {
    document.getElementById("question-five").classList.remove("hidden");
    document.getElementById("question-four").remove();
    incorrectAnswer();
})

//question five wrong answers //
wrongAnswer13.addEventListener("click", function () {
    document.getElementById("question-six").classList.remove("hidden");
    document.getElementById("question-five").remove();
    incorrectAnswer();
})
wrongAnswer14.addEventListener("click", function () {
    document.getElementById("question-six").classList.remove("hidden");
    document.getElementById("question-five").remove();
    incorrectAnswer();
})
wrongAnswer15.addEventListener("click", function () {
    document.getElementById("question-six").classList.remove("hidden");
    document.getElementById("question-five").remove();
    incorrectAnswer();
})

//question six wrong answers//
wrongAnswer16.addEventListener("click", function () {
    document.getElementById("complete").classList.remove("hidden");
    document.getElementById("question-six").remove();
    incorrectAnswer();
})
wrongAnswer17.addEventListener("click", function () {
    document.getElementById("complete").classList.remove("hidden");
    document.getElementById("question-six").remove();
    incorrectAnswer();
})
wrongAnswer18.addEventListener("click", function () {
    document.getElementById("complete").classList.remove("hidden");
    document.getElementById("question-six").remove();
    incorrectAnswer();
})
//End Of Questions//

submit.addEventListener("click", function () {
    document.getElementById("complete").remove();
    document.getElementById("scores").classList.remove("hidden");
    scoreList();
})

startOverNew.addEventListener("click", function () {
    document.getElementById("scores").remove();
    document.getElementById("beginQuiz").classList.appendChild();
})

objectNew();