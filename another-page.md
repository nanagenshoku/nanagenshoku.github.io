---
layout: default
---

## You got rickrolled LOL.

![A surprise](./rickroll-roll.gif)

[back](./) <a src="./assets/js/puzzle.js" onclick="answer">secret.</a>

<script>
let answer = prompt("Know when I was released, for that is my joy.");

if (answer === "5162011") {
    alert("You shall pass");
    window.location.href = "sensei/Projects/nanagenshoku.github.io/page.md"
} else {
    alert("You disappoint me.");
}
</script>
