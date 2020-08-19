var time = 10;

function game(){
	loadScore();
	$('#homepage').show();
	$('#gameplay').hide();
	$('#afterplay').hide();
}

function play(){
	$('#homepage').hide();
	$('#afterplay').hide();
	$('#gameplay').show();
	timeCount();
}

function scoreExecute(){
	$('#gameplay').hide();
	$('#afterplay').show();
	var score = $('#score').text();
	console.log(score);
	$('#finalscore').text(score);
}

function timeCount() {
	timePlay = time;
	var counter=setInterval(timer, 1000);

	function timer(){
		timePlay = timePlay-1;
	
		if (timePlay == 0){
			clearInterval(counter);
			console.log('Finish');
			$('#timer').text(timePlay);
			scoreExecute();

			timePlay = time;
			return;
		}else {
			$('#timer').text(timePlay);
		}
	}
}