
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if(window.scrollY > 50) {
        nav.style.padding = '10px 15px';
        nav.style.backgroundColor = 'rgba(0,0,0,0.9)';
        nav.style.transition = 'padding 0.3s ease, background-color 0.3s ease';
    } else {
        nav.style.padding = '15px';
        nav.style.backgroundColor = 'black';
        nav.style.transition = 'padding 0.3s ease, background-color 0.3s ease';
    }
});


const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'opacity 1s ease, transform 1s ease';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    observer.observe(section);
});
