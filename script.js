//your JS code here. If required.

let btn = document.getElementById("btn");
let container = document.getElementsByClassName("container")[0];

function start(){
    container.innerText = "";
    let line = document.createElement("div");
    line.id = "line";
    container.append(line);
};