document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.link-container a');
  const contentContainer = document.getElementById('document-content');

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Default behavior is to block link navigation

      // Check if the URL is already loaded and visible
      const url = link.getAttribute('data-url');
      if (contentContainer.querySelector('iframe')?.getAttribute('src') !== url) {
        loadDocument(url);
      }
    });
  });

  // Function to load the document in an iframe
  function loadDocument(url) {
    // Clear the current content
    contentContainer.innerHTML = '';

    // Load the document in an iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '50%';
    iframe.style.height = '600px'; // Adjust as needed
    iframe.style.border = 'none';
    contentContainer.appendChild(iframe);
  }

  // Allow link navigation when clicking outside of a link
  document.addEventListener('click', (event) => {
    // Check if the clicked element is not a link
    if (!event.target.closest('.link-container a')) {
      // Allow default link behavior
      return true; // If it's not a link, the event is not prevented
    }
  });
});
