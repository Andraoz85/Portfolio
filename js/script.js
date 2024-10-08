// script.js


// Funktion för att toggla hamburgermenyn
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a'); // Alla länkar i menyn

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Stäng menyn när en länk klickas
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active'); // Stänger menyn efter klick
  });
});


// projektdata
const projects = [
  {
    title: "Face Recognition",
    description:
      "A comparison between two open-source models for face recognition.",
    image: "images/face-rec.webp",
    technologies: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/python.svg",
      },
      {
        name: "Google Colab",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/googlecolab.svg",
      },
      {
        name: "Jupyter Notebook",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/jupyter.svg",
      },
      {
        name: "OpenCV",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/opencv.svg",
      },
      { name: "Dlib", icon: "/images/dlib.png" }
    ],
    githubLink: "https://github.com/Andraoz85/face-recognition",
  },
  {
    title: "Hotel Booking System",
    description:
      "A hotel booking system that allows users to book rooms and manage their bookings.",
    image: "images/booking-app.webp",
    technologies: [
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/sharp.svg",
      },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/html5.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/css3.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/javascript.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/mysql.svg" }
    ],
    liveLink: "https://hotel-booking-app-opa2022.azurewebsites.net/",
    githubLink: "https://github.com/Andraoz85/HotelBookingApp",
  },
  {
    title: "IRDB",
    description: "An app that makes API calls from a movie database.",
    image: "images/moviedb.webp",
    technologies: [
      { name: "C#", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/sharp.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/html5.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/css3.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13.10.0/icons/javascript.svg" }
    ],
    githubLink: "https://github.com/Andraoz85/IRDB-frontend",
  },
];


// Funktion för att visa projekt
function loadProjects() {
  const projectContainer = document.querySelector(".project-container");

  projects.forEach((project) => {
    // Skapa projektkort
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    // Lägg till bild
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    // Lägg till felhantering för bild
    img.onerror = () => {
      img.src = "images/default.png"; // En standardbild om originalbilden inte laddas
      img.alt = "Default image";
    };

    // Lägg till titel
    const title = document.createElement("h3");
    title.textContent = project.title;

    // Lägg till beskrivning
    const desc = document.createElement("p");
    desc.textContent = project.description;

    // Lägg till teknologier
    if (project.technologies) {
      const techList = document.createElement("ul");
      project.technologies.forEach((tech) => {
        const techItem = document.createElement("li");
        techItem.innerHTML = `<img src="${tech.icon}" alt="${tech.name} logo" width="20" height="20" /> ${tech.name}`;
        techList.appendChild(techItem);
      });
      projectDiv.appendChild(techList);
    }

    // Skapa en länkbehållare
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("project-links");

    // Lägg till GitHub-länk om den finns
    if (project.githubLink) {
      const githubLink = document.createElement("a");
      githubLink.href = project.githubLink;
      githubLink.textContent = "GitHub";
      githubLink.target = "_blank";
      githubLink.rel = "noopener noreferrer"; // För säkerhet
      linkContainer.appendChild(githubLink);
    }

    // Lägg till Live-länk om den finns
    if (project.liveLink) {
      const liveLink = document.createElement("a");
      liveLink.href = project.liveLink;
      liveLink.textContent = "Webpage";
      liveLink.target = "_blank";
      liveLink.rel = "noopener noreferrer"; // För säkerhet
      linkContainer.appendChild(liveLink);
    }

    // Append element till projectDiv
    projectDiv.appendChild(img);
    projectDiv.appendChild(title);
    projectDiv.appendChild(desc);
    projectDiv.appendChild(linkContainer);

    // Append projectDiv till projectContainer
    projectContainer.appendChild(projectDiv);
  });
}


// Initiera funktioner när sidan laddas
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
});
