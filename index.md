---
layout: default
---

A language enthusiast. Terraria, Oblivion, Team Fortress peak

## Bio

* Birth: 24/8/11
* Born in Indonesia.
* Half-javanese half-buginese.
* Cannot speak buginese nor javanese.

## Education

* Bunga Bangsa Kindergarten \| Samarinda, Indonesia \| Graduated: 2018
* Homeschooled until 2023
* Kampung Santri Junior High School \| Cilembu, Indonesia \| Expected: July 2026

## Job

* Currently unemployed


<a href="#" id="askQuestion()" class="secret">secret</a>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const questionLink = document.getElementById("askQuestion()");
    
    if (questionLink) {
      questionLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        
        const questions = ["Know when I was released, for that is my joy.", "What comes after a wheeze?", "What did Rick do in saturday morning?"];
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
        } else if (selectedQuestion === "What did Rick do in saturday morning?") {
            if (userInput === "Rolling") {
                alert("Correct!");
                window.location.href = "./another-page.html";
            } else {
                alert("Incorrect!")
            }
        }
      });
    }
});
</script>
