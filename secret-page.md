---
layout: default
---

## You got weezered

![surprise](./weezer.png)

try clicking something.

<audio src="./BuddyHolly.mp3" autoplay></audio>

<script>
  window.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    audio.play();
  }, { once: true }); // 'once' ensures it only triggers on the first click
</script>

[back](./)
