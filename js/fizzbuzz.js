$(document).ready(function() {}

	$('.container').on('click', '#start', playFizzBuzz);
		
	function playFizzBuzz (event)
		for (var i = 1; i <= 100; i++) {
			console.log (i)}
			if (i%15 == 0) {
			console.log ("FizzBuzz");
			} else if (i%5 == 0) {
			console.log ("Buzz");
			} else if (i%3 == 0) {
			console.log ("Fizz");
			} else {
			console.log (i);
			}}
	})
	
}