// defaults
let gridSize = 256;

// functions
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addGridEventListeners() {
  // add event listeners to .grid-item divs
  const gridItems = document.querySelectorAll(".grid-item");
  // .forEach method to iterate through each button
  gridItems.forEach(item => {
    // for each one we add a 'click' listener
    item.addEventListener("mouseover", () => {
      item.style.opacity = 0.5;
    });
    item.addEventListener("mouseout", () => {
      setTimeout(() => {
        item.style.opacity = 1;
      }, 800);
    });
  });
}

function displayGrid(gridSize) {
  // generate .grid-item divs
  for (let i = 0; i < gridSize; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-item");
    box.textContent = i + 1;
    //box.innerHTML = "&nbsp;";

    container.appendChild(box);
  }
  addGridEventListeners();
}

function getUserChoice() {
  return prompt("How many columns/rows would you like? (1-100)");
}

function setUserChoice() {
  let userChoice = getUserChoice();
  // keep prompting until we get a number between 1-100
  while (userChoice === null || isNaN(userChoice) || userChoice < 1 || userChoice > 100) {
    userChoice = prompt("Please enter a whole number only, 1 through 100.");
  }
  gridSize = userChoice * userChoice;

  // add inline style to container based on userChoice
  container.style.cssText = `grid-template-columns:repeat(${userChoice}, minmax(1px, 1fr));
  grid-template-rows:repeat(${userChoice}, minmax(1px, 1fr));
  `;
  // remove previous grid, display user choice grid
  removeAllChildNodes(container);
  document.querySelector("#grid-container").innerHTML = displayGrid(gridSize);
}

// .header: a wrapper for our button
const header = document.createElement("div");
header.classList.add("header");

// grid-container: a grid container
const container = document.createElement("div");
container.classList.add("grid-container");

// .btn-resize: a button for our prompt
const buttonResize = document.createElement("button");
buttonResize.classList.add("btn-resize");
buttonResize.textContent = "Resize";
buttonResize.onclick = setUserChoice;

// add .header to body
header.appendChild(buttonResize);
document.body.appendChild(header);

// add container to body
document.body.appendChild(container);

displayGrid(gridSize);
