'use strict';



(function ($) {
    var timer = 700;

    //Two variants for accordion
    //Variant 1

    // $('.accordion__element--title').on('click', showInfo);
    //
    // function showInfo(){
    //     $('.info').not($(this).next()).slideUp(timer).parent();
    //     $(this).next().slideToggle(timer);
    // };

    //Variant 2

    $('.accordion__element--title').click(function () {
        var $this = $(this);
        var $parent = $this.parent();

        if ($parent.hasClass('show')) {
            $this.next().slideUp(timer);
        } else {
            var $element = $parent.parent().find('.show');
            $element.toggleClass('show');
            $element.children('.info').slideUp(timer);
            $this.next().slideDown(timer);
        }
        $this.parent().toggleClass('show');
    });

    $('.clients__button').click(open);
    $('.popup__close').click(close);
    $('.popup__buttons').click(cancel);
    function open(){
        $('.popup').fadeIn(timer);
        $('.popup__title').text(function () {
           var $title = '';
           if ($('.accordion__element').hasClass('show')) {
               $title = $('.accordion__element.show').children('.accordion__element--title').text()
           } else {
               $title = 'Accordion is not open';
           }
           return $title;
        });
    };
    function close() {
        $('.popup').fadeOut(timer);
    }
    function cancel() {
        $('.popup').fadeOut(timer);
        console.log('You chose CANCEL or Ok.');
    }
})(jQuery);