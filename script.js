let startButton = document.getElementById("beginQuiz")
let startQuiz = document.querySelector(".startTest")
let rightAnswerOne = document.getElementById("right1")
let rightAnswerTwo = document.getElementById("rightone")
let rightAnswerThree = document.getElementById("rightone1")
let rightAnswerFour = document.getElementById("right1one")
let rightAnswerFive = document.getElementById("rightone1one")
let rightAnswerSix = document.getElementById("right1twotwo")
var wrongAnswersOne = document.getElementById("wrong1")
var wrongAnswersSeven = document.getElementById("wrong2")
var wrongAnswersTwo = document.getElementById["wrongone","wrongtwo","wrongthree"]
var wrongAnswersThree = document.getElementById["wrongone1","wrongtwo2","wrongthree3"]
var wrongAnswersFour = document.getElementById["wrong1one","wrong2two","wrong3three"]
var wrongAnswersFive = document.getElementById["wrongone1one","wrongtwo2two","wrongthree3three"]
var wrongAnswersSix = document.getElementById["wrong1oneone", "wrong2twotwo", "wrong3threthre"]
var mainEl = document.querySelector(".timeClock")
var timeEl = document.querySelector(".timeleft")

startQuiz.addEventListener("click", removeEl)

function removeEl() {
    document.querySelector(".startTest").remove();
    document.getElementById("question-one").classList.remove("hidden")
}

startButton.addEventListener("click", function () {
    var secondsLeft = 5;
    setInterval(function () {
        secondsLeft--;
        
       if (secondsLeft >= 0) {
          mainEl = document.getElementById("timeClock");
          mainEl.innerHTML = secondsLeft;
        }
        
       if (secondsLeft === 0) {
        clearInterval(secondsLeft);  
        sendMessage();
    }
    }, 1000);
});
 

function sendMessage() {
    timeEl.textContent = " ";
    var timeUp = document.createElement("img")
    timeUp.setAttribute("src", "images/timesUp.png");
    timeEl.appendChild(timeUp);
}


setTime();

rightAnswerOne.addEventListener("click", function () {
    document.getElementById("question-two").classList.remove("hidden");
    document.getElementById("question-one").remove();
    var h3El = document.querySelector("#h3");
    h3El.innerText = "Correct!"
})

rightAnswerTwo.addEventListener("click", function () {
    document.getElementById("question-three").classList.remove("hidden");
    document.getElementById("question-two").remove();
    var h3El = document.querySelector("#h3");
    h3El.innerText = "Correct!"
})

rightAnswerThree.addEventListener("click", function () {
    document.getElementById("question-four").classList.remove("hidden");
    document.getElementById("question-three").remove();
    var h3El = document.querySelector("#h3");
    h3El.innerText = "Correct!"
})

rightAnswerFour.addEventListener("click", function () {
    document.getElementById("question-five").classList.remove("hidden");
    document.getElementById("question-four").remove();
    var h3El = document.querySelector("#h3");
    h3El.innerText = "Correct!"
})

rightAnswerFive.addEventListener("click", function () {
    document.getElementById("question-six").classList.remove("hidden");
    document.getElementById("question-five").remove();
    var h3El = document.querySelector("#h3")
    h3El.innerText = "Correct!"
})

rightAnswerSix.addEventListener("click", function () {
    document.getElementById("complete").classList.remove("hidden")
    document.getElementById("question-six").remove();
    var h3El = document.querySelector("#h3")
    h3El.innerText = "Correct!"
})


wrongAnswersOne.addEventListener("click", function () {
        document.getElementById("question-one").remove();
        document.getElementById("question-two").classList.remove("hidden")
        var h3El = document.querySelector("#h3")
        h3El.innerText = "Incorrect!"
})

wrongAnswersTwo.addEventListener("click", function () {
    document.getElementById("question-three").classList.remove("hidden")
    document.getElementById("question-two").remove();
    var h3El = document.querySelector("#h3")
    h3El.innerHTML = "Incorrect"
})


