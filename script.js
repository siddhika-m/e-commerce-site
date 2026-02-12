//portfolio section image render funtion
const mainImg = document.getElementById("mainImg");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

img1.onclick = function () {
    mainImg.src = "images/image-product-1.jpg"
}

img2.onclick = function () {
    mainImg.src = "images/image-product-2.jpg"
}

img3.onclick = function () {
    mainImg.src = "images/image-product-3.jpg"
}

img4.onclick = function () {
    mainImg.src = "images/image-product-4.jpg"
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