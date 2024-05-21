document.addEventListener('DOMContentLoaded', function() {
    const toggleDescriptions = document.querySelectorAll('.toggle-description');
    
    toggleDescriptions.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const description = this.nextElementSibling;
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
});
