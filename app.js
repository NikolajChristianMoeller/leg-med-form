"use strict";

window.addEventListener("load", initApp);


function start() {
    console.log("Javascript Kører");
    document.querySelector("#signup").addEventListener("submit", clickSubmit);
}

function clickSubmit(event) {

  event.preventDefault();
  
  console.log("Click submit");
  
  console.log(event.fullName);
  
  const elements = document.querySelector("form#signup").elements;

  const signup = {
    fullname: elements.namedItem("fullname").value,
    payment: elements.namedItem("payment").value
  }

  console.log(signup);
}