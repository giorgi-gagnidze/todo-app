"use strict";

const btnAdd = document.querySelector(".btn-add");

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.querySelector(".todo-input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    console.log("Input is empty");
  } else {
    document.querySelector(".myList").appendChild(li);
  }
  console.log(inputValue);
}

btnAdd.addEventListener("click", newElement);
