// 1. MOON TOGGLE
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. READ MORE & OCTOPUS FLIP
function toggleText(id, btn) {
    const text = document.getElementById(id);
    const octoImg = document.getElementById('octo-img');

    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "inline";
        btn.textContent = "Read less";
        // If they click the octopus, show the mad side!
        if(id === 'text1') octoImg.src = 'OctopusSide2.jpg';
    } else {
        text.style.display = "none";
        btn.textContent = "Read more";
        // Flip back to happy
        if(id === 'text1') octoImg.src = 'OctopusSide1.jpg';
    }
}

// 3. DATABASE
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
    alert("Sent! I'll get back to you soon.");
    showData();
    contactForm.reset();
};

showData();
