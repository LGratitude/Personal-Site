//Changing the color of the Navbar when you scroll down
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });

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
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // You can choose a different map style
      center: [28.0473, -26.2041], // Johannesburg coordinates
      zoom: 10,
    });

    // Add controls, layers, and other customizations as needed
    map.addControl(new mapboxgl.NavigationControl());

    // Example: Add a marker at Johannesburg
    var marker = new mapboxgl.Marker()
      .setLngLat([28.0473, -26.2041])
      .addTo(map);
