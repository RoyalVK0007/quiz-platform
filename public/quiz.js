let questions = JSON.parse(localStorage.getItem("questions")) || [];
let currentQ = 0;

// Check if there are questions
if (questions.length === 0) {
  alert("No questions available! Add questions in Admin Panel.");
  window.location.href = "index.html";
}

// Display question
function showQuestion() {
  const quizContent = document.getElementById("quiz-content");
  quizContent.classList.add("fade-out");
  
  setTimeout(() => {
    document.getElementById("question-text").innerHTML = `<strong>Q.${currentQ + 1}</strong> ${questions[currentQ].question}`;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questions[currentQ].options.forEach((opt, i) => {
      let btn = document.createElement("button");
      btn.innerText = opt;
      btn.classList.add("option");
      btn.onclick = function() { checkAnswer(i); };
      optionsDiv.appendChild(btn);
    });

    // Update button text for last question
    const nextBtn = document.getElementById("next-btn");
    if (currentQ === questions.length - 1) {
      nextBtn.textContent = "Submit";
    } else {
      nextBtn.textContent = "Next";
    }
    
    nextBtn.style.display = "none";
    quizContent.classList.remove("fade-out");
    quizContent.classList.add("fade-in");
    
    setTimeout(() => {
      quizContent.classList.remove("fade-in");
    }, 300);
  }, 150);
}

let score = 0;
let answered = false;
let warningCount = 0;
let cheatingDetected = false;
let currentUser = localStorage.getItem('currentQuizUser') || 'Unknown User';
let warningLog = [];

function checkAnswer(selected) {
  // Remove previous selection
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  
  // Highlight selected option
  document.querySelectorAll('.option')[selected].classList.add('selected');
  
  if (!answered && selected === questions[currentQ].answer - 1) {
    score++;
  }
  answered = true;
  document.getElementById("next-btn").style.display = "block";
}

function saveScore() {
  const scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
  scores.push({
    name: currentUser,
    score: score,
    total: questions.length,
    date: new Date().toISOString()
  });
  localStorage.setItem('quizScores', JSON.stringify(scores));
  
  // Clear current user session
  localStorage.removeItem('currentQuizUser');
}

document.getElementById("next-btn").onclick = function() {
  currentQ++;
  answered = false;
  if (currentQ < questions.length) {
    showQuestion();
  } else {
    isQuizActive = false;
    document.body.classList.remove('quiz-active');
    
    // Exit fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
    } else if (document.msFullscreenElement) {
      document.msExitFullscreen();
    }
    
    saveScore();
    localStorage.setItem("quizScore", score);
    localStorage.setItem("totalQuestions", questions.length);
    
    setTimeout(() => {
      window.location.href = "result.html";
    }, 300);
  }
};

// Anti-cheating measures
let isQuizActive = true;

// Enable quiz protection
document.body.classList.add('quiz-active');

// Request fullscreen after page load
setTimeout(() => {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}, 1000);

// Fullscreen re-entry shortcut and admin access
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'F') {
    e.preventDefault();
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
  
  // Admin panel shortcut (works even during quiz)
  if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
    console.log('Admin shortcut triggered from quiz');
    window.location.href = 'admin-login.html';
  }
});

// Disable right-click and text selection
document.addEventListener('contextmenu', function(e) {
  if (isQuizActive) {
    e.preventDefault();
    showCheatingWarning('Right-click disabled during quiz');
  }
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
  if (isQuizActive) {
    e.preventDefault();
    showCheatingWarning('Text selection disabled during quiz');
  }
});

// Detect tab switching
document.addEventListener('visibilitychange', function() {
  if (isQuizActive && document.hidden) {
    showCheatingWarning('Tab switching detected');
  }
});

// Detect keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (isQuizActive) {
    // Block copy/paste shortcuts
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'a' || e.key === 'v')) {
      e.preventDefault();
      showCheatingWarning('Copy/paste shortcuts disabled');
    }
    // Block screenshot shortcuts
    if (e.key === 'PrintScreen' || 
        (e.ctrlKey && e.shiftKey && e.key === 'S') ||
        (e.metaKey && e.shiftKey && e.key === '3') ||
        (e.metaKey && e.shiftKey && e.key === '4')) {
      e.preventDefault();
      showCheatingWarning('Screenshots disabled during quiz');
    }
    // Block F12 and developer tools
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
      showCheatingWarning('Developer tools disabled during quiz');
    }
    // Block ESC key to prevent fullscreen exit (but don't warn)
    if (e.key === 'Escape') {
      e.preventDefault();
    }
    // Block Alt+Tab and Windows key
    if (e.altKey && e.key === 'Tab' || e.key === 'Meta') {
      e.preventDefault();
      showCheatingWarning('Task switching disabled during quiz');
    }
  }
});

function showCheatingWarning(reason) {
  console.log('Cheating warning triggered:', reason);
  warningCount++;
  
  // Log this warning
  warningLog.push({
    warning: warningCount,
    reason: reason,
    timestamp: new Date().toISOString(),
    questionNumber: currentQ + 1
  });
  
  console.log('Warning log:', warningLog);
  
  if (warningCount <= 3) {
    alert(`Warning ${warningCount}/3: ${reason}. Further attempts will be reported.`);
  }
  
  if (warningCount >= 3 && !cheatingDetected) {
    cheatingDetected = true;
    reportCheating();
  }
}

function reportCheating() {
  console.log('Reporting cheating for user:', currentUser);
  const cheatingReports = JSON.parse(localStorage.getItem('cheatingReports') || '[]');
  
  const report = {
    user: currentUser,
    email: localStorage.getItem('userEmail') || 'N/A',
    totalWarnings: warningCount,
    warningDetails: warningLog,
    reportedAt: new Date().toISOString(),
    currentQuestion: currentQ + 1,
    totalQuestions: questions.length
  };
  
  cheatingReports.push(report);
  console.log('Saving report:', report);
  console.log('All reports:', cheatingReports);
  
  localStorage.setItem('cheatingReports', JSON.stringify(cheatingReports));
  alert('Cheating detected! Admin has been notified. Quiz will continue.');
}

showQuestion();
