// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('a[href="#company"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('company').scrollIntoView({ behavior: 'smooth' });
    });
});
