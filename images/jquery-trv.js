;(function($) {

    $.fn.placeholder = function(options) {
        if ('placeholder' in document.createElement('input')) return this;
        var elements = this
           ,opts     = $.extend({}, $.fn.placeholder.defaults, options);
        elements.each(function(){ addPlaceholder($(this), opts); });
        return this;
    }

    function addPlaceholder(trgt, opt) {
        if (!(ph = trgt.attr('placeholder'))) return;
        trgt.data(opt)
            .focus(focusMethod)
            .blur(blurMethod)
            .trigger('blur');

        function focusMethod() {
            var t = $(this);
            if (t.val() === t.attr('placeholder')) t.val('').css('color', t.data('acolor'));
        }
        function blurMethod() {
            var t = $(this)
               ,v = t.val().replace(/[\s\t\n\r]/g,'');
            if (!v || v === t.attr('placeholder')) t.css('color', t.data('ncolor')).val(t.attr('placeholder'));
        }
    }

    $.fn.placeholder.defaults = {
        acolor : '#000'
       ,ncolor : '#ccc'
    };

})(jQuery);
