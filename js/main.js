$( document ).ready(function() {
	$('.expander').simpleexpand();
	$("#photocontainer").twentytwenty();
	$('.expander').hover(
		function() {
			$( this ).css( "color", "#ad4863" ).css( "font-weight", "bold" );
		}, function() {
			$( this ).css( "color", "#1B515E" ).css( "font-weight", "normal" );
		}
	);
});