/*                      40-4 Debug and fix syntax error from Shopping list */

// const addInput = document.getElementById(add-field);
const addInput = document.getElementById('add-field');

const colorInput = document.getElementById("color-field");
const itemList = document.getElementById("item-list");

const listDiv = document.getElementById("list-div"); //for hiding/showing
// const toggle  document.getElementById("toggle-button");
const toggle = document.getElementById("toggle-button");

// add item
function addItem() {
  const lastPickedColor = colorInput.value;
  const li = document.createElement("li");
  li.innerHTML = addInput.value;
  li.style.color = lastPickedColor;
  // colorChange();
  changeColor();
  // itemList.appendChild("li");
  itemList.appendChild(li);

  addInput.value = "";
}

// remove item
function removeItem() {
  // itemList.removeChild(li);
  // let li = document.querySelector("li:last-child");
  let li = document.querySelector("li:last-child");
  itemList.removeChild(li);
}

// change color
function changeColor() {
  const List = document.querySelectorAll("li");
  const lastPickedColor = colorInput.value;
//   for (let i = 0; i < List.length() i++) {
  // console.log(List);
  // for (let i = 0; i < List.length(); i++) {
  for (let i = 0; i < List.length; i++) {
    List[i].style.color = lastPickedColor;
  }
}

// uppercase
itemList.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.textTransform = "uppercase";
  }
});

// lowercase
itemList.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.textTransform = "lowercase";
  }
// }));
});

// hide/show list
function toggleButton() {
  if (listDiv.style.display == "none") {
    listDiv.style.display = "block";
    toggle.textContent = "Hide list";
  } else {
    listDiv.style.display = "none";
    toggle.textContent = "Show list";
  }
// Bracket was missing
}

//=========================================================================================//


/* 
                These are the error numbers we found in this file (see below)
                =============================================================


                                Syntax Error Output
                                ===================


Debug console Output:
 GET http://127.0.0.1:5500/40-4%20Debug%20And%20Fix%20Syntax%20Error%20From%20Shopping%20List/fixed-shopping-list                                                    shopping-list.html:90
                                                                     
 net::ERR_ABORTED 404 (Not Found)

_____________________________________________________________________________________________

Debug console Output:
Uncaught SyntaxError: Missing initializer in const declaration (at fixed-shopping-list.js:9:7)                                                              fixed-shopping-list.js:9

_____________________________________________________________________________________________

Debug console Output:
Uncaught SyntaxError: Unexpected identifier 'i' (at fixed-shopping-list.js:34:37)                                                           fixed-shopping-list.js:34

_____________________________________________________________________________________________

Debug console Output:
Uncaught SyntaxError: Unexpected token ')' (at fixed-shopping-list.js:52:3)                                                          fixed-shopping-list.js:52

_____________________________________________________________________________________________

Uncaught SyntaxError: Unexpected end of input (at fixed-shopping-list.js:64:1)                                                            fixed-shopping-list.js:64

_____________________________________________________________________________________________


                            Reference Error Output
                            ======================


Uncaught ReferenceError: add is not defined                          fixed-shopping-list.js:3
    at fixed-shopping-list.js:3:42

_____________________________________________________________________________________________

Uncaught ReferenceError: colorChange is not defined                 fixed-shopping-list.js:19
    at addItem (fixed-shopping-list.js:19:3)
    at HTMLButtonElement.onclick (shopping-list.html:47:14)

_____________________________________________________________________________________________

Uncaught TypeError: List.length is not a function                   fixed-shopping-list.js:37
    at changeColor (fixed-shopping-list.js:37:28)
    at addItem (fixed-shopping-list.js:20:3)
    at HTMLButtonElement.onclick (shopping-list.html:47:14)

_____________________________________________________________________________________________

NodeList(3) [li, li, li]                                            fixed-shopping-list.js:37
Uncaught TypeError: List.length is not a function                   fixed-shopping-list.js:38
    at changeColor (fixed-shopping-list.js:38:28)
    at addItem (fixed-shopping-list.js:20:3)
    at HTMLButtonElement.onclick (shopping-list.html:47:14)

_____________________________________________________________________________________________

Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.                                                          fixed-shopping-list.js:21
    at addItem (fixed-shopping-list.js:21:12)
    at HTMLButtonElement.onclick (shopping-list.html:47:14)

_____________________________________________________________________________________________

Uncaught ReferenceError: Cannot access 'li' before initialization                                                      fixed-shopping-list.js:29
    at removeItem (fixed-shopping-list.js:29:24)
    at HTMLButtonElement.onclick (shopping-list.html:56:14)



*/
