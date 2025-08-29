let questions = JSON.parse(localStorage.getItem("questions")) || [];
let currentQ = 0;

// Check if there are questions
if (questions.length === 0) {
  alert("No questions available! Add questions in Admin Panel.");
  window.location.href = "index.html";
}

// Display question
function showQuestion() {
  document.getElementById("question-text").innerHTML = `<strong>Q.${currentQ + 1}</strong> ${questions[currentQ].question}`;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questions[currentQ].options.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");
    btn.onclick = function() { checkAnswer(i); };
    optionsDiv.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

let score = 0;

function checkAnswer(selected) {
  if (selected === questions[currentQ].answer - 1) {
    score++;
  }
  document.getElementById("next-btn").style.display = "block";
}

document.getElementById("next-btn").onclick = function() {
  currentQ++;
  if (currentQ < questions.length) {
    showQuestion();
  } else {
    localStorage.setItem("quizScore", score); // Store score
    localStorage.setItem("totalQuestions", questions.length);
    window.location.href = "result.html"; // Redirect to results page
  }
};


showQuestion();
