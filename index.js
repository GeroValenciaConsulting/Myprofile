$(document).ready(function() {
    // Function to animate elements when they come into view
    function animateOnScroll() {
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
  
      // Add animation class to elements in view
      $(".animate-on-scroll").each(function() {
        var elementTop = $(this).offset().top;
        if (elementTop <= windowBottom) {
          $(this).addClass("animate__animated animate__fadeIn");
        }
      });
    }
  
    // Call the animation function on scroll
    $(window).scroll(function() {
      animateOnScroll();
    });
  
    // Call the animation function on page load
    animateOnScroll();
  });
  