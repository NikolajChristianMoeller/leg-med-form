"use strict";

window.addEventListener("load", initApp);


function start() {
    console.log("Javascript Kører");
    document.querySelector("form#signup").addEventListener("click", clickSubmit);
}

function clickSubmit() {
  console.log("Click submit)");
}