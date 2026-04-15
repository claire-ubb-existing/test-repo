// very important business logic
document.addEventListener('DOMContentLoaded', () => {
    // increment the very real visitor counter
    const counter = document.querySelector('.visitor-counter');
    if (counter) {
        const count = Math.floor(Math.random() * 99999);
        counter.textContent = `You are visitor #${String(count).padStart(6, '0')}`;
    }

    // cursor trail because it's 1999
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        trail.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 500);
    });

    // alert the user about important things
    console.log('🚧 This website is under construction 🚧');
    console.log('Please do not judge me');
});
