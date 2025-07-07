// Theme initialization script - runs before page render
(function() {
  const LIGHT_THEME = 'manufood-light';
  const DARK_THEME = 'manufood-dark';
  const STORAGE_KEY = 'theme';

  // Get saved theme or default
  function getSavedTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === LIGHT_THEME || saved === DARK_THEME ? saved : LIGHT_THEME;
    } catch (e) {
      return LIGHT_THEME;
    }
  }

  // Set theme immediately to prevent flash
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme === DARK_THEME ? 'dark' : 'light';
    
    // Debug log
    console.log('Theme set to:', theme);
    console.log('HTML data-theme attribute:', document.documentElement.getAttribute('data-theme'));
  }

  // Initialize theme immediately
  const theme = getSavedTheme();
  setTheme(theme);

  // Listen for storage changes (theme changes in other tabs)
  window.addEventListener('storage', function(e) {
    if (e.key === STORAGE_KEY && e.newValue) {
      setTheme(e.newValue);
    }
  });

  // Debug - check if themes are loaded after a short delay
  setTimeout(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    console.log('Current theme:', theme);
    console.log('Primary color:', computedStyle.getPropertyValue('--p'));
    console.log('Background color:', computedStyle.getPropertyValue('--b1'));
    console.log('Available CSS properties:', Object.keys(computedStyle).filter(key => key.startsWith('--')));
  }, 100);
})();