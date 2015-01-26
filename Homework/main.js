$(document).ready(onReady);
// 1. Build a webpage that has three main elements: a search text box, a search button and a 
// results box. When the user clicks on the search button, display the contents (value) of the 
// search text box in the results box.

// function onReady (searchInput) {
	
// 	$('#search-button').on('click', onSearchButtonClick);

// 	function onSearchButtonClick() {
		
// 		console.log($('#search-box').val());

// 		$('#results').html($('#search-box').val());
// 	}
// }

// 2. Update assignment 1 to now query the IMDB API (via a $.get request) when the user clicks on
//  the search button. console.log the response.

// $(document).ready(onReady);

function onReady (searchInput) {

$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		
		// console.log($('#search-box').val

			myImdbSearch($('#search-box').val())
	}
	function myImdbSearch (query) {
		$.get(
			'http://www.omdbapi.com',
			 {
				s: query,
			},
		onSearchResults,
		'json'
	);

	}
function onSearchResults (data) {
	console.log(data);
}
}




