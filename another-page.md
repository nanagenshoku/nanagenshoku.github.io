---
layout: default
---

## You got rickrolled LOL.

![A surprise](./rickroll-roll.gif)

[back](./)

<a href="#" id="askQuestion()">secret</a>

<script>
  // Wait for the page to load
  document.addEventListener("DOMContentLoaded", function() {
    const question = document.getElementById("askQuestion()");
    
    if (question) {
      question.addEventListener("click", function(event) {
        event.preventDefault(); // Stop the page from jumping
        
        let answer = prompt("Know when I was released, for that is my joy.");

 if (answer === "5162011") {
     alert("You shall pass");
     window.location.href = "new-page.html"
 } else {
     alert("You disappoint me.");
 }
      });
    }
  });
</script>
