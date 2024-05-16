document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        // You can add code here to handle form submission, like sending an AJAX request
        alert("Thank you for your message!");
        form.reset(); // Reset the form after submission
    });
});
