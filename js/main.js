// Append the following right before the closing "})(jQuery);" in assets/js/main.js:

	// Classroom Projector Mode Toggle
		var $projectorToggle = $('#projectorToggle');
		if ($projectorToggle.length) {
			$projectorToggle.on('click', function(e) {
				e.preventDefault();
				var isProjector = $body.toggleClass('projector-mode').hasClass('projector-mode');
				$(this).attr('aria-pressed', isProjector ? 'true' : 'false');
				var $status = $(this).find('.projector-status');
				if ($status.length) {
					$status.text(isProjector ? 'ON' : 'OFF');
				}
			});
		}

	// Back to Top Button
		var $backToTop = $('<button type="button" class="back-to-top-btn" id="backToTop" aria-label="Back to top" title="Back to top">&uarr;</button>')
			.appendTo($body);

		$window.on('scroll', function() {
			if ($window.scrollTop() > 300)
				$backToTop.addClass('visible');
			else
				$backToTop.removeClass('visible');
		});

		$backToTop.on('click', function() {
			$('html, body').animate({ scrollTop: 0 }, 300);
		});

	// Keyboard Navigation for Classroom Walkthrough
		$(document).on('keydown', function(e) {
			if (['input', 'textarea', 'select'].includes(document.activeElement.tagName.toLowerCase()))
				return;

			if (e.key === 'ArrowRight') {
				var $nextBtn = $('.walkthrough-btn.next');
				if ($nextBtn.length)
					window.location.href = $nextBtn.attr('href');
			} else if (e.key === 'ArrowLeft') {
				var $prevBtn = $('.walkthrough-btn.prev');
				if ($prevBtn.length)
					window.location.href = $prevBtn.attr('href');
			}
		});
