const clickMe = document.getElementById('clickMe');

console.log(clickMe);

clickMe.style.backgroundColor = '#fff';

function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');

    modal.onclick = closedModal;

    const modalContent = document.querySelector('#modal > div');
    modalContent.onclick = function(event) {
        console.log(event);
        event.stopPropagation();
    };
}

function closedModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

clickMe.onclick = showModal;

const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

const openModal = function() {
    document.main.classList.add('modal-open');
};
const closeModal = function() {
    document.body.classList.remove('modal-open');
  };
  
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  
  
