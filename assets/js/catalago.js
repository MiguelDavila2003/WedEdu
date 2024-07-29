document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfFrame');
    const closeBtn = document.querySelector('.modal .close');

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const pdfUrl = this.getAttribute('data-pdf');
            pdfFrame.src = pdfUrl;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        pdfFrame.src = '';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            pdfFrame.src = '';
        }
    });
});
