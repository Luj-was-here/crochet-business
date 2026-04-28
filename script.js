// 1. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Read More Functionality
const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.getElementById('more-text');

readMoreBtn.addEventListener('click', () => {
    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreText.classList.add('hidden');
        readMoreBtn.textContent = 'Read More';
    }
});

// 3. Database Handling (Conceptual)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would add your Firebase or Mock Database logic
    alert('Form submitted! This data is being recorded in the database.');
});
