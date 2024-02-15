function hideElementById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}
function showElementById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}
