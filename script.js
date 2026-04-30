// 1. MOON TOGGLE LOGIC
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. READ MORE LOGIC
function toggleText(id, btn) {
    const text = document.getElementById(id);
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "inline";
        btn.textContent = "Read less";
    } else {
        text.style.display = "none";
        btn.textContent = "Read more";
    }
}

// 3. DATABASE (LOCAL STORAGE)
const contactForm = document.getElementById('contactForm');
const dbList = document.getElementById('db-list');

function showData() {
    const data = JSON.parse(localStorage.getItem('crochetDB')) || [];
    dbList.innerHTML = data.map(item => `<li>Entry: ${item.name} (${item.email})</li>`).join('');
}

contactForm.onsubmit = (e) => {
    e.preventDefault();
    const newEntry = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        time: new Date().toLocaleString()
    };
    let db = JSON.parse(localStorage.getItem('crochetDB')) || [];
    db.push(newEntry);
    localStorage.setItem('crochetDB', JSON.stringify(db));
    
    alert("Sent to Lujain! I'll get back to you soon.");
    showData();
    contactForm.reset();
};

// Initialize the display on load
showData();
