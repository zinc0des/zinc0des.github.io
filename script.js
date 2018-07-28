const clickMe = document.getElementById('clickMe');

console.log(clickMe);

clickMe.style.backgroundColor = '#fff';

function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');

    modal.onclick = closedModal;

    const modalContent = document.querySelector('#modal > div');
    modalContent.onclick = function (event) {
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

const openModal = function () {
    document.body.classList.add('modal-open');
};
const closeModal = function () {
    document.body.classList.remove('modal-open');
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

const modalScreen = document.getElementById('modal-screen');
modalScreen.addEventListener('click', closeModal);

const modalBox = document.getElementById('modal-box');
modalBox.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Navigation menu can be toggled
addNavEventListeners();
function addNavEventListeners() {

    const nav = document.querySelector('nav');

    const navClickHandler = function () {
        this.classList.toggle('open');
        event.stopPropagation();
    };

    nav.addEventListener('click', navClickHandler);

    const bodyClickHandler = function () {
        nav.classList.remove('open');
    };

    document.body.addEventListener('click', bodyClickHandler);
};

addArticleEventListeners();
  // Project details can be expanded
function addArticleEventListeners() {

    const projTexts = document.querySelectorAll('.projectDetailsDiv');

    for (let projText of projTexts) {
        let button = projText.querySelector('.showDetails');

        button.addEventListener('click', function () {
            projText.classList.toggle('expanded');
            button.innerHTML = projText.classList.contains('expanded') ?
                'Hide Details' : 'Show Details';
        });
    };
};


// Resizing the window resets open/closed product details
  // Resizing the window resets nav visibility
  function addWindowEventListeners() {

    const windowResizeHandler = function() {

      const nav = document.querySelector('nav');
      nav.classList.remove('open');

      const articles = document.querySelectorAll('#projects article');
      
      for (let article of articles) {
        article.classList.remove('expanded');
      }
    };

    window.addEventListener('resize', windowResizeHandler); 
  }