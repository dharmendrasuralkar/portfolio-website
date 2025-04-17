document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('click', function(event) {
  // Create a new bubble element
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // Position the bubble at the click location
  const posX = event.clientX;
  const posY = event.clientY;
  
  bubble.style.left = `${posX - 15}px`;  // Subtracting half the width to center the bubble
  bubble.style.top = `${posY - 15}px`;   // Subtracting half the height to center the bubble
  
  // Append the bubble to the body
  document.body.appendChild(bubble);
  
  // Remove the bubble after animation completes (2s)
  setTimeout(() => {
    bubble.remove();
  }, 2000);
});

<script>
  // Toggle dark mode
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check local storage to retain user's theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.classList.add('dark-mode');
  }

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.dark-mode').forEach(el => el.classList.toggle('dark-mode'));
    
    // Save the user's theme preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
</script>


