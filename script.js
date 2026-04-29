// 1. DARK MODE
document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-mode');
};

// 2. READ MORE
document.getElementById('read-more-btn').onclick = function() {
    const more = document.getElementById('more-text');
    if (more.style.display === "none") {
        more.style.display = "inline";
        this.textContent = "Read Less";
    } else {
        more.style.display = "none";
        this.textContent = "Read More";
    }
};

// 3. LOCAL DATABASE LOGIC
const contactForm = document.getElementById('contactForm');
const dbList = document.getElementById('db-list');

// Function to show data from the database
function showData() {
    const data = JSON.parse(localStorage.getItem('crochetDB')) || [];
    dbList.innerHTML = data.map(item => `<li>${item.name} (${item.email}) - Saved: ${item.time}</li>`).join('');
}

contactForm.onsubmit = (e) => {
    e.preventDefault();
    const newEntry = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        time: new Date().toLocaleString()
    };

    // Save to LocalStorage Database
    let db = JSON.parse(localStorage.getItem('crochetDB')) || [];
    db.push(newEntry);
    localStorage.setItem('crochetDB', JSON.stringify(db));

    alert("Data recorded in database!");
    showData();
    contactForm.reset();
};

// Show data when page loads
showData();
