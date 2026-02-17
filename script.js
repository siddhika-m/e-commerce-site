//portfolio section image render funtion
const mainImg = document.getElementById("mainImg");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
let mIndex = 1;

const mImg1 = "images/image-product-1.jpg";
const mImg2 = "images/image-product-2.jpg";
const mImg3 = "images/image-product-3.jpg";
const mImg4 = "images/image-product-4.jpg";


img1.onclick = function () {
    mIndex = 1
    mainImg.src = mImg1
}

img2.onclick = function () {
    mIndex = 2
    mainImg.src = mImg2
}

img3.onclick = function () {
    mIndex = 3
    mainImg.src = mImg3
}

img4.onclick = function () {
    mIndex = 4
    mainImg.src = mImg4
}

//add item plus-minus function
let valueElement = document.getElementById("value");
let minusBtn = document.getElementById("minus");
let plusBtn = document.getElementById("plus");
let counterValue = 0;

valueElement.value = counterValue;

minusBtn.onclick = function () {
    if (counterValue > 0) {
        counterValue -= 1;
        valueElement.value = counterValue;
    }
    else {
        valueElement.value = 0;
    }
}

plusBtn.onclick = function () {
    counterValue += 1;
    valueElement.value = counterValue;
}

//adding functionality to the slide buttons
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.onclick = function () {
    if (mIndex === 1) {
        mainImg.src = mImg4
        mIndex = 4
    }
    else if (mIndex === 2) {
        mainImg.src = mImg1
        mIndex = 1
    }
    else if (mIndex === 3) {
        mainImg.src = mImg2
        mIndex = 2
    }
    else if (mIndex === 4) {
        mainImg.src = mImg3
        mIndex = 3
    }
}

nextBtn.onclick = function () {
    if (mIndex === 1) {
        mainImg.src = mImg2
        mIndex = 2
    }
    else if (mIndex === 2) {
        mainImg.src = mImg3
        mIndex = 3
    }
    else if (mIndex === 3) {
        mainImg.src = mImg4
        mIndex = 4
    }
    else if (mIndex === 4) {
        mainImg.src = mImg1
        mIndex = 1
    }
}

//adding funcitonality to the toggle button
let toggleBtn = document.getElementById("toggleBtn");
let navItems = document.getElementById("nav-items");
let close = document.getElementById("close");

toggleBtn.onclick = function(){
    navItems.style.display= "inline-block";
    close.style.display ="block"
}

close.onclick = function(){
    navItems.style.display ="none";
}
