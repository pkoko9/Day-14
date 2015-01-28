$(document).ready(onReady);

// function onReady () {
// 	$.get ('http://www.omdbapi.com/',
// 		{s: 'postman'},
// 		onResultsReceived,
// 		'json'
// 	);

// function onResultsReceived(data) {
// 	console.log (data);
// 	console.log (data.Search[2].Title);
// 	// console.log (data),
// 	}
// }


function onReady () {

	function imdbSearch (query) {
	$.get('http://www.omdbapi.com'
		{s: query,
		 y: '2002'
		 type: 'movie'},
		onResults,
		'json'
	);
	}

	function onResults (data){
		console.log(data);
	}

	var searchTerm = 'Star Wars';
	imdbSearch (searchTerm);
}




function onReady() {

	console.log ();
	$('#search-button').on('click', onSearchButtonCLick);

	function onSearchButtonCLick() {

		console.log ('Hey, my search button was clicked');
	}

}