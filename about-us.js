let tab = document.getElementById("tab");
let tabcontent = document.getElementById("tabcontent");
let cross = document.getElementById("cross");
let h1 = document.getElementById("h1");
let main = document.getElementById("main");
let gallery = document.getElementById("gallery");
let footer = document.getElementsByClassName("footer");

tab.addEventListener("click", function() {
    tabcontent.style.display = "block";
    tab.style.display = "none";
    cross.style.display = "block";
    h1.style.display = "none";
    footer.style.display = "none";


})
cross.addEventListener("click", function() {
    tabcontent.style.display = "none";
    tab.style.display = "block";
    cross.style.display = "none";
    h1.style.display = "block";
    footer.style.display = "block";

})


// loading animation

let body = document.getElementById("body");
let timeout = document.getElementById("timeout");



setInterval(function() {
    timeout.style.display = "block";
    body.style.display = "none";

}, 2000);




// click sound
tab.addEventListener('click', function() {
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
});

cross.addEventListener('click', function() {
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
});