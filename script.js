document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.link-container a');
  const contentContainer = document.getElementById('document-content');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const url = link.getAttribute('data-url');

      // Check if the URL is already loaded and visible
      if (contentContainer.querySelector('iframe')?.getAttribute('src') !== url) {
        loadDocument(url);
      }
    });
  });

  function loadDocument(url) {
    // Clear the current content
    contentContainer.innerHTML = '';

    // Load the document in an iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '500px'; // Adjust as needed
    iframe.style.border = 'none';
    contentContainer.appendChild(iframe);
  }
});
