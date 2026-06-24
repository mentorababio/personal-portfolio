/* ============================================
   FORTUNATE PROSPER — PORTFOLIO
   main.js
   ============================================ */

// ── CONTACT FORM HANDLER ──
function handleSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById("form-success");
  successMsg.style.display = "block";
  e.target.reset();
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 5000);
}

// ── ACTIVE NAV HIGHLIGHT ON SCROLL ──
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 140) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      if (!link.classList.contains("nav-hire")) {
        const isActive = link.getAttribute("href") === "#" + current;
        link.style.color = isActive ? "var(--accent)" : "";
      }
    });
  });

  // ── SMOOTH REVEAL ON SCROLL ──
  const revealEls = document.querySelectorAll(
    ".acard, .skill-tag, .proj-card, .srv-card, .cmethod"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
});
