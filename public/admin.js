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
  let editIndex = parseInt(document.getElementById("edit-index").value);

  let newQuestion = { question, options, answer };
  let storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];

  if (editIndex >= 0) {
    storedQuestions[editIndex] = newQuestion;
    alert("Question Updated!");
  } else {
    storedQuestions.push(newQuestion);
    alert("Question Added!");
  }

  localStorage.setItem("questions", JSON.stringify(storedQuestions));
  document.getElementById("question-form").reset();
  cancelEdit();
  loadQuestions();
});

function loadQuestions() {
  let storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
  let list = document.getElementById("questions-list");
  list.innerHTML = "";

  if (storedQuestions.length === 0) {
    list.innerHTML = '<p class="no-questions">No questions added yet.</p>';
    return;
  }

  storedQuestions.forEach((q, i) => {
    let item = document.createElement("div");
    item.className = "question-item";
    item.innerHTML = `
      <div class="question-number">Q${i + 1}</div>
      <div class="question-text" onclick="showQuestionDetails(${i})">${q.question}</div>
      <div class="question-actions">
        <button onclick="editQuestion(${i})" class="edit-btn">Edit</button>
        <button onclick="deleteQuestion(${i})" class="delete-btn">Delete</button>
      </div>
    `;
    list.appendChild(item);
  });
}

function showQuestionDetails(index) {
  const questions = JSON.parse(localStorage.getItem('questions') || '[]');
  const q = questions[index];
  const correctLetter = ['A', 'B', 'C', 'D'][q.answer - 1];
  
  alert(`Question ${index + 1}:\n\n${q.question}\n\nA) ${q.options[0]}\nB) ${q.options[1]}\nC) ${q.options[2]}\nD) ${q.options[3]}\n\nCorrect Answer: ${correctLetter}`);
}

loadQuestions();
