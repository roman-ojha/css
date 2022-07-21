let darkMode = localStorage.getItem("darkMode");
const darkModeToggleElement = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  // add the class darkmode to the body
  document.body.classList.add("darkmode");

  // update darkmode in the localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // remove the class darkmode to the body
  document.body.classList.remove("darkmode");

  // update darkmode in the localStorage
  localStorage.setItem("darkMode", null);
};

// Check if dark mode is enable for the first time
if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggleElement.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("darkMode");
  // else it is disable turn it on
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    // if it is enable we want to turn it off
    disableDarkMode();
  }
});
