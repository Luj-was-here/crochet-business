// --- 1. MOOD FLIP OCTOPUS SLIDER ---
// This uses a toggle state to switch specifically between your two octopus photos
let currentOctoImage = 1;

function changeSlide(direction) {
    const imgElement = document.getElementById('octo-img-slider');
    
    if (!imgElement) {
        console.error("The ID 'octo-img-slider' was not found in your HTML.");
        return;
    }

    // Forced flip between your specific filenames
    if (currentOctoImage === 1) {
        currentOctoImage = 2;
        imgElement.src = "OctopusSide2.jpg";
    } else {
        currentOctoImage = 1;
        imgElement.src = "OctopusSide1.jpg";
    }
}

// --- 2. DARK MODE (MOON TOGGLE) ---
const toggle = document.getElementById('theme-toggle');
if (toggle) {
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// --- 3. PRODUCT DESCRIPTION TOGGLE (READ MORE) ---
function toggleText(id, btn) {
    const text = document.getElementById(id);
    if (!text) return;

    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "inline";
        btn.textContent = "Read less";
    } else {
        text.style.display = "none";
        btn.textContent = "Read more";
    }
}

// --- 4. LOCAL STORAGE DATABASE (CONTACT FORM) ---
const contactForm = document.getElementById('contactForm');
const dbList = document.getElementById('db-list');

// Function to display saved entries from the browser database
function showData() {
    if (!dbList) return;
    const data = JSON.parse(localStorage.getItem('crochetDB')) || [];
    // Displays entries as a list for your project report evidence
    dbList.innerHTML = data.map(item => `<li>Entry: ${item.name} (${item.email})</li>`).join('');
}

// Logic to save data when the user clicks "Send"
if (contactForm) {
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
}

// Ensure database entries appear as soon as the page loads
document.addEventListener('DOMContentLoaded', showData);
