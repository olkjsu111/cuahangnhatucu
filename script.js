window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("welcomePopup");
  const closeBtn = document.getElementById("closePopupBtn");


  setTimeout(() => {
    popup.classList.add("active");
  }, 1000);


  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });


  const comingSoon = document.querySelector(".coming-soon");
  comingSoon.style.opacity = 0;
  comingSoon.style.transition = "opacity 2s ease";
  setTimeout(() => {
    comingSoon.style.opacity = 1;
  }, 3000);

  const buttons = document.querySelectorAll(".buy-btn");
  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#ff6600";
      button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#ff9900";
      button.style.transform = "scale(1)";
    });
  });
});
