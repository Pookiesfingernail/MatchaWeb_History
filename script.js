// Light and Dark Mode Theme//

const themeBtn = document.getElementById('themeBtn');

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode'); // To ensure if the user use a theme preference
       
    }
}

loadTheme();  // and apply the code instantly and load the user theme preferences
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// end of Dark and Light Theme


// Random Facts Generator (How the random facts generator functions and respond to users for using buttons)
document.addEventListener('DOMContentLoaded', function() { // To ensure that the browser reads the HTML when its ready
 // for the website to use 
    let Factsbtn = document.getElementById('Factsbtn');
let MatchaText = document.getElementById('MatchaText');  

const Facts = [
    'As you can See, Matcha was created by Accident!',
    'Brewing Water Temperature can Affect the taste of Matcha',
    'Drinking Matcha Helps with Weight Loss!',
    'Matcha also has a Mystery or a Mysterious 5th flavor: Umami',
    'Matcha is sensitive to the Sun, Air, Heat and Moisture', 
    'If you see a Dark Matcha, it can be over 100 Years old', 
    'One bowl contains a whole anti-oxidant bomb!', 
    'Matcha Can be use for Cooking!',
    'Matcha can age like a Wine or Cheese!', 
    'It can be take a part of training to master Tea, in Spiritual art form',
    'If you are really interested in Matcha, there is a Competition for Tea Tasting!',
    'Matcha is companion of the monks, and they love Matcha!',
    'Higher-grade matcha will have Blueish Green Hue',
    'They are also considered as Medicinal Supplement in the Eats',
];

if (Factsbtn && MatchaText) {
    Factsbtn.addEventListener('click', function() {
        let randomIndex = Math.floor(Math.random() * Facts.length);
        MatchaText.innerText = Facts[randomIndex];
    });
    console.log('Facts button is ready!');
} else {
    console.log('Waiting for elements to load..');
}

});
// End fo Random Facts Generator //

// Hover Images //
const hoverImages = document.querySelectorAll('.evo-img, .modern-img');

hoverImages.forEach((img) => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.filter = 'brightness(1.05)';
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
        this.style.cursor = 'pointer'; // when the user put a cursor over the image, its gonna have hover effects
        this.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });

    // when the user leaves their cursor over the image, it wont have any hover transitions, which leaves the images like before.
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});
// End of Hover Images//