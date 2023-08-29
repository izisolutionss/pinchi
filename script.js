const image = document.getElementById('image');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

image.addEventListener('click', () => {
    modal.style.display = 'flex';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
