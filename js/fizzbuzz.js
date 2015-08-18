$(document).ready(function () {

	 var number = prompt("Enter a number:");

	 parseInt(number , 10);

	 if (number%1 != 0) {
	 	console.log ("NaN")
	 }

	$('.container').on('click', '#start', playFizzBuzz);

	function playFizzBuzz (event) {
		for (var i = 1; i <= + number; i++) {
			
			if (i%15 == 0) {
			console.log ("FizzBuzz");
			} else if (i%5 == 0) {
			console.log ("Buzz");
			} else if (i%3 == 0) {
			console.log ("Fizz");
			} else {
			console.log (i);
			}
		}
	}


	
});