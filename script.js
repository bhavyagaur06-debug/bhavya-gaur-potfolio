/**
 * ====================================================================
 * BHAVYA - B.TECH 1ST YEAR PORTFOLIO JAVASCRIPT
 * Features:
 *   1. Student Portfolio Configuration (Easy Customization)
 *   2. Interactive Boy Eye Tracking (Pupils follow mouse anywhere on screen)
 *   3. Ambient Starfield / Particle Background
 *   4. Dynamic Typewriter Effect
 *   5. Mobile Menu & Active Section Navigation
 *   6. Contact Form Interactive Feedback
 * ====================================================================
 */

/* ====================================================================
   1. STUDENT CONFIGURATION (Change your details easily here!)
==================================================================== */
const USER_CONFIG = {
  name: "Bhavya",
  university: "B.Tech 1st Year • Computer Science & Engineering",
  introBio: "Passionate first-year engineering student building the foundation for tomorrow's technology. Obsessed with clean code, gaming worlds, user experience, and turning creative ideas into working software.",
  socials: {
    instagram: {
      handle: "@bhavya.codes",
      url: "https://instagram.com"
    },
    linkedin: {
      handle: "linkedin.com/in/bhavya-btech",
      url: "https://linkedin.com"
    },
    snapchat: {
      handle: "snapchat.com/add/bhavya_dev",
      url: "https://snapchat.com"
    },
    github: {
      handle: "github.com/bhavya-engineer",
      url: "https://github.com"
    }
  },
  roles: [
    "B.Tech 1st Year Undergrad",
    "Aspiring Software Engineer",
    "Competitive Gamer",
    "Creative Web Developer",
    "Curious Tech Explorer"
  ]
};

// Initialize User Configuration on Load
function applyUserConfig() {
  const nameEl = document.getElementById("display-name");
  const uniEl = document.getElementById("display-uni");
  const introEl = document.getElementById("display-intro");

  if (nameEl) nameEl.textContent = USER_CONFIG.name;
  if (uniEl) uniEl.textContent = USER_CONFIG.university;
  if (introEl) introEl.textContent = USER_CONFIG.introBio;

  // Socials
  const igHandle = document.getElementById("display-ig");
  const igLink = document.getElementById("link-instagram");
  if (igHandle && igLink) {
    igHandle.textContent = USER_CONFIG.socials.instagram.handle;
    igLink.href = USER_CONFIG.socials.instagram.url;
  }

  const inHandle = document.getElementById("display-linkedin");
  const inLink = document.getElementById("link-linkedin");
  if (inHandle && inLink) {
    inHandle.textContent = USER_CONFIG.socials.linkedin.handle;
    inLink.href = USER_CONFIG.socials.linkedin.url;
  }

  const snapHandle = document.getElementById("display-snapchat");
  const snapLink = document.getElementById("link-snapchat");
  if (snapHandle && snapLink) {
    snapHandle.textContent = USER_CONFIG.socials.snapchat.handle;
    snapLink.href = USER_CONFIG.socials.snapchat.url;
  }

  const ghHandle = document.getElementById("display-github");
  const ghLink = document.getElementById("link-github");
  if (ghHandle && ghLink) {
    ghHandle.textContent = USER_CONFIG.socials.github.handle;
    ghLink.href = USER_CONFIG.socials.github.url;
  }
}

/* ====================================================================
   2. INTERACTIVE BOY EYE TRACKING SYSTEM
   Trigonometric mouse tracker that moves pupils within the boy's eye sockets
==================================================================== */
function initEyeTracker() {
  const pupilLeft = document.getElementById("pupil-left");
  const pupilRight = document.getElementById("pupil-right");
  const eyeLeftSocket = document.getElementById("eye-left-socket");
  const eyeRightSocket = document.getElementById("eye-right-socket");
  const trackingStatus = document.getElementById("tracking-status");

  if (!pupilLeft || !pupilRight || !eyeLeftSocket || !eyeRightSocket) {
    return;
  }

  // Smooth lerp tracking coordinates
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let currentLeft = { x: 0, y: 0 };
  let currentRight = { x: 0, y: 0 };
  let targetLeft = { x: 0, y: 0 };
  let targetRight = { x: 0, y: 0 };

  // Update target when mouse moves across entire window
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    calculateEyePositions();
  });

  // Support mobile touch
  window.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      calculateEyePositions();
    }
  }, { passive: true });

  function calculateEyePositions() {
    const leftRect = eyeLeftSocket.getBoundingClientRect();
    const rightRect = eyeRightSocket.getBoundingClientRect();

    const leftCenter = {
      x: leftRect.left + leftRect.width / 2,
      y: leftRect.top + leftRect.height / 2
    };

    const rightCenter = {
      x: rightRect.left + rightRect.width / 2,
      y: rightRect.top + rightRect.height / 2
    };

    // Calculate angles
    const angleLeft = Math.atan2(mouse.y - leftCenter.y, mouse.x - leftCenter.x);
    const distLeft = Math.hypot(mouse.x - leftCenter.x, mouse.y - leftCenter.y);

    const angleRight = Math.atan2(mouse.y - rightCenter.y, mouse.x - rightCenter.x);
    const distRight = Math.hypot(mouse.x - rightCenter.x, mouse.y - rightCenter.y);

    // Anatomical constraints in SVG coordinates (max radius 4.5 in X, 3.2 in Y)
    const maxDistX = 4.6;
    const maxDistY = 3.3;

    // Intensity factor based on distance from eyes
    const factorLeft = Math.min(distLeft / 120, 1);
    const factorRight = Math.min(distRight / 120, 1);

    targetLeft.x = Math.cos(angleLeft) * maxDistX * factorLeft;
    targetLeft.y = Math.sin(angleLeft) * maxDistY * factorLeft;

    targetRight.x = Math.cos(angleRight) * maxDistX * factorRight;
    targetRight.y = Math.sin(angleRight) * maxDistY * factorRight;
  }

  // Animation Loop with smooth LERP interpolation
  function renderEyes() {
    const ease = 0.18;
    currentLeft.x += (targetLeft.x - currentLeft.x) * ease;
    currentLeft.y += (targetLeft.y - currentLeft.y) * ease;

    currentRight.x += (targetRight.x - currentRight.x) * ease;
    currentRight.y += (targetRight.y - currentRight.y) * ease;

    pupilLeft.setAttribute("transform", `translate(${currentLeft.x.toFixed(2)}, ${currentLeft.y.toFixed(2)})`);
    pupilRight.setAttribute("transform", `translate(${currentRight.x.toFixed(2)}, ${currentRight.y.toFixed(2)})`);

    requestAnimationFrame(renderEyes);
  }

  renderEyes();
}

/* ====================================================================
   3. DYNAMIC TYPEWRITER EFFECT
==================================================================== */
function initTypewriter() {
  const typingEl = document.getElementById("typing-text");
  if (!typingEl) return;

  const roles = USER_CONFIG.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 45;
    } else {
      typingEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typeSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 450;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ====================================================================
   4. AMBIENT STARFIELD CANVAS (Floating particles & subtle constellations)
==================================================================== */
function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 14), 70);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.6 + 0.5,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(129, 140, 248, ${p.alpha})`;
      ctx.fill();

      // Draw subtle connecting constellation lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ====================================================================
   5. NAVIGATION & MOBILE MENU
==================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-link");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // Active link highlighter on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ====================================================================
   6. CONTACT FORM SUBMISSION FEEDBACK
==================================================================== */
window.handleFormSubmit = function () {
  const submitBtn = document.getElementById("btn-submit-form");
  const toast = document.getElementById("form-toast");
  const form = document.getElementById("contact-form");

  if (!submitBtn || !toast || !form) return;

  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>`;
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.innerHTML = originalBtnText;
    submitBtn.disabled = false;
    form.reset();
    toast.style.display = "flex";

    setTimeout(() => {
      toast.style.display = "none";
    }, 4500);
  }, 900);
};

/* ====================================================================
   DOM READY BOOTSTRAP
==================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyUserConfig();
  initEyeTracker();
  initTypewriter();
  initStarfield();
  initNavigation();
});
