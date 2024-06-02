function exploreMore() {
    alert("Terima kasih telah menjelajah lebih jauh!");
}

document.getElementById('mobile-menu').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});
