// Inicialização do Swiper para a galeria
const gallerySwiper = new Swiper('.gallery-swiper', {
    // Efeito de slide
    effect: 'slide',
    
    // Loop infinito
    loop: true,
    
    // Slides por view
    slidesPerView: 5,
    spaceBetween: 24, /* 30px * 0.8 */
    
    // Breakpoints responsivos
    breakpoints: {
        256: { /* 320px * 0.8 */
            slidesPerView: 1,
            spaceBetween: 12 /* 15px * 0.8 */
        },
        614: { /* 768px * 0.8 */
            slidesPerView: 2,
            spaceBetween: 16 /* 20px * 0.8 */
        },
        794: { /* 992px * 0.8 */
            slidesPerView: 3,
            spaceBetween: 20 /* 25px * 0.8 */
        },
        960: { /* 1200px * 0.8 */
            slidesPerView: 4,
            spaceBetween: 24
        },
        1280: { /* 1600px * 0.8 */
            slidesPerView: 5,
            spaceBetween: 24
        }
    },
    
    // Adicionar setas de navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Configurações adicionais
    grabCursor: true,
    preventClicks: true,
    preventClicksPropagation: true,
});

function toggleSound(button) {
    const video = button.previousElementSibling;
    const icon = button.querySelector('i');
    
    if (video.muted) {
        video.muted = false;
        icon.className = 'fas fa-volume-up';
    } else {
        video.muted = true;
        icon.className = 'fas fa-volume-mute';
    }
}

// Smooth scroll for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links
    const allLinks = document.querySelectorAll('a[href*="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section id from the href
            const targetId = this.getAttribute('href').split('#')[1];
            
            // Only handle if it's an internal link with a target
            if (targetId && !this.href.includes('://')) {
                const targetSection = document.getElementById(targetId);
                
                // If target section exists on current page
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
