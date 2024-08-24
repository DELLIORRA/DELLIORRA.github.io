var myButton = document.querySelector("button");
var myHeading = document.querySelector("p");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
  
