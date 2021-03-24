/**
 * __PAGE_NAME__
 *
 * @date 2017-04-07
 */

(function ($) {
  var __NAMESPACE__ = window.__NAMESPACE__ || {};

  __NAMESPACE__.Top = function () {
    var _init = function _init() {
      animeteBoxFunc();
    };

    var animeteBoxFunc = function animeteBoxFunc() {
      var tl_hide = gsap.timeline({ repeatDelay: 0 });
      var tl_show = gsap.timeline({ repeatDelay: 0 });

      function hideAnimateBoxes(from, index) {
        tl_hide.to('.js-bg-box', {
          duration: 0.8,
          scale: 0.0,
          y: 60,
          ease: 'power1.inOut',
          stagger: {
            repeat: 0,
            amount: 0.6,
            grid: 'auto',
            ease: 'power1.inOut',
            from: from
          },
          onComplete: function onComplete() {
            console.log(index);
            setBgIndex(index);
          }
        });
      }

      function showAnimateBoxes(from) {
        tl_show.to('.js-bg-box', {
          duration: 1.0,
          scale: 1.0,
          y: 0,
          ease: 'power1.inOut',
          stagger: {
            repeat: 0,
            amount: 1.0,
            grid: 'auto',
            ease: 'power1.inOut',
            from: from
          }
        });
      }



      var setBgIndex = function setBgIndex(index) {
        var url = 'url(/img/top/img0' + index + '.jpeg)';
        gsap.set($('.js-bg-box'), {
          backgroundImage: url,
          onComplete: function onComplete() {
            console.log('bgc');
            showAnimateBoxes(0);
          }
        });
      };


      $(document).ready(function () {
        $('#fullpage').fullpage({
          navigation: true,
          scrollingSpeed: 3000,
          onLeave: function onLeave(index, nextIndex, direction) {
            console.log(nextIndex);
            hideAnimateBoxes(0, nextIndex);
          },
          afterLoad: function afterLoad(anchorLink, index) {
          }
        });
      });
    };

    function createArray(elms) {
      return Array.prototype.slice.call(elms, 0);
    }

    return {
      init: _init
    };
  }();

  __NAMESPACE__.Top.init();
})(jQuery);