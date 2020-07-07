(function($) {

  // Get the .gif images from the "data-alt".
	var getGif = function() {
		var gif = [];
		$('img').each(function() {
			var data = $(this).data('alt');
			gif.push(data);
		});
		return gif;
	}

	var gif = getGif();

	// Preload all the gif images.
	var image = [];

	$.each(gif, function(index) {
		image[index]     = new Image();
		image[index].src = gif[index];
	});

/*
	// Change the image to .gif when clicked and vice versa.
	$('figure').mouseenter(function() {

		var $this   = $(this),
				$index  = $this.index(),

				$img    = $this.children('img'),
				$alt 		= $img.attr('alt'),
				$imgSrc = $img.attr('src'),
				$imgAlt = $img.attr('data-alt'),
				$imgExt = $imgAlt.split('.');

				if($alt === 'cover') {
					$img.attr('src', $imgAlt);
					$img.attr('data-alt', $imgSrc)
					$img.attr('alt', 'demo');


				}	/*
					$img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
				} else {

				}


	});*/

	$('figure').on('click', function() {

		var $this   = $(this),
				$index  = $this.index(),

				$img    = $this.children('img'),
				$alt 		= $img.attr('alt'),
				$imgSrc = $img.attr('src'),
				$imgAlt = $img.attr('data-alt'),
				$imgExt = $imgAlt.split('.');

				$img.attr('src', $imgAlt);
				$img.attr('data-alt', $imgSrc)

		if($alt === 'demo') {

			$img.attr('alt', 'cover');

		}else{
				$img.attr('alt', 'demo');
		}
		// Add play class to help with the styling.
		//$this.toggleClass('');

	});

	$( window ).scroll(function() {

		$('img').each(function() {
			var $img   = $(this),

					$alt 		= $img.attr('alt'),
					$imgSrc = $img.attr('src'),
					$imgAlt = $img.attr('data-alt');
				//	$imgExt = $imgAlt.split('.');

					if($alt === 'demo') {
						$img.attr('src', $imgAlt);
						$img.attr('data-alt', $imgSrc)
						$img.attr('alt', 'cover');


		}});

	});

	$( document ).click(function() {

		$('img').each(function() {
			var $img   = $(this),

					$alt 		= $img.attr('alt'),
					$imgSrc = $img.attr('src'),
					$imgAlt = $img.attr('data-alt');
				//	$imgExt = $imgAlt.split('.');

					if($alt === 'demo') {
						console.log("beep");
						$img.attr('src', $imgAlt);
						$img.attr('data-alt', $imgSrc)
						$img.attr('alt', 'cover');


		}});

	});




})(jQuery);
