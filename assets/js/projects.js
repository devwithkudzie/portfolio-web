document.addEventListener('DOMContentLoaded', function() {
    // Check if device is touch-enabled
    const isTouchDevice = ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0) || 
        (navigator.msMaxTouchPoints > 0);

    const flipCards = document.querySelectorAll('.flip-card');

    if (isTouchDevice) {
        flipCards.forEach(card => {
            card.classList.add('touch-device');
            
            card.addEventListener('click', function() {
                // Remove 'touched' class from all other cards
                flipCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('touched');
                    }
                });
                
                // Toggle 'touched' class on clicked card
                this.classList.toggle('touched');
            });
        });

        // Close card when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.flip-card')) {
                flipCards.forEach(card => {
                    card.classList.remove('touched');
                });
            }
        });
    }
}); 