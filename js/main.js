'use strict';



(function ($) {
    var timer = 700;
    $('.acordion__element--title').click(function () {
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
    $('.close').click(close);
    $('.buttons').click(cancel);
    function open(){
        $('.popup').fadeIn('fast');
        $('.popup__title')
    };
    function close() {
        $('.popup').fadeOut('slow');
    }
    function cancel() {
        $('.popup').fadeOut('slow');
        console.log('You chose CANCEL or Ok.');
    }
})(jQuery);