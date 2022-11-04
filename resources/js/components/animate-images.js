/*
 * Animate Images when in viewport
 *
 */
document.addEventListener('DOMContentLoaded', function () {
  var animateImages = [].slice.call(
    document.querySelectorAll('.js-animate-img')
  );

  if ('IntersectionObserver' in window) {
    var animateImageObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var animateImage = entry.target;
            animateImage.classList.add('fadeInUp');
            animateImage.classList.remove('hidden');
            animateImageObserver.unobserve(animateImage);
          }
        });
      },
      {
        rootMargin: '0px 0px -125px 0px'
      }
    );
    animateImages.forEach(function (animateImage) {
      animateImageObserver.observe(animateImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});
