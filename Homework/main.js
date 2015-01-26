$(document).ready (onReady);

function onReady (searchInput) {
	
	$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		
		console.log($('#search-box').val());

		$('#results').html($('#search-box').val());
	}

}





