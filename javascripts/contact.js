////////////////////////////////// CONTACT FORM CODE//////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const responseContainer = document.getElementById('responseContainer');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        try {
            // Simulating a successful submission without making an actual request
            // In a real scenario, you would replace this with your actual form submission logic.
            // For now, we'll just use a setTimeout to simulate an asynchronous operation.
            setTimeout(() => {
                // Clear the form fields if needed
                contactForm.reset();

                // Display a success message
                responseContainer.textContent = 'Form submitted successfully!';

                // Clear the message after 5 seconds
                setTimeout(() => {
                    responseContainer.textContent = '';
                }, 5000); // 5000 milliseconds = 5 seconds
            }, 1000); // Simulating a delay of 1 second (adjust as needed)
        } catch (error) {
            console.error('Error submitting form:', error);
            responseContainer.textContent = 'Error submitting form. Please try again.';
        }
    });


});


function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;

    console.log(phoneNumber);
    // Check if the phone number has exactly 10 digits
    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
