document.addEventListener("DOMContentLoaded", function () {
  const checkBox = document.getElementById("check");
  const container = document.querySelector(".container");

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      container.style.backgroundColor = "#333"; // Change background color to dark
    } else {
      container.style.backgroundColor = "aliceblue"; // Change background color to green
    }
  });
});
