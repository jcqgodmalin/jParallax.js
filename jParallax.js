/*
 * 		Name: jParallax.js
 *		Version: 1
 *
 * @	License: MIT (https://github.com/jancrisel/jParallax.js/blob/master/LICENSE)
 *		Site: http://www.jhonchrizel.x10host.com/jParallax/
 * 		Github: https://www.github.com/jancrisel/jParallax.js
 *		Copyright 2017 Jhon Chrizel Q. Godmalin
 */


	$(".jparallax").each(function(){
		var $targetObj = $(this);
		var $bgUrl = $targetObj.data('image');
		var $height = $targetObj.data('height');
		var $speed = $targetObj.data('speed');
		($height > 0 || $height != null) ? $height = $height : $height = "auto";
		($speed > 0 || $speed != null) ? $speed = $speed : $speed = 8;
		$targetObj.css({
			'background-image': 'url(' + $bgUrl + ')',
			'position': 'relative',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',
			'background-attachment':'fixed',
			'height': $height+'px'
		});
		
		$(window).scroll(function(){
			var $verticalPos = ($(window).scrollTop() / $speed);
			var $bgPosition = '50% -' + $verticalPos + 'px';
			$targetObj.css({backgroundPosition: $bgPosition});
		}).scroll();
	});
