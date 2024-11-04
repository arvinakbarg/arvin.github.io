const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
  
    if (myName === null) {
      // User clicked "Cancel"
      alert("You canceled the prompt. Please enter a name if you'd like a personalized greeting.");
      setUserName(); // Prompt again
    } else if (myName === "") {
      // User clicked "OK" but didn't type a name
      alert("Name cannot be empty. Please enter your name.");
      setUserName(); // Prompt again
    } else {
      // User entered a name
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  
  function setUserName1() {
    const myName = prompt("Please enter your name.");
  
    if (myName === null) {
      // User clicked "Cancel"
      alert("You canceled the prompt. Please enter a name if you'd like a personalized greeting.");
    } else if (myName === "") {
      // User clicked "OK" but didn't type a name
      alert("Name cannot be empty. Please enter your name.");
    } else {
      // User entered a name
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName1();
  };