document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');

    // Check for saved user preference in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Toggle the dark mode on button click
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save user preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
