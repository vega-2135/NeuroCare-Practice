document.addEventListener('DOMContentLoaded', function() {
  // Function to highlight the active link
  function setActiveLink() {
      const links = document.querySelectorAll('.option');
      const path = window.location.pathname;
      
      links.forEach(link => {
          if (link.href === window.location.pathname) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  }

  // Call the function when the DOM is loaded
  setActiveLink();

  // Add event listener for hash changes
  window.addEventListener('hashchange', setActiveLink);
});
