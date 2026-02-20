const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } 
    else {
        navbar.classList.remove("scrolled");
    }
});
  

function showCertificates(type) {
  const galleries = document.querySelectorAll('.certificate-gallery');
  const buttons = document.querySelectorAll('.tab-btn');

  galleries.forEach(gallery => gallery.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(type).classList.add('active');
  event.target.classList.add('active');
}

let currentIndex = 0;
let currentImages = [];
document.querySelectorAll('.certificate-gallery img').forEach((img, index) => {
    img.addEventListener('click', () => {
        const activeGallery = img.closest('.certificate-gallery');
        currentImages = activeGallery.querySelectorAll('img');
        currentIndex = Array.from(currentImages).indexOf(img);

        openCertModal();
    });
});

function openCertModal() {
    document.getElementById('certModal').style.display = 'flex';
    document.getElementById('certModalImg').src = currentImages[currentIndex].src;
}
function closeCertModal() {
    document.getElementById('certModal').style.display = 'none';
}
function changeCert(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;
    if (currentIndex >= currentImages.length) currentIndex = 0;
    document.getElementById('certModalImg').src = currentImages[currentIndex].src;
}




const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
    initialCountry: "in",
    separateDialCode: true,
    preferredCountries: ["in", "us", "gb"],
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});

// function showSkills(category) {
//   const skills = document.querySelectorAll('.skills .bar');
//   const buttons = document.querySelectorAll('.tab-btn1');

//   // Active button style
//   buttons.forEach(btn => btn.classList.remove('active'));
//   event.target.classList.add('active');

//   // Show / hide skills
//   skills.forEach(skill => {
//     if (category === 'all' || skill.dataset.category === category) {
//       skill.style.display = 'block';
//     } else {
//       skill.style.display = 'none';
//     }
//   });
// }



function showSkills(category, btn) {
  const skills = document.querySelectorAll('.skills .bar');
  const buttons = document.querySelectorAll('.tab-btn1');

  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  skills.forEach(skill => {
    skill.style.display =
      skill.dataset.category === category ? 'block' : 'none';
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const defaultBtn = document.querySelector('.tab-btn1.active');
  showSkills('software', defaultBtn);
});

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navbar) return;

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navbar.classList.remove("active");
    });
  });

});


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach((el) => observer.observe(el));
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("active");
    }
  });
});








let currentIndex1 = 0;
const projects = document.querySelectorAll(".project-card");

function showProject(index) {
    projects.forEach((card, i) => {
        card.classList.remove("active");
        if (i === index) {
            card.classList.add("active");
        }
    });
}

function nextProject() {
    currentIndex1 = (currentIndex1 + 1) % projects.length;
    showProject(currentIndex1);
}

function prevProject() {
    currentIndex1 = (currentIndex1 - 1 + projects.length) % projects.length;
    showProject(currentIndex1);
}

// Initialize first project
showProject(currentIndex1);

