// Create an unordered list element
const list = document.createElement('ul')

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)

console.log(list)

const section1 = document.createElement('section');
section1.className = "message";
section1.textContent = "A: Hey, how are you?";

const section2 = document.createElement('section');
section2.className = "message";
section2.textContent = "B: Doing well, you?";

const section3 = document.createElement('section');
section3.className = "message";
section3.textContent = "A: Also well. I'm looking forward to tomorrow.";

const section4 = document.createElement('section');
section4.className = "message";
section4.textContent = "B: What's tomorrow?";

const section5 = document.createElement('section');
section5.className = "message";
section5.textContent = "A: The day after today.";

document.querySelector("#messages").appendChild(section1);
document.querySelector("#messages").appendChild(section2);
document.querySelector("#messages").appendChild(section3);
document.querySelector("#messages").appendChild(section4);
document.querySelector("#messages").appendChild(section5);