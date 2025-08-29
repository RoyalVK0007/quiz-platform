document.getElementById("question-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let question = document.getElementById("question").value;
  let options = [
    document.getElementById("option1").value,
    document.getElementById("option2").value,
    document.getElementById("option3").value,
    document.getElementById("option4").value
  ];
  let answer = document.getElementById("answer").value;

  let newQuestion = { question, options, answer };

  // Retrieve existing questions or create empty array
  let storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
  storedQuestions.push(newQuestion);

  // Save updated questions list to localStorage
  localStorage.setItem("questions", JSON.stringify(storedQuestions));

  alert("Question Added!");
  document.getElementById("question-form").reset();
  loadQuestions();
});

// Function to display added questions
function loadQuestions() {
  let storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
  let list = document.getElementById("questions-list");
  list.innerHTML = "";

  storedQuestions.forEach((q, i) => {
    let item = document.createElement("li");
    item.innerText = `${i + 1}. ${q.question}`;
    list.appendChild(item);
  });
}

loadQuestions(); // Load questions on page load
