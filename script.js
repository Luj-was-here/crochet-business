// 1. THE OVAL TOGGLE SWITCH
const checkbox = document.getElementById('theme-toggle');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. READ MORE FUNCTION
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

// 3. DATABASE LOGIC
const contactForm = document.getElementById('contactForm');
const dbList = document.getElementById('db-list');

function showData() {
    const data = JSON.parse(localStorage.getItem('crochetDB')) || [];
    dbList.innerHTML = data.map(item => `<li>Sent: ${item.name} (${item.email})</li>`).join('');
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
    alert("Sent to Lujain!");
    showData();
    contactForm.reset();
};

showData();
