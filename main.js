// Pseuodocode
// Loop 16 times
// Each loop, generate a div with class of "box"
//

// create div with class .grid-container
const container = document.createElement("div");
container.classList.add("grid-container");
//container.textContent = "Container";

// add container to body
document.body.appendChild(container);

// loop 16x and display .grid-item divs
for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-item");
  box.textContent = i;
  container.appendChild(box);
}
