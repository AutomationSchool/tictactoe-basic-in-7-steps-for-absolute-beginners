var currentPlayerName = 'X';
$('span[name="whoseturn"]').text(currentPlayerName);
$('.player[name="X"]').addClass('highlight');
$('.player[name="O"]').addClass('unhighlight');

$('td').click(
		function() {
			if(currentPlayerName == 'X') {
				$(this).text('X');
				$('span[name="whoseturn"]').text('O');

				$('.player[name="X"]').removeClass('highlight');
				$('.player[name="X"]').addClass('unhighlight');

				$('.player[name="O"]').removeClass('unhighlight');
				$('.player[name="O"]').addClass('highlight');

				currentPlayerName = 'O';
				
			} else {

				$(this).text('O');
				$('span[name="whoseturn"]').text('X');

				$('.player[name="O"]').removeClass('highlight');
				$('.player[name="O"]').addClass('unhighlight');

				$('.player[name="X"]').removeClass('unhighlight');
				$('.player[name="X"]').addClass('highlight');

				currentPlayerName = 'X';
				
			}
		}
	);