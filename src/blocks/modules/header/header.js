import $ from 'jquery';

const HeaderBlock = class HeaderBlock {
    constructor() {}
    burgerBlock() {
        $(window).resize(function(){
              if (window.matchMedia("(min-width: 991px)").matches) {
                $('.menu-top-wrap').insertAfter($('.fidex-panel'));
                $('.site-content-wrap').append($('.site-content-left'));
              }
          
          
            if (window.matchMedia("(max-width: 990px)").matches) {
              $('.burger-wrap .burger-body').append($('.menu-top-wrap'));
              $('.burger-wrap .burger-body').append($('.site-content-left'));
            } else {
              $('#menu').append($('.menu-top-wrapper'));
              $('.menu-left-wrapper-wr').append($('.menu-left-wrapper'));
            }
        });
        $(window).trigger('resize');
          
          
        function burg(){
            var burgerWr = $('.burger-wrap'),
              burgerBtn = $('.burger-btn'),
              burgerBody = $('.burger-body'),
              burgerCloseBtn = $('.burger-close-btn');
            
            burgerBtn.on('click', function(){
              $(burgerWr).addClass('opened');
              $('html').addClass('owh');
            });
            
            burgerCloseBtn.on('click', function(){
              $(burgerWr).removeClass('opened');
              $('html').removeClass('owh');
            })
        }
          
        burg();
          
          
        $(document).on('click', function(e){
            if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
            return
            
            $('.burger-wrap').removeClass('opened');
            $('html').removeClass('owh');
        });
    }
    init() {
        this.burgerBlock();
    }
}

export default HeaderBlock;