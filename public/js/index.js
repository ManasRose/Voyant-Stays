document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("switchCheckDefault");
  const prices = document.querySelectorAll(".price");
  const taxLabels = document.querySelectorAll(".tax-label");

  toggle.addEventListener("change", function () {
    prices.forEach((priceEl, i) => {
      let base = parseFloat(priceEl.dataset.base);
      if (toggle.checked) {
        let taxed = Math.round(base * 1.18);
        priceEl.innerHTML = "₹" + taxed.toLocaleString("en-IN");
        taxLabels[i].style.display = "none"; // hide "+18% GST"
      } else {
        priceEl.innerHTML = "₹" + base.toLocaleString("en-IN");
        taxLabels[i].style.display = "inline"; // show "+18% GST"
      }
    });
  });
});
