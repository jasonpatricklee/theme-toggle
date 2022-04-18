/**
 * Jason Lee
 * demonstrating a basic theme preference local storage setup
 */
/* local storage item. is either dark or light. it's nothing by default */
var themePreference = localStorage.getItem("theme");
/* the html element in the html */
var topElement = document.getElementById("top");
/* the toggle button itself */
var themeButton = document.getElementById("theme-button");
/* when the page loads, check if it's set to dark. if it is, then 
*  check if it already has the dark class added
*  if it does, we're fine so exit otherwise add the class
*/
window.onload = function () {
  if (themePreference == "dark") {
    /* it's already using dark mode as expected */
    if (topElement.classList.contains("dark")) {
      return;
    }
    toggleDark();
  }
};
/* add the dark styles if it's not added already */
/* otherwise remove the dark styles. light is left over */
function toggleDark() {
  if (topElement.classList.contains("dark")) {
    topElement.classList.remove("dark");
    /* set the local storage item to light for the theme */
    localStorage.setItem("theme", "light");
    themeButton.innerHTML = "🌘";
  } else {
    topElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeButton.innerHTML = "🌞";
  }
}
