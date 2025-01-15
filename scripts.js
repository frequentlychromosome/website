// JavaScript to handle form submission and show a thank-you message
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from actually submitting
    const responseMessage = document.getElementById("response-msg");

    // Simulate form submission (you can replace this with an actual API call or form handler)
    setTimeout(function() {
        responseMessage.style.display = "block";  // Show thank you message
    }, 500);
});
