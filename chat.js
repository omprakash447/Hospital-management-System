let tab = document.getElementById("tab");
let tabcontent = document.getElementById("tabcontent");
let cross = document.getElementById("cross");
let h1 = document.getElementById("h1");
let main = document.getElementById("main");
let gallery = document.getElementById("gallery");
let x = document.getElementById("x");


// tab.addEventListener("click", function() {
//     tabcontent.style.display = "block";
//     tab.style.display = "none";
//     cross.style.display = "block";
//     h1.style.display = "none";
//     image.style.display = "none";
//     main.style.display = "none";
//     gallery.style.display = "none";
//     x.style.display="none";
//     x.style.position="relative"

// })
// cross.addEventListener("click", function() {
//     tabcontent.style.display = "none";
//     tab.style.display = "block";
//     cross.style.display = "none";
//     h1.style.display = "block";
//     image.style.display = "block";
//     main.style.display = "block";
//     gallery.style.display = "block";

// })


let box = document.getElementById("box");
let inputs = document.getElementById("inputs");
let button = document.getElementById("send");

button.addEventListener("click", function() {
    let chatinfo = inputs.value.trim();
    if (chatinfo !== "") {
        const li = document.createElement("li");
        li.innerHTML = chatinfo;
        li.style.fontSize = "20px";
        li.style.padding = "20px";
        li.style.backgroundColor = "rgb(216, 96, 53)";
        // li.style.backgroundColor="rgb(216, 96, 53)";
        li.style.width = "60%";
        li.style.color = "white";
        // li.innerHTML=`<hr>`
        box.appendChild(li);
    }
});




setInterval(function() {
    timeout.style.display = "block";
    body.style.display = "none";

}, 2000);