/// ScrollReveal Initialization
ScrollReveal({
    reset: true, // Animations repeat when elements scroll into view again
    distance: '50px', // Distance elements move
    duration: 800, // Animation duration in ms
    delay: 200, // Delay before animation starts
  });
  
  // Applying ScrollReveal to sections
  ScrollReveal().reveal('#home', { origin: 'top' });
  ScrollReveal().reveal('#about', { origin: 'left' });
  ScrollReveal().reveal('#services', { origin: 'right' });
  ScrollReveal().reveal('#portfolio', { origin: 'bottom' });
  ScrollReveal().reveal('#contact', { origin: 'top' });
  
  // Typed.js Initialization
  const typed = new Typed('.highlight', {
    strings: ['Graphics', 'Design', 'Solutions'], // Text to type
    typeSpeed: 100, // Typing speed in ms
    backSpeed: 50, // Backspacing speed
    backDelay: 1500, // Delay before backspacing
    loop: true, // Loop the typing animation
  });
  
  // Active Navigation Highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav ul li a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Offset for header height
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id'); // Get the ID of the current section
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove('active'); // Remove active class from all links
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active'); // Add active class to the current link
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
  
    portfolioItems.forEach(item => {
      item.addEventListener("click", () => {
        const projectId = item.getAttribute("data-id");
        displayProjectDetails(projectId);
      });
    });
  });
  
  function displayProjectDetails(projectId) {
    switch (projectId) {
      case "1":
        alert("Project 1: Web Development - This project involved building a responsive website.");
        break;
      case "2":
        alert("Project 2: Graphic Design - This project included creating branding and logo designs.");
        break;
      default:
        alert("Project details not available.");
    }
  }
  