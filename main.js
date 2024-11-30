
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // Programmatically play audio after user interaction
  document.addEventListener('click', function () {
    const audio = document.getElementById('audioPlayer');
    audio.play().catch(error => {
        console.error('Playback failed:', error);
    });
}, { once: true }); // Ensures the handler runs only once
