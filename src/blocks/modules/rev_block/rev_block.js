import $ from 'jquery';
import lightGallery from 'lightgallery';
import 'slick-carousel';

const RevBlock = class RevBlock {
    constructor() {}
    lightBlock() {
        $(document).ready(function() {
            lightGallery(document.getElementById('lightgallery'), { 
                speed: 500,
                selector: 'a'
            });
        })
    }
    sliderText() {
        $('.js_sl3').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            prevArrow: $('.rev_prev'),
            nextArrow: $('.rev_next'),
            responsive: [
              {
                breakpoint: 1180,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 840,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
    }
    init() {
        this.lightBlock();
        this.sliderText();
    }
}

export default RevBlock;