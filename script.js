document.addEventListener("DOMContentLoaded", function() {
    const bioText = document.getElementById("bio-text");
    const phrases = [
        "software engineer student",
        "mobile web full stack developer",
        "junior data scientist"
    ];
    let currentPhraseIndex = 0;

    function animateText(phrase) {
        let letterIndex = 0;
        bioText.classList.add("animation");  

        bioText.innerHTML = `Hi, my name is Melek. I am <br class="line-break">`; 

        
         const interval = setInterval(() => {
            bioText.innerHTML += phrase[letterIndex]; 
            letterIndex++;

            if (letterIndex === phrase.length) {
                clearInterval(interval); 
                setTimeout(() => {
                    bioText.classList.remove("animation"); 
                    setTimeout(() => {
                        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                        animateText(phrases[currentPhraseIndex]);  
                    }, 3000); 
                }, 2000); 
            }
        }, 100); 
    }

    animateText(phrases[currentPhraseIndex]); 
});
function afficherImageAvecTransition(idImage, tempsAttente) {
    
    const image = document.getElementById(idImage);
  
    
    image.style.opacity = 0;
  
    
    const afficher = () => {
      
      image.style.transition = `opacity ${tempsAttente}s ease-in-out`;
      image.style.opacity = 1;
    };
  
    
    setTimeout(afficher, tempsAttente * 1000);
  }
  function afficherSecondeLigneAuScroll() {
    const secondeLigne = document.getElementById("secondRow"); // Sélectionner la ligne avec l'ID
  
    if (secondeLigne) {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
        
            if (entry.isIntersecting) {
                secondeLigne.classList.remove("hidden");
            }
        });
    
        observer.observe(secondeLigne);
    } else {
        console.error('La seconde ligne est introuvable.');
    }
}
  
window.addEventListener("DOMContentLoaded", afficherSecondeLigneAuScroll); // Exécuter au chargement de la page

const correctAnswers = {
    q1: 'b', 
    q2: 'a', 
    q3: 'c', 
    q4: 'a', 
    q5: 'b', 
    q6: 'a', 
    q7: 'b', 
    q8: 'a', 
    q9: 'c', 
    q10: 'a', 
    q11: 'b', 
    q12: 'a', 
    q13: 'c', 
    q14: 'b', 
    q15: 'b'  
};


function submitQuiz() {
    let score = 0;
    const totalQuestions = 15;
    const userAnswers = new FormData(document.getElementById('quizForm'));
    console.log(userAnswers);
    const correctAnswersList = [];

    
    for (let i = 1; i <= totalQuestions; i++) {
        const question = 'q' + i;
        const userAnswer = userAnswers.get(question);

        
        if (userAnswer === correctAnswers[question]) {
            score++;
            correctAnswersList.push(`Question ${i}: Correct`);
        } else {
            correctAnswersList.push(`Question ${i}: Incorrect`);
        }
    }

    
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Your score: ${score} / ${totalQuestions}`;

    
    const correctAnswersElement = document.getElementById('correctAnswers');
    correctAnswersElement.innerHTML = '';
    correctAnswersList.forEach((answer) => {
        const listItem = document.createElement('li');
        listItem.textContent = answer;
        correctAnswersElement.appendChild(listItem);
    });

    
    const resultSection = document.getElementById('result');
    resultSection.style.display = 'block';
}
// Function to animate the progress bar
function animateProgressBar(skillId, percentage) {
    const skillElement = document.getElementById(skillId);
    let width = 0;
    const interval = setInterval(() => {
        if (width >= percentage) {
            clearInterval(interval);
        } else {
            width++;
            skillElement.style.width = width + '%';
            skillElement.textContent = width + '%';
            console.log(`Width: ${width}%`); // Log the width to debug
        }
    }, 10); // Adjust the speed of animation by changing the interval time
}

// Call the function to animate the HTML skill progress bar
document.addEventListener('DOMContentLoaded', () => {
    animateProgressBar('html-skill', 70);
});
