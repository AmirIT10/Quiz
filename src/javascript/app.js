const heroSection = document.querySelector('.hero');
const mainSection = document.querySelector('.main');
const startButton = document.querySelector('#submit');
const questionElement = document.querySelector('.qustion > p');
const answerButtons = document.querySelectorAll('.test .btn');

const questionText = "What year was JavaScript created?";
const answers = ["1995", "1990", "2005", "2010"];

startButton.addEventListener('click', function(event) {
    if(!event.target.userName.value){
        alert('please enter your username')
        return;
    }
  event.preventDefault();
  heroSection.style.display = 'none';
  mainSection.style.display = 'flex';

  questionElement.textContent = questionText;
  answerButtons.forEach((button, index) => {
    button.firstChild.textContent = answers[index];
  });
});

answerButtons.forEach(button => {
    button.addEventListener('click', function() {
      answerButtons.forEach(btn => {
        btn.style.backgroundColor = '#FFFFFF';
        const checkmark = btn.querySelector('.checkmark');
        if (checkmark) {
          checkmark.style.display = 'none'; 
        }
      });
  
      button.style.backgroundColor = '#ABD1C6';
  
      const checkmark = button.querySelector('.checkmark');
      if (checkmark) {
        checkmark.style.display = 'block'; // نمایش تیک
      }
    });
  });
