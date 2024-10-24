document.getElementById('rentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const genderPreference = document.getElementById('genderPreference').value;
    const duration = document.getElementById('duration').value;
    const contact = document.getElementById('contact').value;

    // Define message based on gender preference
    let rentedType = (genderPreference === 'girlfriend') ? 'Girlfriend' : 'Boyfriend';

    // Display a custom success message with congratulations
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerText = `🎉 Congratulations ${name}! You have rented a ${rentedType} for ${duration} hour(s). We'll contact you shortly at ${contact}.`;
    responseMessage.style.opacity = '1';

    // Clear the form fields
    document.getElementById('rentForm').reset();

    // Hide the message after 7 seconds
    setTimeout(() => {
        responseMessage.style.opacity = '0';
    }, 7000);
});
