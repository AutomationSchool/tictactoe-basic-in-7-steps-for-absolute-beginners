var currentPlayerName = 'X';
var rowName;
var columnName;

var gameOver = false;

var gridDimension = 3;


$('span[name="whoseturn"]').text(currentPlayerName);
$('.gameover').hide();

$('.player[name="X"]').addClass('highlight');
$('.player[name="O"]').addClass('unhighlight');

$('td').click(
		function() {

			if(gameOver) {
				return;
			}
			
			if($(this).text() != '') {
				return;
			}


			if(currentPlayerName == 'X') {
				$(this).text('X');				
			} else {

				$(this).text('O');				
			}

			rowName = $(this).parent().attr("name");
			columnName = $(this).attr("name");


			if(checkIfCurrentPlayerWon_CheckRow() || checkIfCurrentPlayerWon_CheckColumn()
				|| checkIfCurrentPlayerWon_CheckLeftToRightDiagonal()
				|| checkIfCurrentPlayerWon_CheckRightToLeftDiagonal()) {
				
				gameOver = true;
				
				//Announce current player won.
				$('.gameover').show();
				$('span[name="whowon"]').text(currentPlayerName);

				//hide next turn info
				$('.nextmoveby').hide();
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

function checkIfCurrentPlayerWon_CheckLeftToRightDiagonal() {
	var currentPlayerWon = true;
	
	$('tr').each(function() {
		var currentRowName = $(this).attr("name");
		var col = $(this).find('td[name=' + currentRowName + ']');
		if(col.text() != currentPlayerName) {
			currentPlayerWon = false;
		}
	});
	return currentPlayerWon;
}


function checkIfCurrentPlayerWon_CheckRightToLeftDiagonal() {
	var currentPlayerWon = true;

	var rowNumberColumnNumberTotal = parseInt(rowName) + parseInt(columnName);

	if(rowNumberColumnNumberTotal != (gridDimension-1)) {
		return false;
	}
	
	$('tr').each(function() {
		var currentRowName = $(this).attr("name");
		var currentRowNumber = parseInt(currentRowName);
		var columnNumberToCheck = rowNumberColumnNumberTotal - currentRowNumber;
		var col = $(this).find('td[name=' + columnNumberToCheck + ']');
		if(col.text() != currentPlayerName) {
			currentPlayerWon = false;
		}
	});
	return currentPlayerWon;
}