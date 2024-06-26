// JavaScript file: script.js

document.getElementById("profile-icon").addEventListener("click", () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".container-heading");
  const contents = document.querySelectorAll(".content");

  headings.forEach((heading) => {
    heading.addEventListener("click", () => {
      // Remove active class from all headings and contents
      headings.forEach((h) => h.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      // Add active class to the clicked heading and corresponding content
      heading.classList.add("active");
      const contentId = heading.getAttribute("data-content");
      document.getElementById(contentId).classList.add("active");
    });
  });
});
