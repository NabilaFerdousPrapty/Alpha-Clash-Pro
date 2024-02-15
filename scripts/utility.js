function hideElementById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}
function showElementById(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}
function getTextElementValueById(elementId){
   const elementIdElement=document.getElementById(elementId);
   const elementIdText=elementIdElement.innerText;
   const elementIdValue=parseInt(elementIdText);
   return elementIdValue;
}
function setTextElementValueById(elementId,value) {
  const element=document.getElementById(elementId);
  
  element.innerText=value;

}
function getElementTextById(elementId) {
  const element=document.getElementById(elementId);
  const text=element.innerText;
  return text;
  
}