document.addEventListener("DOMContentLoaded", function() {
    const question = document.getElementById("askQuestion()");
    
    if (question) {
      question.addEventListener("click", function(event) {
        event.preventDefault(); // Stop the page from jumping
        
        const questions = ["Know when I was release, for that is my joy.", "What comes after a wheeze?"];
const randomIndex = Math.round(Math.random() * questions.length);

        let answer = ["5162011", "Buddy Holly"]

window['prompt'](questions[randomIndex]);

 if (questions = "Know when I was released, for that is my joy.") {
    if (answer = "5162011") {
      alert("You shall pass.")
      window.location.href = "./new-page.html"
    } else {
          alert("You disappoint me.")
    }
 } else if (questions = "What comes after a wheeze?") {
     if (answer = "Buddy Holly") {
       alert("Correct!")
       window.location.href = "./secret-page.html"
     } else {
       alert("Incorrect!")
     }
 }
      });
    }
  });
