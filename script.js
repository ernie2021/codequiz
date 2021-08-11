// Right Answer Variables //
let startButton = document.getElementById("beginQuiz")
let rightAnswerOne = document.getElementById("right1")
let rightAnswerTwo = document.getElementById("rightone")
let rightAnswerThree = document.getElementById("rightone1")
let rightAnswerFour = document.getElementById("right1one")
let rightAnswerFive = document.getElementById("rightone1one")
let rightAnswerSix = document.getElementById("right1twotwo")
// Wrong Answers Variables //
let wrongAnswer = document.getElementById("wrongone")

let mainEl = document.querySelector(".timeClock")
let timeEl = document.querySelector(".timeleft")
let sCount = 0;

startButton.addEventListener("click", function () {
    document.getElementById("beginQuiz").remove();
    document.getElementById("question-one").classList.remove("hidden")

    let secondsLeft = 45;

    setInterval(function () {
        secondsLeft--;

        if (secondsLeft >= 0) {
            mainEl = document.getElementById("timeClock");
            mainEl.innerHTML = secondsLeft;

        }

        if (secondsLeft === 0) {
            clearInterval(secondsLeft);
            mainEl.textContent = " "
            sendMessage();
        }
    }, 1000);

})


function sendMessage() {
    timeEl.textContent = " ";
    let timeUp = document.createElement("img")
    timeUp.setAttribute("src", "images/timesUp.png");
    timeEl.appendChild(timeUp);
}

function wronganswers() {
    if (wrongAnswers === true) {
    alert("Incorrect")
    }
}


rightAnswerOne.addEventListener("click", function () {
    document.getElementById("question-two").classList.remove("hidden");
    document.getElementById("question-one").remove();
    alert("Correct!");
})

rightAnswerTwo.addEventListener("click", function () {
    document.getElementById("question-three").classList.remove("hidden");
    document.getElementById("question-two").remove();
    alert("Correct!")
})

rightAnswerThree.addEventListener("click", function () {
    document.getElementById("question-four").classList.remove("hidden");
    document.getElementById("question-three").remove();
    alert("Correct!")
})

rightAnswerFour.addEventListener("click", function () {
    document.getElementById("question-five").classList.remove("hidden");
    document.getElementById("question-four").remove();
    alert("Correct!")
})

rightAnswerFive.addEventListener("click", function () {
    document.getElementById("question-six").classList.remove("hidden");
    document.getElementById("question-five").remove();
    alert("Correct!")
})

rightAnswerSix.addEventListener("click", function () {
    document.getElementById("complete").classList.remove("hidden")
    document.getElementById("question-six").remove();
    alert("Correct!")
})
