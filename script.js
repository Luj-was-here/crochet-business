// --- 1. FIREBASE INITIALIZATION ---
const firebaseConfig = {
  apiKey: "AIzaSyAWhI_E5vvVfXHRExjyArOOK14bvItGpBw",
  authDomain: "lujaincrochet-8a8c8.firebaseapp.com",
  databaseURL: "https://lujaincrochet-8a8c8-default-rtdb.firebaseio.com",
  projectId: "lujaincrochet-8a8c8",
  storageBucket: "lujaincrochet-8a8c8.firebasestorage.app",
  messagingSenderId: "486052458375",
  appId: "1:486052458375:web:96cc3ad2616b78707aad22",
  measurementId: "G-7B2HYLZ91W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// --- 2. MOOD FLIP OCTOPUS SLIDER ---
let currentOctoImage = 1;

function changeSlide(direction) {
    const imgElement = document.getElementById('octo-img-slider');
    
    if (!imgElement) {
        console.error("The ID 'octo-img-slider' was not found.");
        return;
    }

    if (currentOctoImage === 1) {
        currentOctoImage = 2;
        imgElement.src = "OctopusSide2.jpg";
    } else {
        currentOctoImage = 1;
        imgElement.src = "OctopusSide1.jpg";
    }
}

// --- 3. DARK MODE (MOON TOGGLE) ---
const toggle = document.getElementById('theme-toggle');
if (toggle) {
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// --- 4. PRODUCT DESCRIPTION TOGGLE (READ MORE) ---
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

// --- 5. REAL DATABASE LOGIC (CLOUD STORAGE) ---
const contactForm = document.getElementById('contactForm');
const dbList = document.getElementById('db-list');

// Function to pull data from Firebase Cloud
function showData() {
    if (!dbList) return;

    database.ref('orders').on('value', (snapshot) => {
        const data = snapshot.val();
        dbList.innerHTML = ""; // Clear list
        
        if (data) {
            for (let id in data) {
                let item = data[id];
                // Displaying cloud data on the page
                dbList.innerHTML += `<li>Entry: ${item.name} (${item.email}) - ${item.time}</li>`;
            }
        }
    });
}

// Logic to save data to Cloud when "Send" is clicked
if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        
        const newEntry = {
            name: document.getElementById('userName').value,
            email: document.getElementById('userEmail').value,
            message: document.getElementById('userMessage').value || "No message",
            time: new Date().toLocaleString()
        };

        // Push to Firebase Realtime Database
        database.ref('orders').push(newEntry)
            .then(() => {
                alert("Success! Your order is recorded in the cloud database.");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("Cloud Error: ", error);
                alert("Database error. Check console.");
            });
    };
}

// Load cloud data on startup
document.addEventListener('DOMContentLoaded', showData);
