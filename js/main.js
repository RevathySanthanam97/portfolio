// Preloader
window.onload = function () {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("active");
    document.getElementById("home").style.display = "block";
  }, 500);
};

// Menu Animation
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menuList").style.transform = "translateY(0%)";
  document.getElementById("menuList").style.transition = "0.4s";
});
document.getElementById("menuClose").addEventListener("click", function () {
  document.getElementById("menuList").style.transform = "translateY(-100%)";
  document.getElementById("menuList").style.transition = "0.4s";
});

// Theme Update Start
const toggleBtn = document.getElementById("themeToggle");
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);
toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "light" ? "dark" : "light";
  setTheme(newTheme);
});
// Theme Update End

// Color Update Start
document.getElementById("color-changer").addEventListener("click", function () {
  document.getElementById("color-changer").classList.toggle("active");
});
document.querySelectorAll(".selectColor").forEach((element) => {
  element.addEventListener("click", (event) => {
    var selectedColor = element.getAttribute("title");
    document.documentElement.style.setProperty("--highlight-color", selectedColor);
  });
});
// Color Update End

// Menu Breaker Animation
document.querySelectorAll(".buttons").forEach((element) => {
  element.addEventListener("click", () => {
    var selected = element.getAttribute("data-text");
    document.querySelectorAll(".sectionSeparator").forEach((element) => {
      document.getElementById("breaker").style.display = "none";
      element.classList.remove('start-anim');
      if (element.getAttribute("data-text") == selected) {
        setTimeout(() => {
          element.classList.add('start-anim');
          document.getElementById("menuList").style.transform =
            "translateY(-100%)";
          document.getElementById("menuList").style.transition = "0s";
          document.getElementById("breaker").style.display = "block";
        }, 100);
        setTimeout(() => {
          element.scrollIntoView();
        }, 500);
      }
    });
  });
});

// Form Submission
function handleSubmit() {
  document.getElementById("formStatus").style.display = "block";
  document.getElementById("myForm").reset();
}

// Scroll Animation
const isMobile = window.innerWidth <= 768;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');

      const triggerRatio = isMobile ? 0 : 0.5;

      if (
        entry.target.classList.contains('impact-section') &&
        entry.intersectionRatio > triggerRatio &&
        !counterStarted
      ) {
        startCounter();
        counterStarted = true;
      }
    }
  });
}, {
  threshold: isMobile ? [0.1, 0.2] : [0.2, 0.5]
});

document.querySelectorAll('.animate-section')
  .forEach(el => observer.observe(el));

let counterStarted = false;

const startCounter = () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 100;

    const update = () => {
      count += increment;

      if (count < target) {
        const text = target % 1 !== 0
          ? count.toFixed(1)
          : Math.floor(count);
        counter.innerText = text + '+';
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + '+';
      }
    };

    update();
  });
};
