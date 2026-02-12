const mainImg = document.getElementById("mainImg");
const img1 = document.getElementById("img1");
img1.onclick = function () {
    mainImg.src = "images/image-product-1.jpg"
}
const img2 = document.getElementById("img2");
img2.onclick = function () {
    mainImg.src = "images/image-product-2.jpg"
}
const img3 = document.getElementById("img3");
img3.onclick = function () {
    mainImg.src = "images/image-product-3.jpg"
}
const img4 = document.getElementById("img4");
img4.onclick = function () {
    mainImg.src = "images/image-product-4.jpg"
}

let valueElement = document.getElementById("value");
let minusBtn = document.getElementById("minus");
let plusBtn = document.getElementById("plus");
let counterValue = 0;

valueElement.value = counterValue;

minusBtn.onclick = function () {
    counterValue -= 1;
    valueElement.value = counterValue; 
}

plusBtn.onclick = function () {
    counterValue += 1;
    valueElement.value = counterValue; 
}