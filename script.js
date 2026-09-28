const menuIcon =document.querySelector('#menu-icon');
const navLinks =document.querySelector('.navLinks');

menuIcon.onclick =() => {
  navLinks.classList.toggle('active');
}

// ==========================================
// 1. DATA DEFINITIONS
// ==========================================

// Skills Data Array
const skillsData = [
  {
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    experience: "5 years",
    description: "I enjoy solving technical problems, making sure websites run smoothly on all devices and collaborating with design and backend teams to deliver great experiences for users."
  },
  {
    icon: "fa-solid fa-file",
    title: "Graphic Design",
    experience: "2 years",
    description: "My focus is on combining strong visuals with clear communication to help brands tell their story, connect with their audience and stand out."
  },
  {
    icon: "fa-solid fa-laptop",
    title: "System Design",
    experience: "2 years",
    description: "I focus on designing distributed systems that handle high traffic, maintain high availability and balance trade-offs like latency, consistency and database performance."
  },
  {
    icon: "fa-solid fa-list",
    title: "Content Manager",
    experience: "1 year",
    description: "By combining creative storytelling with data-driven insights, I collaborate with cross-functional teams to deliver consistent social media and digital channels."
  }
];

// Projects Data Array
const projectsData = [
  {
    title: "Project X",
    image: "project-1.png",
    description: "Implement interactive project cards to summarize key details, team assignees and progress status at a glance, allowing users to track project health without leaving the main dashboard view.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project Y",
    image: "project-2.png",
    description: "Features responsive design, secure authentication and an intuitive drag-and-drop dashboard to improve workflow efficiency and daily productivity.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project Z",
    image: "Project-3.png",
    description: "Delivered an interactive dashboard and automated content publishing flow that improved team collaboration and user engagement.",
    demoLink: "#",
    githubLink: "#"
  }
];

// ==========================================
// 2. RENDER FUNCTIONS
// ==========================================

// Function to render skills cards into the page
function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");
  
  if (!skillsContainer) return; // Guard clause in case element isn't found

  // Clear existing content
  skillsContainer.innerHTML = "";

  // Loop through skillsData array
  function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");}
  if (!skillsContainer) return;

  skillsContainer.innerHTML = `skillsData.map skill => `
  