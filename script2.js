function startCourse(title, videoUrl) {
  document.getElementById('player').style.display = 'block';
  document.getElementById('courseTitle').textContent = title;
  document.getElementById('videoFrame').src = videoUrl;

  // Hide all quizzes first
  document.getElementById('quiz-html').style.display = 'none';
  document.getElementById('quiz-css').style.display = 'none';
  document.getElementById('quiz-js').style.display = 'none';

  // Show the correct quiz
  if (title.includes('HTML')) {
    document.getElementById('quiz-html').style.display = 'block';
  } else if (title.includes('CSS')) {
    document.getElementById('quiz-css').style.display = 'block';
  } else if (title.includes('JavaScript')) {
    document.getElementById('quiz-js').style.display = 'block';
  }
}

function checkAnswer(element, isCorrect) {
  const siblings = element.parentElement.querySelectorAll('li');
  siblings.forEach(li => {
    li.classList.remove('correct', 'incorrect');
  });

  if (isCorrect) {
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
  }
}

function completeLesson() {
  const title = document.getElementById('courseTitle').textContent;
  const list = document.getElementById('progressList');

  // Check if already marked
  const exists = [...list.children].some(li => li.textContent === title);
  if (!exists) {
    const li = document.createElement('li');
    li.textContent = title;
    list.appendChild(li);
  }

  // Check if all 3 are complete to show certificate
  if (list.children.length >= 3) {
    document.getElementById('certificate').style.display = 'block';
  }
}

function downloadCertificate() {
  alert("🎉 Certificate Downloaded! (This can be replaced with actual download logic)");
}
