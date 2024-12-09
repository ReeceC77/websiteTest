document.addEventListener("DOMContentLoaded", () => {
  const imageLinks = document.querySelectorAll('.image-link');

  imageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior

      const contentId = link.getAttribute('data-content');
      const contentSection = document.getElementById(contentId);

      // Toggle visibility of the corresponding section
      if (contentSection.style.display === 'block') {
        contentSection.style.display = 'none';
      } else {
        // Hide other sections
        document.querySelectorAll('.info-section').forEach(section => {
          section.style.display = 'none';
        });
        // Show the selected section
        contentSection.style.display = 'block';
      }
    });
  });
});
