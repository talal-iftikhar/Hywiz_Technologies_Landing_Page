
const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: false, // Turn off Swiper autoplay since we're handling it with CSS
  breakpoints: {
    640: {
      slidesPerView: 12,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

  
// Select all video wrappers
const videoWrappers = document.querySelectorAll('.video-wrapper');

// Loop through each video wrapper and add click event
videoWrappers.forEach(wrapper => {
    const img = wrapper.querySelector('.video-thumbnail');
    const playButton = wrapper.querySelector('.play-button-overlay');
    const videoId = img.getAttribute('data-video').split('/').pop(); // Extract video ID
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Construct embed URL

    const iframe = document.createElement('iframe'); // Create an iframe element
    iframe.setAttribute('src', videoUrl);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', true);

    // Handle click event to play video in place
    wrapper.addEventListener('click', function() {
        img.style.display = 'none'; // Hide the image
        iframe.style.display = 'block'; // Show the iframe
        wrapper.appendChild(iframe); // Add iframe to wrapper
        wrapper.classList.add('playing'); // Add 'playing' class to hide play button
        playButton.style.display = 'none'; // Hide the play button overlay
    });
});


function animateProgressBars() {
  const progress1 = document.getElementById('progress1');
  const progress2 = document.getElementById('progress2');
  const label1 = document.getElementById('label1');
  const label2 = document.getElementById('label2');

  let progressValue1 = 0;
  let progressValue2 = 0;

  // Add a delay before starting the animations (e.g., 500ms delay)
  setTimeout(function() {
      // First progress bar and label (up to 90%)
      let progressInterval1 = setInterval(function() {
          if (progressValue1 <= 90) {
              progress1.style.width = progressValue1 + '%'; // Update progress bar width
              label1.innerText = progressValue1 + '%'; // Update label percentage
              progressValue1++;
          } else {
              clearInterval(progressInterval1); // Stop the interval when 90% is reached
          }
      }, 30); // Adjust speed of progress and label update here
  }, 500); // Delay before starting the first animation (500ms)

  // Add a delay before starting the second progress bar animation
  setTimeout(function() {
      // Second progress bar and label (up to 95%)
      let progressInterval2 = setInterval(function() {
          if (progressValue2 <= 95) {
              progress2.style.width = progressValue2 + '%'; // Update progress bar width
              label2.innerText = progressValue2 + '%'; // Update label percentage
              progressValue2++;
          } else {
              clearInterval(progressInterval2); // Stop the interval when 95% is reached
          }
      }, 30); // Adjust speed of progress and label update here
  }, 500); // Delay before starting the second animation (500ms)
}

// Trigger the function on window load
window.onload = animateProgressBars;
