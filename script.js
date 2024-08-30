document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('quiz-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault(); 
  
        let score = 0;
  
        
        const correctAnswers = {
          q1: 'C', 
          q2: 'B', 
        };
  
        
        Object.keys(correctAnswers).forEach((key) => {
          const selected = document.querySelector(`input[name="${key}"]:checked`);
          if (selected && selected.value === correctAnswers[key]) {
            score++;
          }
        });
  
        
        window.location.href = `results.html?score=${score}`;
      });
    }
  
   
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const score = urlParams.get('score');
  
    if (score !== null) {
      const resultText = `Congratulations! Your score is ${score}.`;
      document.getElementById('result-text').textContent = resultText;
    }
  });
  
