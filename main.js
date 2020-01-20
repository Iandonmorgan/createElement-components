// Create an unordered list element
const list = document.createElement('ul')

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)

console.log(list)

const fragment = document.createDocumentFragment();

const section1 = document.createElement('section');
section1.className = "message";
section1.textContent = "A: Hey, how are you?";
fragment.appendChild(section1);

const section2 = document.createElement('section');
section2.className = "message";
section2.textContent = "B: Doing well, you?";
fragment.appendChild(section2);

const section3 = document.createElement('section');
section3.className = "message";
section3.textContent = "A: Also well. I'm looking forward to tomorrow.";
fragment.appendChild(section3);

const section4 = document.createElement('section');
section4.className = "message";
section4.textContent = "B: What's tomorrow?";
fragment.appendChild(section4);

const section5 = document.createElement('section');
section5.className = "message";
section5.textContent = "A: The day after today.";
fragment.appendChild(section5);

document.querySelector("#messages").appendChild(fragment);