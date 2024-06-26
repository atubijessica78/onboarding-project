const modal_container = document.getElementById("business-modal");
const close = document.querySelectorAll(".close");
const saveChanges = document.getElementById("save-changes");
const open = document.getElementById("open");
const personalProfileImage = document.getElementById("personal-profile-image");
const personalModalProfile = document.getElementById(
  "personal-modal-profile-image"
);
const personalPhotoUploadInput = document.getElementById(
  "personal-photo-upload"
);
const personalPhotoIcon = document.getElementById("personal-photo-icon");
let personalImageDataUrl = "";

if (open && modal_container) {
  open.addEventListener("click", () => {
    modal_container.classList.add("show");
  });
}

close.forEach((button) => {
  button.addEventListener("click", () => {
    modal_container.classList.remove("show");
    clearPersonalModal();
  });
});

saveChanges.addEventListener("click", () => {
  const firstName = document.getElementById("modal-first-name").value;
  const lastName = document.getElementById("modal-last-name").value;
  const country = document.getElementById("modal-country").value;
  const city = document.getElementById("modal-city").value;
  const email = document.getElementById("modal-email").value;
  const phone = document.getElementById("modal-phone").value;

  // Update personal information section
  document.getElementById(
    "personal-name"
  ).textContent = `${firstName} ${lastName}`;
  document.getElementById(
    "personal-location"
  ).textContent = `${city}, ${country}`;
  document.getElementById("personal-email").textContent = email;
  document.getElementById("personal-phone").textContent = phone;

  // Update profile image if a new image was uploaded
  if (personalImageDataUrl) {
    personalProfileImage.src = personalImageDataUrl;
  }

  modal_container.classList.remove("show");
  clearPersonalModal();
});

personalPhotoIcon.addEventListener("click", () => {
  personalPhotoUploadInput.click();
});

personalPhotoUploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (e) {
      personalImageDataUrl = e.target.result; // Store the image data URL
      personalModalProfile.src = personalImageDataUrl; // Update the profile image src in the modal
      console.log("Image uploaded successfully:", personalImageDataUrl);
    };

    reader.readAsDataURL(file);
  } else {
    alert("Please upload a valid image file.");
  }
});

function clearPersonalModal() {
  document.getElementById("modal-first-name").value = "";
  document.getElementById("modal-last-name").value = "";
  document.getElementById("modal-country").value = "";
  document.getElementById("modal-city").value = "";
  document.getElementById("modal-email").value = "";
  document.getElementById("modal-phone").value = "";
  personalModalProfile.src = "./assets/Ellipse 29.svg"; // Reset profile image in the modal
  personalImageDataUrl = ""; // Reset imageDataUrl
}

// section 2 ------- Edit Business Information ------

const openBusiness = document.getElementById("open-business");
const business_modal_container = document.getElementById(
  "edit-business-information"
);
const btns = document.querySelectorAll(".close-business");
const saveBusinessChanges = document.getElementById("save-business-changes");
const photoIcon = document.getElementById("photo-icon");
const photoUploadInput = document.getElementById("photo-upload");
const profileImage = document.getElementById("profile-image");
let imageDataUrl = ""; // Variable to store the image data URL

// 2a. show or display the business modal
if (openBusiness && business_modal_container) {
  openBusiness.addEventListener("click", () => {
    business_modal_container.classList.add("show");
    document.body.style.overflow = "hidden";
  });
}

// 2b. Restore to default when close is clicked
for (const btn of btns) {
  btn.addEventListener("click", function () {
    business_modal_container.classList.remove("show");
    document.body.style.overflow = "";
    clearForm(); // Clear form when modal is closed
  });
}
// 2c.  Update business information section when the save changes btn is clicked

saveBusinessChanges.addEventListener("click", () => {
  const businessName = document.getElementById(
    "business-modal-business-name"
  ).value;
  const country = document.getElementById("business-modal-country").value;
  const state = document.getElementById("business-modal-state").value;
  const city = document.getElementById("business-modal-city").value;
  const zipcode = document.getElementById("business-modal-zipcode").value;
  const address = document.getElementById("business-modal-address").value;
  const email = document.getElementById("business-modal-email").value;
  const phone = document.getElementById("business-modal-phone").value;
  const website = document.getElementById("business-modal-website").value;
  const currency = document.getElementById(
    "business-modal-in-app-currency"
  ).value;
  const timeZone = document.getElementById("business-modal-time-zone").value;

  document.getElementById("business-name").textContent = businessName;
  document.getElementById(
    "business-location"
  ).textContent = `${city}, ${country}`;
  document.getElementById("business-address").textContent = address;
  document.getElementById("business-email").textContent = email;
  document.getElementById("business-phone").textContent = phone;
  document.getElementById("business-website").textContent = website;
  document.getElementById("business-city").textContent = `${city} , ${zipcode}`;
  document.getElementById("business-currency").textContent = currency;
  document.getElementById("business-timezone").textContent = timeZone;

  // 2d. Update profile image if a new image was uploaded
  if (imageDataUrl) {
    document.getElementById("business-profile-image").src = imageDataUrl;
  }

  business_modal_container.classList.remove("show");
  document.body.style.overflow = "scroll";
  clearForm(); // Clear form after saving changes
});

// 2e. Handle profile picture upload
photoIcon.addEventListener("click", () => {
  photoUploadInput.click();
});

photoUploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (e) {
      imageDataUrl = e.target.result; // Store the image data URL
      profileImage.src = imageDataUrl; // Update the profile image src
      console.log("Image uploaded successfully:", imageDataUrl);
    };

    reader.readAsDataURL(file);
  } else {
    alert("Please upload a valid image file.");
  }
});

// Function to clear the form fields
function clearForm() {
  document.getElementById("business-modal-business-name").value = "";
  document.getElementById("business-modal-country").value = "";
  document.getElementById("business-modal-state").value = "";
  document.getElementById("business-modal-city").value = "";
  document.getElementById("business-modal-zipcode").value = "";
  document.getElementById("business-modal-address").value = "";
  document.getElementById("business-modal-email").value = "";
  document.getElementById("business-modal-phone").value = "";
  document.getElementById("business-modal-website").value = "";
  document.getElementById("business-modal-in-app-currency").value = "";
  document.getElementById("business-modal-time-zone").value = "";
  profileImage.src = "./assets/Mask Group.svg"; // Reset profile image in the modal
  imageDataUrl = ""; // Reset imageDataUrl
}

// section 3

// ------ Add Team section ------

const teamModalContainer = document.getElementById("add-team-modal");
const saveTeamChanges = document.getElementById("send-invitation");
const openTeamModal = document.getElementById("open-team-modal");

// ----------------- Add Team Member Modal ---------
const addTeamModalContainer = document.getElementById("add-team-modal");
const teamRoleContainer = document.getElementById("dropdown-team-roles");
const dropDownContainer = document.getElementById("dropdown-container");
const roleInput = document.getElementById("add-team-modal-role");
const closeAddTeamModal = document.getElementById("close-add-team-modal");
const addTeamForm = document.getElementById("add-team-form");

openTeamModal.addEventListener("click", () => {
  teamModalContainer.classList.add("show");
  document.body.style.overflow = "hidden";
});

// ---------close modal --------
closeAddTeamModal.addEventListener("click", () => {
  addTeamForm.reset();
  teamModalContainer.classList.remove("show");
  document.body.style.overflow = "scroll";
});

//------ Toggle dropdown visibility   ------
teamRoleContainer.addEventListener("click", () => {
  dropDownContainer.classList.toggle("show");
});

// ------Add event listener to each list item-----
const listItems = dropDownContainer.querySelectorAll("ul li");
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    roleInput.value = item.textContent; // Set input field value to the selected item text
    teamRoleContainer.label.value = item.textContent;
    dropDownContainer.classList.remove("show"); // Hide the dropdown after selection
  });
});

saveTeamChanges.addEventListener("click", () => {
  const email = document.getElementById("add-team-modal-email").value;
  const Role = document.getElementById("add-team-modal-role").value;
  console.log(Role);
});
