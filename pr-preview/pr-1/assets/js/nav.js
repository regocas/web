document.querySelectorAll(".nav-toggle, .docs-index__toggle").forEach((menu) => {
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.removeAttribute("open"));
  });
});

// .site-topbar's height varies (it only shows the announce bar when
// there's an upcoming event), so measure it instead of guessing —
// sticky elements below it (.docs-index__toggle, the docs sidebar)
// read this to sit flush against it with no gap or overlap.
const topbar = document.querySelector(".site-topbar");
if (topbar) {
  const syncTopbarHeight = () =>
    document.documentElement.style.setProperty("--topbar-height", `${topbar.offsetHeight}px`);
  syncTopbarHeight();
  window.addEventListener("resize", syncTopbarHeight);
}
