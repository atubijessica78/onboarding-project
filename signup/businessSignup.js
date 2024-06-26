document.addEventListener("DOMContentLoaded", function () {
  // Click event listener on the document body
  document.body.addEventListener("click", function (event) {
    // Check if the clicked element is within a .dropdown or .dropdown-content
    const dropdown = event.target.closest(".dropdown");
    const dropdownContent = event.target.closest(".dropdown-content");

    // Close all dropdowns except the one clicked
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      if (content !== dropdownContent) {
        content.classList.remove("show");
      }
    });

    // Toggle the dropdown-content visibility
    if (dropdown) {
      dropdown.querySelector(".dropdown-content").classList.toggle("show");
    } else if (dropdownContent) {
      dropdownContent.classList.toggle("show");
    }

    // Handle toggling dropdown on input click
    const input = event.target.closest(".dropdown").querySelector("input");
    if (input && !event.target.classList.contains("chevron")) {
      input.nextElementSibling.classList.toggle("show");
    }

    // Handle selecting an option
    const option = event.target.closest(".dropdown-content div");
    if (option) {
      const input = option.closest(".dropdown").querySelector("input");
      input.value = option.innerText;
      option.closest(".dropdown-content").classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const employeesInput = document.getElementById("employees");

  employeesInput.addEventListener("input", function () {
    // Remove non-numeric characters using regular expression
    this.value = this.value.replace(/\D/g, ""); // \D matches any non-digit character

    // Limit the length to 7 digits
    if (this.value.length > 7) {
      this.value = this.value.slice(0, 7); // Truncate to 7 characters
    }
  });
});
