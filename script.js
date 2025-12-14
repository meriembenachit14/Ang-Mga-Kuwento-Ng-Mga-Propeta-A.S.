// Dark/Light Mode Toggle
const toggleThemeBtn = document.getElementById('toggleTheme') || document.getElementById('toggle-theme');

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save preference in localStorage
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark'){
    document.body.classList.add('dark-mode');
  }
});
