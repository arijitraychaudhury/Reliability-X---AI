function buyNow() {
  document.getElementById("payment").classList.remove("hidden");
}

function copyUPI() {
  navigator.clipboard.writeText("yourupi@upi");
  alert("UPI copied!");
}

function toggleMode() {
  document.body.classList.toggle("light");
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView();
}
