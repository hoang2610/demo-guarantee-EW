document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.tab-item').forEach(item => {
        item.addEventListener('click', function () {
            let mapFrame = document.getElementById('map-frame');
            let newUrl = this.getAttribute('data-url');
            mapFrame.src = newUrl;
        });
    });
});
