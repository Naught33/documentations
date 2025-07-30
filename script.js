document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - (document.querySelector("nav").offsetHeight + 20), // Offset for fixed nav and some padding
          behavior: "smooth",
        })
      }
    })
  })
})
