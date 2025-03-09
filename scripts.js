document.addEventListener('DOMContentLoaded', function() {
    // Visitor Counter Logic
    let count = localStorage.getItem('visitorCount') || 0;
    count++;
    localStorage.setItem('visitorCount', count);
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        counterElement.textContent = count;
    }

    // Event listener for the "Hire Me" button on the Home section
    const hireMeButton = document.getElementById('hire-me');
    if (hireMeButton) {
        hireMeButton.addEventListener('click', function() {
            alert('Thank you for your interest! Please contact me at vish6933@gmail.com.');
        });
    }

    // Event listener for the "Download Resume" button on the About section
    const resumeButton = document.getElementById('resume');
    if (resumeButton) {
        resumeButton.addEventListener('click', function() {
            window.location.href = 'resume.pdf';
        });
    }

    // Event listeners for the social media icons on the Contact section
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            const platform = this.querySelector('i').classList[1].split('-')[1];
            switch (platform) {
                case 'github':
                    window.open('https://github.com/yourprofile', '_blank');
                    break;
                case 'twitter':
                    window.open('https://twitter.com/yourprofile', '_blank');
                    break;
                case 'whatsapp':
                    window.open('https://wa.me/yourphonenumber', '_blank');
                    break;
                case 'envelope':
                    window.location.href = 'mailto:youremail@example.com';
                    break;
                case 'instagram':
                    window.open('https://instagram.com/yourprofile', '_blank');
                    break;
                case 'facebook':
                    window.open('https://facebook.com/yourprofile', '_blank');
                    break;
                default:
                    break;
            }
        });
    });
});
