// Pseuodocode
// Loop 16 times
// Each loop, generate a div with class of "box"
//

// if (typeof document == "undefined") {
//   window.alert("what the holy fuck batman");
// }

// const container = document.querySelector("#container");

const container = document.createElement("div");
container.classList.add("grid-container");
container.textContent = "Container";

document.body.appendChild(container);

for (let i = 0; i < 16; i++) {
  const box = document.createElement("div");
  box.classList.add("grid-item");
  box.textContent = i;
  container.appendChild(box);
}
