document.addEventListener('DOMContentLoaded', function() {
    // Current Year for Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            navbar.classList.toggle('active');
            // Toggle icon from bars to times (X)
            const icon = hamburger.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Form Submission (Example for Contact Page)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server
            // using fetch() API or XMLHttpRequest.
            // For this static example, we'll just simulate success/error.

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted:', { name, email, subject, message });

            // Simulate a server response
            setTimeout(() => {
                const isSuccess = Math.random() > 0.3; // 70% chance of success

                if (isSuccess) {
                    formMessage.textContent = 'Pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda.';
                    formMessage.className = 'form-message success';
                    contactForm.reset(); // Clear form fields
                } else {
                    formMessage.textContent = 'Terjadi kesalahan saat mengirim pesan. Mohon coba lagi.';
                    formMessage.className = 'form-message error';
                }
                formMessage.style.display = 'block'; // Show the message
            }, 1000); // Simulate network delay
        });
    }

    // Project Filtering (if implemented on projects.html)
    // const filterButtons = document.querySelectorAll('.filter-btn');
    // const projectItems = document.querySelectorAll('.project-item');

    // if (filterButtons.length > 0 && projectItems.length > 0) {
    //     filterButtons.forEach(button => {
    //         button.addEventListener('click', function() {
    //             filterButtons.forEach(btn => btn.classList.remove('active'));
    //             this.classList.add('active');

    //             const filter = this.dataset.filter;

    //             projectItems.forEach(item => {
    //                 if (filter === 'all' || item.dataset.category === filter) {
    //                     item.style.display = 'block'; // Or 'grid'/'flex' depending on your CSS
    //                 } else {
    //                     item.style.display = 'none';
    //                 }
    //             });
    //         });
    //     });
    // }
});