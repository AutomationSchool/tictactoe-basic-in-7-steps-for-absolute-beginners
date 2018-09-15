var currentPlayerName = 'X';
var rowName;
var columnName;

var gameOver = false;

$('span[name="whoseturn"]').text(currentPlayerName);
$('.gameover').hide();

$('.player[name="X"]').addClass('highlight');
$('.player[name="O"]').addClass('unhighlight');

$('td').click(
		function() {
			if(currentPlayerName == 'X') {
				$(this).text('X');				
			} else {

				$(this).text('O');				
			}

			rowName = $(this).parent().attr("name");
			columnName = $(this).attr("name");


			if(checkIfCurrentPlayerWon_CheckRow() || checkIfCurrentPlayerWon_CheckColumn()) {
				
				gameOver = true;
				
				//Announce current player won.
				$('.gameover').show();
				$('span[name="whowon"]').text(currentPlayerName);

				return;
			}

			if(currentPlayerName == 'X') {
				$('.player[name="X"]').removeClass('highlight');
				$('.player[name="X"]').addClass('unhighlight');

				$('.player[name="O"]').removeClass('unhighlight');
				$('.player[name="O"]').addClass('highlight');

				currentPlayerName = 'O';
				$('span[name="whoseturn"]').text('O');
			} else {

				$('.player[name="O"]').removeClass('highlight');
				$('.player[name="O"]').addClass('unhighlight');

				$('.player[name="X"]').removeClass('unhighlight');
				$('.player[name="X"]').addClass('highlight');

				currentPlayerName = 'X';
				$('span[name="whoseturn"]').text('X');
			}
		}
	);


function checkIfCurrentPlayerWon_CheckRow() {
	var currentRow = $('tr[name="' + rowName + '"]');
	var currentPlayerWon = true;
	currentRow.children().each(function() {
		if($(this).text() != currentPlayerName) {
			currentPlayerWon = false;
		}
	});
	return currentPlayerWon;
}


function checkIfCurrentPlayerWon_CheckColumn() {
	var currentPlayerWon = true;
	$('tr').each(function() {
		var col = $(this).find('td[name=' + columnName + ']');
		if(col.text() != currentPlayerName) {
			currentPlayerWon = false;
		}
	});
	return currentPlayerWon;
}