import $ from 'jquery';
import lightGallery from 'lightgallery';
import 'slick-carousel';

const AboutBlock = class AboutBlock {
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
        $('.js_sl2').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            prevArrow: $('.js_sl1_prev'),
            nextArrow: $('.js_sl1_next'),
          });
    }
    init() {
        this.lightBlock();
        this.sliderText();
    }
}

export default AboutBlock;