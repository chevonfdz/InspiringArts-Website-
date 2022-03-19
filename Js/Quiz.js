/*scroll Button*/

var mybutton = document.getElementById("goTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var time;
function startQuiz() { // only for timer no input from the user(
	var sec = 60;
	document.getElementById("submitButton").disabled = false;//it won't allow to click submit button unless timer is start
	time = setInterval(myTimer, 1000);
	
	var radioButtons = document.getElementsByClassName("answer");// it won't allow to click any options unless timer is start
		for(var i=0;i<radioButtons.length;i++) { 
   			radioButtons[i].disabled = false;
		}
	function myTimer() {	// no need any user input timer will automatically do the steps in submit here when time is 0
		document.getElementById("timer").innerHTML = sec + " seconds";
		sec--;
		if (sec === -1) {
			clearInterval(time);
			alert("Times up!!!");
			document.getElementById("submitButton").disabled = true;
			function answerScore (qName) {
				var radiosNo = document.getElementsByName(qName);

				for (var i = 0, length = radiosNo.length; i < length; i++) {
					if (radiosNo[i].checked) {
						// do something with radiosNo
						var answerValue = Number(radiosNo[i].value);
					}
				}
				
				// change NaNs to zero
				// The isNaN() function returns true if the value is NaN (Not-a-Number), and false if not.
				if (isNaN(answerValue)) {
					answerValue = -1;
				}
				return answerValue;
			}

			// calc score with answerScore function
			var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10'));

			// function to return correct answer string
			function correctAnswer (correctStringNo, qNumber) {
				return ("The correct answer for question " + qNumber + ": &nbsp;<strong>" +
					(document.getElementById(correctStringNo).innerHTML) + "</strong>");
				}
		
			// print correct answers only if wrong (calls correctAnswer function) - timer when 0
			if (answerScore('q1') === -1) {
				document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
			}
			if (answerScore('q2') === -1) {
				document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
			}
			if (answerScore('q3') === -1) {
				document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
			}
			if (answerScore('q4') === -1) {
				document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
			}
			if (answerScore('q5') === -1) {
				document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
			}
			if (answerScore('q6') === -1) {
				document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
			}
			if (answerScore('q7') === -1) {
				document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
			}
			if (answerScore('q8') === -1) {
				document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
			}
			if (answerScore('q9') === -1) {
				document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
			}
			if (answerScore('q10') === -1) {
				document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
			}

			// show score as "score/possible score"
			var showScore = "Your Score: " + calcScore +"/20";
			document.getElementById('userScore').innerHTML = showScore;
			var text = document.getElementById("timer").innerHTML;
				var number = parseInt(text, 10); 
			var showTime = "You have completed in " + (60-number) + " seconds";
			document.getElementById("timeRemain").innerHTML = showTime;
			if (calcScore < 5) {
				document.body.style.backgroundImage = "linear-gradient(to right,#e3392d,#A61919)";
			}
			else if (calcScore < 10) {
				document.body.style.backgroundImage = "linear-gradient(to right,orange,#c2932f)";
			}
			else if (calcScore < 15) {
				document.body.style.backgroundImage = "linear-gradient(to right,#ffd500,#a6901f)";
			}
			else {
				document.body.style.backgroundImage = "linear-gradient(to right,green,#1c6b1a)";
			}
		} 	
	}
}
	
function submitQuiz() { // only happen when we click submit button
	clearInterval(time);
	// get each answer score
	function answerScore (qName) {
		var radiosNo = document.getElementsByName(qName);

		for (var i = 0, length = radiosNo.length; i < length; i++) {
   			if (radiosNo[i].checked) {
			// do something with radiosNo
				var answerValue = Number(radiosNo[i].value);
			}
		}
			// change NaNs to -1
			// The isNaN() function returns true if the value is NaN (Not-a-Number), and false if not.
			if (isNaN(answerValue)) {
				answerValue = -1;
			}
			return answerValue;
	}

	// calc score with answerScore function
	var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + answerScore('q8') + answerScore('q9') + answerScore('q10'));

	// function to return correct answer string
	function correctAnswer (correctStringNo, qNumber) {
		return ("The correct answer for question " + qNumber + ": &nbsp;<strong>" +
			(document.getElementById(correctStringNo).innerHTML) + "</strong>");
	}

	// print correct answers only if wrong (calls correctAnswer function) - submit button is clicked
	if (answerScore('q1') === -1) {
		document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
	}
	if (answerScore('q2') === -1) {
		document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
	}
	if (answerScore('q3') === -1) {
		document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
	}
	if (answerScore('q4') === -1) {
		document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
	}
	if (answerScore('q5') === -1) {
		document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
	}
	if (answerScore('q6') === -1) {
		document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
	}
	if (answerScore('q7') === -1) {
		document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
	}
	if (answerScore('q8') === -1) {
		document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
	}
	if (answerScore('q9') === -1) {
		document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
	}
	if (answerScore('q10') === -1) {
		document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
	}

	// show score as "score/possible score"-
	var showScore = "Your Score: " + calcScore +"/20";
	document.getElementById("userScore").innerHTML = showScore;
	var text = document.getElementById("timer").innerHTML;
		var number = parseInt(text); 
	var showTime = "You have completed in " + (60-number) + " seconds";
	document.getElementById("timeRemain").innerHTML = showTime;
	if (calcScore < 5) {
		document.body.style.backgroundImage = "linear-gradient(to right,#e3392d,#A61919)";
	}
	else if (calcScore < 10) {
		document.body.style.backgroundImage = "linear-gradient(to right,orange,#c2932f)";
	}
	else if (calcScore < 15) {
		document.body.style.backgroundImage = "linear-gradient(to right,#ffd500,#a6901f)";
	}
	else {
		document.body.style.backgroundImage = "linear-gradient(to right,green,#1c6b1a)";
	}
}