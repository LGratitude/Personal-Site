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

//Making the arrow icon to fade to when scrolling down
window.addEventListener('scroll',function(){
  var arrowIcon = document.querySelector('.arrow-down');
  if(this.window.scrollY > 0){
    arrowIcon.classList.add('scrolled');
  }
  else{
    arrowIcon.classList.remove('scrolled');
  }
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

// Initialize the map
document.querySelectorAll(".allPaths").forEach(e=>{
  e.addEventListener("mouseOver", function(){
    window.onmousemove = function(j){
      x = j.clientX
      y = j.clientY
      document.getElementById("countryNames").style.top = y -20+"px"
      document.getElementById("countryNames").style.left =x -20+"px"
    }
    
    e.style.fill = "yellowgreen"
    document.getElementById("nameC").innerText = e.id
    document.getElementById("countryNames").style.opacity = 1
  })
  e.addEventListener("mouseleave", function(){
    e.style.fill = "#ececec"
    document.getElementById("countryNames").style.opacity = 0
  })
})
