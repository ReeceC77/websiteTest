document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.link-container a');
  const contentContainer = document.getElementById('document-content');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const url = link.getAttribute('href'); // Use 'href' instead of 'data-url' for simplicity

      // Check if the URL is already loaded and visible
      if (contentContainer.querySelector('iframe')?.getAttribute('src') !== url) {
        loadDocument(url);
      }
    });
  });

  function loadDocument(url) {
    // Clear the current content
    contentContainer.innerHTML = '';

    // Embed the PDF using PDFObject
    PDFObject.embed(url, contentContainer, {
      height: '500px', // Adjust the height as needed
      width: '100%' // Full width
    });
  }
});
