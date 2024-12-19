document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const thankYouModal = document.getElementById('thankYouModal');
    const closeButton = document.querySelector('.close-thank-you');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        
        try {
            const response = await fetch('https://formsubmit.co/kudziemuks@gmail.com', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Show thank you modal
                thankYouModal.classList.add('active');
                // Reset form
                form.reset();
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        }
    });

    closeButton.addEventListener('click', function() {
        thankYouModal.classList.remove('active');
    });

    // Close modal when clicking outside
    thankYouModal.addEventListener('click', function(e) {
        if (e.target === thankYouModal) {
            thankYouModal.classList.remove('active');
        }
    });
}); 