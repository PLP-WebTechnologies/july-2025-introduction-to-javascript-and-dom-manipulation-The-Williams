// Part 1: JavaScript Basics

// Variable declarations
let userName = "Edger";
let userAge = 20;

// Conditional example
if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
  document.getElementById("output").textContent = `${userName} is an adult.`;
} else {
  console.log(`${userName} is a minor.`);
  document.getElementById("output").textContent = `${userName} is a minor.`;
}

// Part 2: Functions

// Function 1: calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: format a greeting
function greetUser(name) {
  return `Hello, ${name}! Welcome to the JavaScript world.`;
}

console.log(greetUser(userName));
console.log("Total:", calculateTotal(50, 3));

// Part 3: Loops

// Loop 1: for loop
for (let i = 1; i <= 5; i++) {
  console.log(`For Loop Iteration: ${i}`);
}

// Loop 2: while loop (countdown)
let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// Part 4: DOM Manipulation

// DOM Interaction 1: Toggle text
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function () {
  const output = document.getElementById("output");
  if (output.textContent === "Message Toggled!") {
    output.textContent = "";
  } else {
    output.textContent = "Message Toggled!";
  }
});

// DOM Interaction 2: Countdown with button
const countdownBtn = document.getElementById("countdownBtn");
countdownBtn.addEventListener("click", function () {
  let count = 5;
  const interval = setInterval(() => {
    document.getElementById("output").textContent = `Countdown: ${count}`;
    count--;
    if (count < 0) clearInterval(interval);
  }, 1000);
});

// DOM Interaction 3: Add list items dynamically
const addItemBtn = document.getElementById("addItemBtn");
addItemBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = `New item added at ${new Date().toLocaleTimeString()}`;
  document.getElementById("itemList").appendChild(li);
});
