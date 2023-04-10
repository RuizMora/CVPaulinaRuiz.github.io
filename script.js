document.addEventListener("DOMContentLoaded", function(event) {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
});

window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelectorAll('.square');
        for (let i = 0; i < square.length; i++) {
           // square[i].style.backgroundColor = "red";
            if (entry.isIntersecting) {
                square[i].classList.add('square-animation');
            }else{
                square[i].classList.remove('square-animation');
            }
    
            
        }
        
    });
});

observer.observe(document.querySelector('.square-wrapper'));