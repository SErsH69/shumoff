import $ from 'jquery';
import 'slick-carousel';

const FirstBlock = class FirstBlock {
    constructor() {}
    sliderFirst() {
        $('.js_sl6').not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 1,
            fade: true,
            slidesToScroll: 1,
            dots: true,
            prevArrow: $('.first_slider__arrow--left'),
            nextArrow: $('.first_slider__arrow--right')
          });
        var time = 3;
        var $bar,
          isPause,
          tick,
          percentTime;
        var helpers = {
        addZeros: function (n) {
                return (n < 10) ? '0' + n : '' + n;
            }
        };
          $('.js_sl6').on('afterChange', function(event, slick, currentSlide){
            $('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
          });
      
          var sliderItemsNum = $('.js_sl6').find('.slick-slide').not('.slick-cloned').length;
          $('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

          $bar = $('.slider-progress .progress');

        $('.slider-wrapper').on({
            mouseenter: function() {
            isPause = true;
            },
            mouseleave: function() {
            isPause = false;
            }
        })

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            isPause = false;
            tick = setInterval(interval, 10);
        }

        function interval() {
            if (isPause === false) {
                percentTime += 1 / (time + 0.1);
                $bar.css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    $('.js_sl6').slick('slickNext');
                    startProgressbar();
                }
            }
        }

        function resetProgressbar() {
            $bar.css({
            width: 0 + '%'
            });
            clearTimeout(tick);
        }
        startProgressbar();
    }
    init() {
        this.sliderFirst();
    }
}

export default FirstBlock;