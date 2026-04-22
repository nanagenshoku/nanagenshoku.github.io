---
layout: default
---

## You got weezered

![surprise](./weezer.png)

try clicking something.

<audio src="./Buddy%20Holly.mp3" autoplay loop></audio>

<script>
  window.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    audio.play();
  }, { once: true }); // 'once' ensures it only triggers on the first click
</script>

[back](./another-page.html)
