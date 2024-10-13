document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const messageInput = document.getElementById('message-input');

  // Add event listener for the submit event
  form.addEventListener('submit', (event) => {
    // Prevent the default form submission action
    event.preventDefault();

    // Manually reset each field by setting its value to an empty string
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Function to set the theme
  const setTheme = (isDark) => {
    body.classList.toggle('dark-mode', isDark);
    updateToggleButton(isDark);
  };

  // Function to update the toggle button
  const updateToggleButton = (isDark) => {
    darkModeToggle.textContent = isDark ? '☀️' : '🌙';
    darkModeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  };

  // Check system theme preference
  if (prefersDarkScheme.matches) {
    setTheme(true);
  } else {
    setTheme(false);
  }

  // Toggle theme when the button is clicked
  darkModeToggle.addEventListener('click', () => {
    setTheme(!body.classList.contains('dark-mode'));
  });

  // Listen for changes in system theme preference
  prefersDarkScheme.addEventListener('change', (e) => setTheme(e.matches));
});
