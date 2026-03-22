export function scrollToSection(href: string, navbarHeight: number = 70) {
  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  }
}
