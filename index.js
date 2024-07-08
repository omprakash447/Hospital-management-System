let tab = document.getElementById("tab");
let tabcontent = document.getElementById("tabcontent");
let cross = document.getElementById("cross");
let h1 = document.getElementById("h1");
let main = document.getElementById("main");
let gallery = document.getElementById("gallery");

tab.addEventListener("click", function() {
    tabcontent.style.display = "block";
    tab.style.display = "none";
    cross.style.display = "block";
    h1.style.display = "none";
    image.style.display = "none";
    main.style.display = "none";
    gallery.style.display = "none";

})
cross.addEventListener("click", function() {
    tabcontent.style.display = "none";
    tab.style.display = "block";
    cross.style.display = "none";
    h1.style.display = "block";
    image.style.display = "block";
    main.style.display = "block";
    gallery.style.display = "block";

})

// imageoffset
let image = document.getElementById("image");

window.addEventListener("scroll", function() {
    updtimg();
})

function updtimg() {
    image.style.opacity = 1 - window.pageYOffset / 800;
    image.style.backgroundSize = 200 - window.pageYOffset / 10 + "%";
}


// image-slider
let slider = document.querySelectorAll(".slider");
let count = 0;

slider.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
});

const slideimage = function() {
    slider.forEach(function(x) {
        x.style.transform = `TranslateX(-${count * 100}%)`;
        // slider.style.transform="rotate(10deg)";
    })
}

let left = document.getElementById("left");
let right = document.getElementById("right");

left.addEventListener("click", function() {
    count--;
    slideimage();
})
right.addEventListener("click", function() {
    count++;
    slideimage();
})





// loading
let icon = document.getElementById("icon");
let timeout = document.getElementById("timeout");
let body = document.getElementById("body");



const time = setInterval(function() {
    timeout.style.display = "block";
    body.style.display = "none";
    icon.style.display = "block";

}, 4000);











// light to dark theme

let moon = document.getElementById("moon");
let body1 = document.querySelector("body");
let dark = true;
let footer = document.getElementById("footer");
let nav = document.getElementById("nav");
let ul = document.getElementById("ul");

moon.addEventListener("click", function() {
    if (dark) {
        body1.style.background = "#222";
        body1.style.color = "white";
        tabcontent.style.background = "#222";
        tabcontent.style.color = "#fff";
        footer.style.background = "black";
        nav.style.background = "black";
        ul.style.color = "#fff";
        // nav.style.background="#fff";
        ul.style.color = "white";

        dark = false;
    } else {
        body1.style.background = "white";
        body1.style.color = "black";
        tabcontent.style.background = "#fff";
        footer.style.background = "#222";
        nav.style.background = "#fff";
        dark = true;

    }

})




// click sound
tab.addEventListener('click', function() {
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
});

cross.addEventListener('click', function() {
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
});




// animation


// let currpos = window.pageYOffset;

// const animation = function() {
//     const newpos = window.pageYOffset;
//     const diff = newpos - currpos;
//     const speed = diff * 0.15;

//     timeout.style.transform = "skew(" + speed + "deg)";

//     currpos = newpos;

//     requestAnimationFrame(animation);
// }

// animation();




// prescription
let prescription = document.getElementById("prescription");
let body2 = document.getElementsByClassName("body2");
let bd2 = document.getElementById("bd2");
let click = document.getElementById("click");


bd2.style.opacity = "0.5";

click.addEventListener("click", () => {
    bd2.style.opacity = "1"
    click.style.display = "none";
    prescription.style.display = "none";
})