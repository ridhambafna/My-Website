
document.addEventListener("DOMContentLoaded", () => {
  // Reveal animation for sections
  const sections = document.querySelectorAll(".section");

  const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;

      if (top < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  revealSection();
  window.addEventListener("scroll", revealSection);

  // Modal open/close for VIT video
  const modal = document.getElementById("vitModal");
  const closeBtn = document.getElementById("closeModalBtn");

  const vitCard = document.querySelector(".edu-card.clickable");

  if (vitCard && modal && closeBtn) {
    vitCard.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});

function openProjectModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeProjectModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}
