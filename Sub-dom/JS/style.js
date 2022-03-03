var likeButton = document.getElementsByClassName("test1");
var removeButton = document.getElementsByClassName("test2");
var itemDiv = document.getElementsByClassName("jewelry");
var numbersDiv = document.getElementsByClassName("numbers");
var addition = document.getElementsByClassName("plus-sign");
var subtraction = document.getElementsByClassName("minus-sign");
var quantity = document.getElementsByClassName("quantity");
var price = document.getElementsByClassName("price");
var total = document.getElementsByClassName("total");
var subTotal = document.getElementById("subtotal");

for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", function () {
    likeButton[i].classList.toggle("heart-on");
  });
}

for (let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener("click", function () {
    itemDiv[i].classList.add("bin");
  });
}

for (let i = 0; i < addition.length; i++) {
  addition[i].addEventListener("click", function () {
    numbersDiv[i].innerHTML++;
    total[i].innerHTML = +price[i].innerHTML * +numbersDiv[i].innerHTML;
    subTotal.innerHTML = +subTotal.innerHTML + +price[i].innerHTML;
  });
}

for (let i = 0; i < subtraction.length; i++) {
  subtraction[i].addEventListener("click", function () {
    if (numbersDiv[i].innerHTML == 0) {
      itemDiv[i].classList.add("bin");
    } else {
      numbersDiv[i].innerHTML--;
      total[i].innerHTML = +price[i].innerHTML * +numbersDiv[i].innerHTML;
      subTotal.innerHTML = +subTotal.innerHTML - +price[i].innerHTML;
    }
  });
}
