$(function() {
	//Global variables
	var favorites = [];
	var userName = '';

	//Callback functions to process favorites
	function liWrapped(text) {
		return '<li>' + text + '</li>';
	}

	function appendLiToOutputUl(li) {
		$('#output ul').append(li);
	}

	//Event listener for add button
	$('button#add').click(function () {
		var newFavorite = $('input#appendInputButton').val();
		favorites.push( newFavorite );
		$('input#appendInputButton').val('');
	});

	//Event listener for submit button
	$('#submit').click(function(event) {
		event.preventDefault();
		userName = $('#user-name').val();
		//Get name from name field. If blank, say 'Your' favorites: otherwise 'Name' s favorites:
		if(userName === '') {
			$('#output h2').text("Your favorites:");
		} else {
			$('#output h2').text( userName + "'s favorites:" );
		}
		//Use callbacks to wrap array in li and append each item to output ul
		favorites.map(liWrapped).forEach(appendLiToOutputUl);
		favorites = [];

		$('#output').show();
	});
});