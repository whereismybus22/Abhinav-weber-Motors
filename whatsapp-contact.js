let selectedProduct = "";

function selectProduct(product) {
  selectedProduct = product;
}

function sendToWhatsApp(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company").value;

  // Format message
  const message =
    `Hello, I would like to request information. \n\n` +
    `First Name: ${firstName} \n` +
    `Last Name: ${lastName} \n` +
    `Email: ${email} \n` +
    `Company Name: ${company} \n` +
    `Product Selected: ${selectedProduct}`;

  // WhatsApp URL
  const phoneNumber = "+919010025943"; // Replace with the target phone number
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Open WhatsApp link in a new window
  window.open(whatsappLink, "_blank");
}
