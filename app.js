"use strict";

window.addEventListener("load", start);


function start() {
    console.log("Javascript Kører");
  document.querySelector("#signup").addEventListener("submit", clickSubmit);
  document.querySelector("#signup-accept").addEventListener("click", clickAccept);
}

function clickAccept() {
  console.log(event.target.checked);
  // if (event.target.checked === true) {
  //   document.querySelector("#btn-submit").disabled = false;
  // } else {
  //   document.querySelector("#btn-submit").disabled = true;
  // }
  document.querySelector("#btn-submit").disabled = !event.target.checked;
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

  // // // ellers brug

  // // const signup = {
  // //   fullname: "",
  // //   email: "",
  // //   username: "",
  // //   password: "",
  // //   payevery: "",
  // //   spam: true
  // // }

  // for (const prop in signup) {
    
  // })

  console.log(signup);
}