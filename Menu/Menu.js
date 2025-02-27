/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "This Works Too",
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Connect to header class in HTML
const header = document.querySelector(".header");

function createMenu(arr){

  // Declare variable and create elements
  const menu = document.createElement("div");
  const ul = document.createElement("ul");
  
  // Array method that loops through menuItems array and creates li elements
  arr.forEach(link => {
    const li = document.createElement("li"); 
    li.textContent = link;
    ul.append(li);
  });

  // Append UL to menu
  menu.appendChild(ul);

  // Add class
  menu.classList.add("menu");

  // Creates toggle button
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", (e) => {
    menu.classList.toggle("menu--open");
  })

  return menu;
}

// Runs function
header.appendChild(createMenu(menuItems));