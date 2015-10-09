$(function() {
	var favorites = [];
	$('button#add').click(function () {
		var newFavorite = $('input#appendInputButton').val();
		favorites.push( newFavorite );	
	});
	$('#submit').click(function(event) {
		event.preventDefault();
	});
});