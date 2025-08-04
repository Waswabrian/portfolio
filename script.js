document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href').substring(1); // Get the section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic form submission (you'll need a backend for actual email sending)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            alert('Thank you for your message! (Form submission is simulated for this example. A backend is needed to send actual emails.)');

            // In a real scenario, you would send this data to a server
            // using fetch() or XMLHttpRequest.
            // Example:
            /*
            const formData = new FormData(contactForm);
            fetch('/send-email.php', { // Replace with your backend endpoint
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Message sent successfully!');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            });
            */
            contactForm.reset(); // Clear form fields after "submission"
        });
    }
});