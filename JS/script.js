// Creating auto typed word using typed JS
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Full Stack Web Developer", "Python Developer", "Java Developer", "Ethical Hacker"],
        typeSpeed: 80,
        backSpeed: 25,
        loop: true,
        showCursor: true, // Set to false if you want to hide the cursor
        cursorChar: "|", // Customize the cursor character
        startDelay: 500, // Delay before starting to type
        backDelay: 2000, // Pause before backspacing
    };

    var typed = new Typed('.autoType', options);
});

// Creating a WhatsApp link
function openWhatsApp() {
    // type your actual phone number
    var phoneNumber = '+27766555433';
    
    // Create the WhatsApp link with the phone number
    var whatsappLink = 'https://api.whatsapp.com/send?phone=' + phoneNumber;

    // Open the link in a new tab
    window.open(whatsappLink, '_blank')};

// ****************************************************
// Creating a Map

// Initialize the map
var map = L.map('map').setView([-30.0444, 31.2357], 5); // Coordinates for Johannesburg 

// Set the maximum zoom level
map.setMaxZoom(18);

// Add a base layer (you can use different tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker for Johannesburg
var marker = L.marker([-30.0444, 31.2357]).addTo(map);
marker.bindPopup('Johannesburg, South Africa').openPopup();




