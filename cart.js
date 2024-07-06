let tab = document.getElementById("tab");
let tabcontent = document.getElementById("tabcontent");
let cross = document.getElementById("cross");
let h1 = document.getElementById("h1");
let main = document.getElementById("main");
let gallery = document.getElementById("gallery");
// let cartbtn = document.getElementById("cartbtn");

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

});



// loading animation
let body = document.getElementById("body");
let timeout = document.getElementById("timeout");



setInterval(function() {
    timeout.style.display = "block";
    body.style.display = "none";

}, 2000);




// product array


const productsofFever = [{
        image: "https://th.bing.com/th?id=OPAC.8W8s%2bvhy8oq50Q474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1",
        name: "Vedchakra's Fever Care Syrup - 100 Ml | Natural Relief From Chronic Fever |",
        price: 1000,
        hospital: "SOA",
    }, {
        image: "https://th.bing.com/th?id=OPAC.WCer2pcJWHvRZA474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1",
        name: "Dr. Rajeev's FEVEREX Homeopathic Medicine Syrup A Unique Preparation For",
        price: 800,
        hospital: "SOA",
    }, {
        image: "https://th.bing.com/th?id=OPAC.ueWnxdvPUKKqkA474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1",
        name: "Holistic Healings BLOOUME 14 FEVER CARE DROPS 30 ML BIOFORCE",
        price: 400,
        hospital: "SOA",
    }, {
        image: "https://th.bing.com/th?id=OPAC.iTZQh5Gt%2byuoSw474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1",
        name: "Dr. Era Fevrall Fever Drop Effective Relief Adults & Children Dosage For Malaria &",
        price: 140,
        hospital: "SOA",
    },

    {
        image: "https://th.bing.com/th?id=OPAC.eAz%2fNbyk4JuHnA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        name: "Aayucure 100% Natural Melaflu Tablets Ayurvedic Medicine For Cold & Fever - 100",
        price: 500,
        hospital: "SOA",
    }, {
        image: "https://th.bing.com/th?id=OPAC.iTZQh5Gt%2byuoSw474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1",
        name: "Allen A33 Fever Drops (30Ml)",
        price: 145,
        hospital: "SOA",
    },

    {
        image: "https://th.bing.com/th?id=OPAC.0GQFMOFiOBWRIg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        name: "Organic Homoeo D-Fever Plus Syrup (100Ml) || Pack Of 2",
        price: 180,
        hospital: "SOA",
    }, {
        image: "https://th.bing.com/th?id=OPAC.kOK1rzlf7c2CMg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        name: "IMC Herbal Fever Guard",
        price: 300,
        hospital: "SOA",
    },


    {
        image: "https://th.bing.com/th?id=OPAC.JQ5zLFpczpq7Bg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        name: "Similia India Feverid Syrup (60Ml)",
        price: 500,
        hospital: "SOA",
    }, {
        image: "https://th.bing.com/th?id=OPAC.%2bA%2fz7SUjWIzNnw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        name: "Ray_Enterprise IMC Herbal Ayurvedic Herbal Feverguard Tablet Packof 1 (30",
        price: 145,
        hospital: "SOA",
    },

    {
        image: "https://th.bing.com/th?id=OPAC.xzz2heRqEwR%2f1A474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        name: "Medilexicon Feverex Drop",
        price: 180,
        hospital: "SOA",
    }, {
        image: "https://th.bing.com/th?id=OPAC.17%2fQf1CDfeUCqw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        name: "Similia Feverex Syrup (60 Ml) || Pack Of 3",
        price: 300,
        hospital: "SOA",
    },
];


function displayFever() {
    let divstring1 = "";
    for (var i = 0; i < productsofFever.length; i++) {
        divstring1 = divstring1 + `
        
                    <div class="product1">
                    <img src="${productsofFever[i].image}" alt="">
                    <h1>${productsofFever[i].name}</h1>
                    <p>$${productsofFever[i].price}only</p>
                    <p>${productsofFever[i].hospital}</p>
                    <button id="btnproduct" data-name=${productsofFever[i].name} data-price=${productsofFever[i].price} data-image=${productsofFever[i].image}>Buy</button>
                    </div>
        `;


    }
    let product = document.getElementById("product").innerHTML = divstring1;
}
displayFever();

let btnproduct = document.querySelectorAll("#btnproduct");
let totalprice = 0;
let total = document.getElementById("total");



btnproduct.forEach(button => {
    button.addEventListener("click", function(e) {
        console.log("clicked");
        console.log(e.target);

        const productname = button.getAttribute("data-name");
        const productprice = parseFloat(button.getAttribute("data-price"));
        const ddataimg = button.getAttribute("data-img");


        const cartli = document.createElement("li");
        cartli.textContent = `${productname} - ${productprice.toFixed(2)}`;
        cartpage.appendChild(cartli)

        totalprice += productprice;
        total.textContent = "Total price is : " + totalprice.toFixed();

    })
})


// const cartItem = document.createElement('li');
//         cartItem.textContent = `${itemName} - ${itemPrice.toFixed(2)}`;
//         cartItems.appendChild(cartItem);

//         totalPrice += itemPrice;
//         totalPriceElement.textContent = totalPrice.toFixed(2);












const productcoldarray = [{
        cimage: "https://th.bing.com/th?id=OPAC.U4mKH2R8EPWN3w474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        cname: "Cipla Naselin Coldplus Rub 25Gm | Instant Relief & Relaxation From Cold | Coldrub",
        cprice: 261,
        chos: "SOA",
    }, {
        cimage: "https://th.bing.com/th?id=OPAC.3Hv9aoc6TMDjqg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        cname: "Dr. Era Sincold Drop Soothing Relief For Cough, Cold, Nasal Congestion, And",
        cprice: 279,
        chos: "SOA",
    },

    {
        cimage: "https://th.bing.com/th?id=OPAC.MTGPcbAt0iJqfg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        cname: "ANOOPAM AYURVEDA PRIVATE LIMITED Anoopam Ayurveda Anushwas | Ayurved",
        cprice: 221,
        chos: "SOA",
    }, {
        cimage: "https://th.bing.com/th?id=OPAC.Z6yw6p1Mxa4S1g474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        cname: "AROGYAM AYURVEDA Herbal Tea For Cough, Cold & Immunity And Ayurvedic",
        cprice: 379,
        chos: "SOA",
    },

    {
        cimage: "https://th.bing.com/th?id=OPAC.j670JYV9nmivxg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        cname: "Cipzer Respicure Syrup Ayurvedic Syrup For Cough & Cold, Provides Instant Relief",
        cprice: 304,
        chos: "SOA",
    }, {
        cimage: "https://th.bing.com/th?id=OPAC.lRDcqdZLIg%2fX1g474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        cname: "Samahan Instant Ayurvedic Care For Cold Cough Immunity (5 Sachets)",
        cprice: 279,
        chos: "SOA",
    },

    {
        cimage: "https://th.bing.com/th?id=OPAC.dDAkbohAZJCLTA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        cname: "Hapdco MTC-34 (Cold & Flu Drops) (30Ml)",
        cprice: 521,
        chos: "SOA",
    }, {
        cimage: "https://th.bing.com/th?id=OPAC.af81WjdcQZk07g474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        cname: "Cureado Immunity And Cough & Cold Care Combo(1 Immunojet And 3 Stemkof",
        cprice: 699,
        chos: "SOA",
    },
];



function displaycold() {
    let divstring2 = "";
    for (var i = 0; i < productcoldarray.length; i++) {
        divstring2 = divstring2 + `
        
                    <div class="product2">
                    <img src="${productcoldarray[i].cimage}"alt="">
                    <h1>${productcoldarray[i].cname}</h1>
                    <p>$${productcoldarray[i].cprice}only</p>
                    <p>${productcoldarray[i].chos}</p>
                    <button id="btnproduct1" data-name=${productcoldarray[i].cname} data-price=${productcoldarray[i].cprice}>buy</button>
                    </div>
        `;
    }
    let productcold = document.getElementById("productcold").innerHTML = divstring2;

}
displaycold();




let btn1product = document.querySelectorAll("#btnproduct1");
// let totalprice1=0;
// let total1=document.getElementById("total");



btn1product.forEach(button => {
    button.addEventListener("click", function(e) {
        console.log("clicked");
        console.log(e.target);

        const productname = button.getAttribute("data-name");
        const productprice = parseFloat(button.getAttribute("data-price"));
        // const ddataimg=button.getAttribute("data-img");


        const cartli = document.createElement("li");
        cartli.textContent = `${productname} - ${productprice.toFixed(2)}`;
        cartpage.appendChild(cartli)

        totalprice += productprice;
        total.textContent = "Total price is : " + totalprice.toFixed();

    })
})





const productorsarray = [{
        oimage: "https://th.bing.com/th?id=OPAC.9BDKnYm0T3GQsw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        oname: "Olyte Ors Liquid Orange",
        oprice: 29,
        ohos: "SOA",
    }, {
        oimage: "https://th.bing.com/th?id=OPAC.ghL%2fMEBVowSTbg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        oname: "Cipla Prolyte Ors Ready To Drink Oral Rehydration Contains Vital Electrolytes",
        oprice: 830,
        ohos: "SOA",
    }, {
        oimage: "https://th.bing.com/th?id=OPAC.TZvYTPrqIlCdpQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        oname: "Apollo Life ORS Lemon Flavour Powder, 21.8 Gm",
        oprice: 2,
        ohos: "SOA",
    }, {
        oimage: "https://th.bing.com/th?id=OPAC.WAyLR3mzrPenkQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        oname: "Fast&Up Reload ORS (40 Liters) Instant Hydration Drink For Athletes - 160",
        oprice: 1350,
        ohos: "SOA",
    },

    {
        oimage: "https://th.bing.com/th?id=OPAC.pP%2fCCBIbYeMvuw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        oname: "Walyte ORS Orange Flavour Powder - 22 Gm",
        oprice: 625,
        ohos: "SOA",
    }, {
        oimage: "https://th.bing.com/th?id=OPAC.018abKGtY766Fw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        oname: "ORSL Electrolyte Apple Drink, 200 Ml",
        oprice: 37,
        ohos: "SOA",
    }, {
        oimage: "https://th.bing.com/th?id=OPAC.TBxVI6t%2bO9dMFw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        oname: "Electrokind ORS (Pack Of 20)",
        oprice: 45,
        ohos: "SOA",
    }, {
        oimage: "https://th.bing.com/th?id=OPAC.%2fpnDlLdB%2blw6iQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        oname: "Kidney Re-Live Tablet - Krishna's Herbal And Ayurveda",
        oprice: 130,
        ohos: "SOA",
    },

];


function displayors() {
    let divstring3 = "";
    for (var i = 0; i < productorsarray.length; i++) {
        divstring3 = divstring3 + `
            <div class="product3">
                    <img src="${productorsarray[i].oimage}"alt="">
                    <h1>${productorsarray[i].oname}</h1>
                    <p>$${productorsarray[i].oprice}only</p>
                    <p>${productorsarray[i].ohos}</p>
                    <button id="btn2product" data-name=${productorsarray[i].oname} data-price=${productorsarray[i].oprice}>buy</button>
                    </div>
        
        `;
    }

    let ors = document.getElementById("ors");
    ors.innerHTML = divstring3;

}
displayors();




let btnproduct2 = document.querySelectorAll("#btn2product");
// let totalprice=0;
// let total2=document.getElementById("total");



btnproduct2.forEach(button => {
    button.addEventListener("click", function(e) {
        console.log("clicked");
        console.log(e.target);

        const productname = button.getAttribute("data-name");
        const productprice = parseFloat(button.getAttribute("data-price"));
        const ddataimg = button.getAttribute("data-img");


        const cartli = document.createElement("li");
        cartli.textContent = `${productname} - ${productprice.toFixed(2)}`;
        cartpage.appendChild(cartli)

        totalprice += productprice;
        total.textContent = "Total price is : " + totalprice.toFixed();

    })
})


// cartpage


let cartbtn = document.getElementById("cartbtn");
let cartpage = document.getElementById("cartpage");
let mark = document.getElementById("mark");



cartbtn.addEventListener("click", function() {
    cartpage.style.display = "block";
    mark.style.display = "block";
});


mark.addEventListener("click", function() {
    cartpage.style.display = "none";
    mark.style.display = "none";
});