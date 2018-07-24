(function() {
  
    // Array of image URLs to display
    const slides = [
      'fortuneteller_shot.jpg',
      'petsrunamok_shot.jpg',
      'shopping-cart_shot.jpg',
      'customer_shot.jpg',
      'bank-teller-shot.jpg',
      'courses-topics-textbooks-shot.jpg',
      'reviews_pop_shot.jpg' 
    ];
  
    // Index of currently displayed URL
    let currentIndex = 0;
  
    // Empty until later: a reference to our interval to rotate
    // through images... storing it in a variable allows us to
    // cancel it whenever we want
    let rotation;
  
    // The DOM elements that comprise our carousel
    const prev = document.querySelector('.carousel .prev');
    const next = document.querySelector('.carousel .next');
    const view = document.querySelector('.carousel .view');
    const imgs = document.querySelector('.carousel .imgs');
  
    // Iterate through the image URLs, creating the preview
    // icons at the bottom of the carousel
    for (let i = 0; i < slides.length; i++) {
  
      // Create the <img> element
      let imgUrl = slides[i];
      const img = document.createElement('img');
      img.setAttribute('src', './images/' + imgUrl);
      imgs.appendChild(img);
  
      // When preview is clicked, display that image
      img.addEventListener('click', function() {
        currentIndex = i;
        showSlide();
        clearInterval(rotation);
      });
    }
  
    // Clicking "previous" button displays previous image
    prev.addEventListener('click', function() {
      prevSlide();
      clearInterval(rotation);
    });
  
    // Clicking "next" button displays next image
    next.addEventListener('click', function() {
      nextSlide();
      clearInterval(rotation);
    });
  
    // Display slide in view based on value of currentIndex
    function showSlide() {
      view.innerHTML = '';
      const imgUrl = slides[currentIndex];
      const img = document.createElement('img');
      img.setAttribute('src', './images/' + imgUrl);
      view.appendChild(img);
    }
  
    // Change currentIndex, looping if needed, then show slide
    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
      showSlide();
    }
  
    // Change currentIndex, looping if needed, then show slide
    function nextSlide() {
      currentIndex++;
      if (currentIndex === slides.length) {
        currentIndex = 0;
      }
      showSlide();
    }
    
    // Display the first slide in the carousel
    showSlide();
  
    // Begin by setting an interval to loop through the images
    // Store it in a variable to be cleared on user interaction
    rotation = setInterval(function() {
      nextSlide();
    }, 2000);
  
  })();
