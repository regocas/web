document.querySelectorAll(".nav-toggle").forEach((menu) => {
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.removeAttribute("open"));
  });
});
