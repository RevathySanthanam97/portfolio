window.onload = function () {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("active");
    document.getElementById("home").style.display = "block";
  }, 500);
};
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menuList").style.transform = "translateY(0%)";
  document.getElementById("menuList").style.transition = "0.4s";
});
document.getElementById("menuClose").addEventListener("click", function () {
  document.getElementById("menuList").style.transform = "translateY(-100%)";
  document.getElementById("menuList").style.transition = "0.4s";
});

document.getElementById("color-changer").addEventListener("click", function () {
  document.getElementById("color-changer").classList.toggle("active");
});

document.querySelectorAll(".selectColor").forEach((element) => {
  element.addEventListener("click", (event) => {
    var selectedColor = element.getAttribute("title");
    document.documentElement.style.setProperty("--color", selectedColor);
  });
});

document.querySelectorAll(".buttons").forEach((element) => {
  element.addEventListener("click", () => {
    var selected = element.getAttribute("data-text");
    document.querySelectorAll(".buttonSection").forEach((element) => {
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
