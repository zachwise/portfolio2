// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(203, 182, 119, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.backgroundColor = '#cbb677';
        navbar.style.boxShadow = 'none';
    }
});




MicroModal.init({
            // This event fires when the modal is fully closed
            onClose: modal => {
                // 1. Target the iframe using its ID from Step 3
                const videoIframe = modal.querySelector('#modal-video-iframe');

                if (videoIframe) {
                    // 2. Get the current source URL
                    const currentSrc = videoIframe.src;
                    
                    // 3. Reset the source. This stops the video and reloads the player.
                    videoIframe.src = currentSrc;
                }
            },
            disableScroll: true // Prevents background page from scrolling
        });