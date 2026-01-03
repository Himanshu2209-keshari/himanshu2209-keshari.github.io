// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-out-cubic'
});

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const originalText = typingElement.textContent;
    typeWriter(typingElement, originalText, 150);
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(2, 6, 23, 0.98)';
    nav.style.boxShadow = '0 2px 20px rgba(56, 189, 248, 0.1)';
  } else {
    nav.style.background = 'rgba(2, 6, 23, 0.95)';
    nav.style.boxShadow = 'none';
  }
});

// Profile picture click handler
document.addEventListener('DOMContentLoaded', () => {
  const profileImg = document.getElementById('profileImage');
  if (profileImg) {
    profileImg.addEventListener('click', () => {
      // You can replace this URL with your actual profile picture
      const newImageUrl = prompt('Enter your profile picture URL:', profileImg.src);
      if (newImageUrl && newImageUrl.trim() !== '') {
        profileImg.src = newImageUrl;
        localStorage.setItem('profileImage', newImageUrl);
      }
    });
    
    // Load saved profile image
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      profileImg.src = savedImage;
    }
  }
});

// Skill items hover effect with random colors
const skillItems = document.querySelectorAll('.skill-item');
const colors = ['#38bdf8', '#06b6d4', '#0ea5e9', '#0284c7', '#0369a1'];

skillItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    item.style.borderColor = randomColor;
    item.style.color = randomColor;
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.borderColor = 'rgba(56, 189, 248, 0.3)';
    item.style.color = '#fff';
  });
});

// Add floating animation to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  card.classList.add('float-animation');
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
  .float-animation {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .project-card:nth-child(even) {
    animation-direction: reverse;
  }
`;
document.head.appendChild(style);