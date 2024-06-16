document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.dropdown-icon').addEventListener('click', function() {
      document.querySelector('.dropdown-links').classList.toggle('show');
    });
  
    // Close the dropdown menu when a link is clicked
    document.querySelectorAll('.dropdown-links li a').forEach(function(link) {
      link.addEventListener('click', function() {
        document.querySelector('.dropdown-links').classList.remove('show');
      });
    });
  });
  
  