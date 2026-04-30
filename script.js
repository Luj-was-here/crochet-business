// --- 1. SLIDER LOGIC FOR MOOD OCTOPUS ---
// We use a self-contained setup to ensure the images swap correctly
let currentOctoImage = 0; 
const octoImages = ["OctopusSide1.jpg", "OctopusSide2.jpg"];

function changeSlide(direction) {
    const imgElement = document.getElementById('octo-img-slider');
    
    if (!imgElement) {
        console.error("Image element not found! Check if ID is 'octo-img-slider'");
        return;
    }

    currentOctoImage += direction;

    // Loop logic using the length of the array
    if (currentOctoImage >= octoImages.length) {
        currentOctoImage = 0;
    } else if (currentOctoImage < 0) {
        currentOctoImage = octoImages.length - 1;
    }

    // Apply the new image source
    imgElement.src = octoImages[currentOctoImage];
    console.log("Octopus flipped to index: " + currentOctoImage);
}

// --- 2. MOON TOGGLE (DARK MODE) ---
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

// --- 4. LOCAL DATABASE (FORM HANDLING) ---
const contactForm = document.getElementById('contactForm');
const dbList = document.getElementById('db-list');

function showData() {
    if (!dbList) return;
    const data = JSON.parse(localStorage.getItem('crochetDB')) || [];
    // We only show the last 5 entries to keep the "Admin" view clean for the report
    dbList.innerHTML = data.slice(-5).map(item => `<li>Recent Entry: ${item.name} (${item.email})</li>`).join('');
}

if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        const userNameInput = document.getElementById('userName');
        const userEmailInput = document.getElementById('userEmail');

        const newEntry = {
            name: userNameInput.value,
            email: userEmailInput.value,
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

// Load database entries on startup
document.addEventListener('DOMContentLoaded', showData);
