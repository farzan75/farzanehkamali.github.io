/*!
 * HosseinKarami
 * jekyll build for hosseinkarami.com
 * http://hosseinkarami.com
 * @author Hossein Karami
 * @version 1.0.0
 * Copyright 2014. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var obj = $('html');

    $('.js .menu-open').on('click', function(){

      if (obj.hasClass('js-menu-open'))
      {
        obj.removeClass('js-menu-open');
      }
      else
      {
        obj.addClass('js-menu-open');
      }

      return false;
    });
  });

})(jQuery, window, document);
