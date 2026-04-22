---
layout: default
---

## You got rickrolled LOL.

![A surprise](./rickroll-roll.gif)

[back](./)

<a href="#" id="askQuestion()">secret</a>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const questionLink = document.getElementById("askQuestion()");
    
    if (questionLink) {
      questionLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        
        const questions = ["Know when I was released, for that is my joy.", "What comes after a wheeze?"];
        const randomIndex = Math.floor(Math.random() * questions.length);
        const selectedQuestion = questions[randomIndex];

        // Store what the user actually types
        let userInput = window['prompt'](selectedQuestion);

        if (selectedQuestion === "Know when I was released, for that is my joy.") {
            if (userInput === "5162011") {
                alert("You shall pass.");
                window.location.href = "./new-page.html";
            } else {
                alert("You disappoint me.");
            }
        } else if (selectedQuestion === "What comes after a wheeze?") {
            if (userInput === "Buddy Holly") {
                alert("Correct!");
                window.location.href = "./secret-page.html";
            } else {
                alert("Incorrect!");
            }
        }
      });
    }
});
</script>
