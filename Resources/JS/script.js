$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
      });


      $('.js--scroll-to-plan').click(function() {
          $('html ,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
      });
      $('.js--scroll-to-start').click(function() {
        $('html ,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
   
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /* animation scroll*/
  $('.js--wp-1').waypoint(function(direction) {
      $('.js-wp-1').addClass('animated fadeIn');
  }, {
    offset: '25%'
  });

//   mobile navigation
 $('.outline-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.outline-icon')
    nav.slideToggle(200);
    if (icon.hasName('apps-outline')) {
        icon.addName('close-outline');
        icon.removeName('apps-outline');
    } else {
        icon.addName('apps-outline');
        icon.removeName('close-outline');
    }

 });


/* var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
}) 

<ion-icon name="close-outline"></ion-icon>
*/