document.addEventListener('DOMContentLoaded', () => {
    // Handle quiz form submission
    const form = document.getElementById('quiz-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
  
        let score = 0;
  
        // Define correct answers
        const correctAnswers = {
          q1: 'C', // Paris
          q2: 'B', // Harper Lee
        };
  
        // Calculate score
        Object.keys(correctAnswers).forEach((key) => {
          const selected = document.querySelector(`input[name="${key}"]:checked`);
          if (selected && selected.value === correctAnswers[key]) {
            score++;
          }
        });
  
        // Redirect to results page with score
        window.location.href = `results.html?score=${score}`;
      });
    }
  
    // Display score on results page
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const score = urlParams.get('score');
  
    if (score !== null) {
      const resultText = `Congratulations! Your score is ${score}.`;
      document.getElementById('result-text').textContent = resultText;
    }
  });
  