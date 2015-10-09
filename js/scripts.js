$(function() {
	var favorites = [];
	var userName = '';
	$('button#add').click(function () {
		var newFavorite = $('input#appendInputButton').val();
		favorites.push( newFavorite );
	});
	$('#submit').click(function(event) {
		event.preventDefault();
		userName = $('#user-name').val();
		//Get name from name field. If blank, say 'Your' favorites: otherwise 'Name' s favorites:
		if(userName === '') {
			$('#output h2').text("Your favorites:");
		} else {
			$('#output h2').text( userName + "'s favorites:" );
		}

		//use favorites.map and a callback to:
			//1. wrap each item in an li tag
			//2. append the item to the #output ul 
		$('#output').show();
	});
});