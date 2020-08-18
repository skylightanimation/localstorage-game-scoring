
var point = 0;
function pointCounter(){
	point = point+1;
	$('#score').text(point);
}


function scoreExecute(){
	$('#gameplay').hide();
	$('#afterplay').show();
	var score = $('#score').text();
	console.log(score);
	$('#finalscore').text(score);
}