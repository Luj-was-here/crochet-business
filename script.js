// 1. DARK MODE
document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-mode');
};

// 2. READ MORE (Improved for multiple products)
function toggleReadMore(id, btn) {
    const moreText = document.getElementById(`more-text-${id}`);
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        btn.textContent = "Read less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read more";
    }
}

// 3. DATABASE LOGIC
const contactForm = document.getElementById('contactForm');
const dbList = document.getElementById('db-list');

function showData() {
    const data = JSON.parse(localStorage.getItem('crochetDB')) || [];
    dbList.innerHTML = data.map(item => `<li><strong>${item.name}:</strong> ${item.email}</li>`).join('');
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

    alert("Sent to Luj!");
    showData();
    contactForm.reset();
};

showData();
