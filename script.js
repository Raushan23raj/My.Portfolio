// Select all navbar links
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event to each link
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump

    // Get target section
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Smooth scroll to the section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});



