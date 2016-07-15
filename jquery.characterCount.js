/* globals jQuery */
(function ($) {
    'use strict';

    $.fn.charactersRemaining = function (options) {
        var self = this,
            settings = $.extend({
                // defaults
                className: 'charRemaining',
                singleCharacterText: ' character remaining',
                multipleCharacterText: ' characters remaining'
            }, options);

        function charactersRemaining(textarea) {
            var textContent = textarea.val(),
                maxCharacters = parseInt(textarea.attr('maxlength'), 10),
                characters = textContent.length,
                remaining = maxCharacters - characters,
                charMessage = textarea.next('.' + settings.className);

            if (remaining === 1) {
                charMessage.text(remaining + settings.singleCharacterText);
            } else {
                charMessage.text(remaining + settings.multipleCharacterText);
            }
        }

        (function init() {
            self.bind('input selectionchange propertychange', function (event) {
                var that = $(event.currentTarget);
                charactersRemaining(that);
            });

            self.each(function (index, value) {
                var element = $("<span></span>").addClass(settings.className);

                if (!self.next('.' + settings.className).length) {
                    self.after(element);
                }

                charactersRemaining($(value));
            });
        }());

        return self;
    };
}(jQuery));
