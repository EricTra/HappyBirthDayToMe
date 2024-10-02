document.addEventListener('DOMContentLoaded', function() {
  const card = document.getElementById('card');
  const music = document.getElementById('background-music');

  // Thêm sự kiện click để lật thiệp và phát nhạc
  card.addEventListener('click', function() {
    card.classList.toggle('open');

    // Kiểm tra nếu nhạc chưa phát, bắt đầu phát nhạc
    if (music.paused) {
      music.play();
    }
  });

  // Customization
  const friendName = "Trà Quang Duy";
  const avatarUrl = "image/Danbo.jpg";
  const eventLocation = "Quán Buffet 3BIG, Đà Nẵng";
  const eventTime = "7:30 PM, ngày 04/10/2024";

  document.getElementById('friend-name').textContent = friendName;
  document.getElementById('friend-avatar').src = avatarUrl;
  document.getElementById('event-location').textContent = eventLocation;
  document.getElementById('event-time').textContent = eventTime;

  // Confetti
  const confettiCanvas = document.getElementById('confetti-canvas');
  const confettiCtx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confettiParticles = [];
  const colors = ['#ff6f61', '#ffcc00', '#ff7f50', '#ff1493', '#8a2be2'];

  for (let i = 0; i < 100; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      speed: Math.random() * 3 + 1,
      size: Math.random() * 8 + 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function drawConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiParticles.forEach(particle => {
      confettiCtx.beginPath();
      confettiCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      confettiCtx.fillStyle = particle.color;
      confettiCtx.fill();
    });
  }

  function updateConfetti() {
    confettiParticles.forEach(particle => {
      particle.y += particle.speed;
      if (particle.y > confettiCanvas.height) {
        particle.y = -particle.size;
      }
    });
  }

  function animateConfetti() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(animateConfetti);
  }

  animateConfetti();
});
