	var time = 3;

	function timeCount() {
		timePlay = time;
		var counter=setInterval(timer, 1000);
	   		
		//$('#timePrint').text(time);
		function timer(){
			timePlay = timePlay-1;
			// console.log(timePlay);
		   
			if (timePlay == 0){
				clearInterval(counter);
				console.log('Finish');
				$('#timer').text(timePlay);
				scoreExecute();

			   	timePlay = time;
			  	return;
			}else {
				//clearTimeout(timePlay);
				$('#timer').text(timePlay);
				//console.log(timePlay);
			}
		
		}		

	}

