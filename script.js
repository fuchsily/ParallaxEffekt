// script.js
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.parallax-item').forEach(item => {
        const speed = item.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;
        
        item.style.transform = `translate(${x}px, ${y}px)`;
    });
});
