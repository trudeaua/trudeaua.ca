import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Alex\'s Website';
  constructor() {

  }
  ngOnInit() {
    function isElementInViewport(elem) {
      var $elem = $(elem);

      // Get the scroll position of the page.
      var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
      var viewportTop = $(scrollElem).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      // Get the position of the element on the page.
      var elemTop = Math.round($elem.offset().top) - $(document).scrollTop();
      var elemBottom = elemTop + $elem.height();

      return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }

    // Check if it's time to start the animation.
    function checkAnimationLeft() {
      $('.item-left').each((index, element) => {
        // If the animation has already been started

        if (isElementInViewport(element) && !$(element).hasClass("animation-done")) {
          // Start the animation
          $(element).addClass('animate-left');
          $(element).addClass('animation-done');
        }
        else if (!isElementInViewport(element) && $(element).hasClass("animation-done")) {
          if ($(element).hasClass('animate-left')) {
            $(element).removeClass('animate-left');
          }
          $(element).removeClass("animation-done")
          return;
        }
      });
    }

    // Check if it's time to start the animation.
    function checkAnimationRight() {
      $('.item-right').each((index, element) => {

        // If the animation has already been started

        if (isElementInViewport(element) && !$(element).hasClass("animation-done")) {
          // Start the animation
          $(element).addClass('animate-right');
          $(element).addClass('animation-done');
        }
        else if (!isElementInViewport(element) && $(element).hasClass("animation-done")) {
          if ($(element).hasClass('animate-right')) {
            $(element).removeClass('animate-right');
          }
          $(element).removeClass("animation-done")
          return;
        }
      });
    }

    // Capture scroll events
    $(window).scroll(function () {
      checkAnimationLeft();
      checkAnimationRight();
    });
  }
}
