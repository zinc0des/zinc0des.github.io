const clickMe = document.getElementById('clickMe');

console.log(clickMe);

clickMe.style.backgroundColor = '#fff';

function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');

    modal.onclick = closeModal;

    const modalContent = document.querySelector('#modal > div');
    modalContent.onclick = function(event) {
        console.log(event);
        event.stopPropagation();
    };
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

clickMe.onclick = showModal;