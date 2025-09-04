// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()





// switching taxes on home page
    let taxSwitch = document.getElementById("switchCheckDefault");
    if(taxSwitch){
      taxSwitch.checked = false;

      taxSwitch.addEventListener("click", () => {
        let allCards = document.querySelectorAll(".listingCard");

        for (let card of allCards) {
            // This is the parent <p> tag that contains everything
            let priceElement = card.querySelector(".card-price"); 
            let originalPrice = parseFloat(priceElement.dataset.price);

            if (taxSwitch.checked) {
                // If switch is ON:
                let totalPrice = Math.round(originalPrice * 1.18);
                let formattedTotalPrice = totalPrice.toLocaleString('en-in', {
                    style: 'currency',
                    currency: 'INR',
                    minimumFractionDigits: 0
                });
                priceElement.innerHTML = `
                    <strong> ${formattedTotalPrice} </strong>/ Night<span style="opacity: 0.7;"> &nbsp with taxes</span>`;
            } 
            else {
                // If switch is OFF:
                let formattedOriginalPrice = originalPrice.toLocaleString('en-in', {
                    style: 'currency',
                    currency: 'INR',
                    minimumFractionDigits: 0
                });
                priceElement.innerHTML = `
                    <strong>${formattedOriginalPrice} </strong>/ Night
                    <i class="tax-info"> &nbsp; &nbsp;+18% GST</i>
                `;
            }
        }
    });
    }
    
