var name = prompt("name");
if (name === "hamza") {
    alert("hi hamza!");
} else if (name === "ichraq") {
    alert("hi ichraq!");
} else {
    alert("hmm who are you!");
}
(function($){
	"use strict";

	$(window).load(function() {
		var $container = $('#fh5co-projects-feed'),
		containerWidth = $container.outerWidth();

		$container.masonry({
			itemSelector : '.fh5co-project',
			columnWidth: function( containerWidth ) {
				if( containerWidth <= 330 ) {
					return 310;
				} else {
					return 330;
				}
			},

			isAnimated: !Modernizr.csstransitions
		});
	});

})(window.jQuery);
