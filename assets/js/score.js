
var point = 0;
function pointCounter(){
	point = point+1;
	$('#score').text(point);
}


function postScore(){
	
	var name = $('#nameScore').val();
	if (name != '') {
		var score = $('#finalscore').text();
		var highscore = localStorage.getItem("scoreHighScore");
		var scoreCheck = parseInt(score);

		if (highscore =='') {highscore = 0;}
		if (scoreCheck > highscore) {
			localStorage.setItem("scoreHighScore", score);
			localStorage.setItem("nameHighScore", name);
		}else{
			localStorage.setItem("scoreLastScore", score);
			localStorage.setItem("nameLastScore", name);
		}

		$('#nameScore').val('');
		$('#finalscore').text('00');
		$('#score').text('00');
		point = 0;
		game();

	}else{
		alert('"Name" cannot be empty!!!');
	}
}

function loadScore(){
	var score= localStorage.getItem("scoreHighScore");
	var name= localStorage.getItem("nameHighScore");
	var lscore= localStorage.getItem("scoreLastScore");
	var lname= localStorage.getItem("nameLastScore");


	var scoreCheck = parseInt(score);
	if (!scoreCheck) {
		$('.highscore').hide();
	}else{
		$('.score').text(score);
		$('.name').text(name);
		$('.highscore').show();
	}
	var lscoreCheck = parseInt(lscore);
	if (!lscoreCheck) {
		$('.lastscore').hide();
	}else{
		$('.lscore').text(lscore);
		$('.lname').text(lname);
		$('.lastscore').show();
	}
}