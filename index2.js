

document.write("<BR>Welcome to the guessing game. I'll pick a number<BR>");
document.write("between 1 and 100 and you try to guess what it is.<BR>");
document.write("You get 7 tries.<BR>");


var computerNumber = Math.floor(Math.random()*100)+1
var userGuess; //will hold what they guess

var totalGuesses = 0; // will hold the total they guessed
playerButton.disabled=false; //disable as true disables the button, this ables it

//the input and outputs
var playerInput = document.querySelector('#input');
var output = document.querySelector('#output');

function Main(){
	totalGuesses = totalGuesses +=1;
	userGuess = parseInt(input.value); //parseInt

		if(userGuess > computerNumber){
			output.innerHTML="That's too high. Tou have made"+totalGuesses+" guesses"
		}
		else if(userGuess< computerNumber)
		{
			output.innerHTML= "That's too low. You have made"+totalGuesses+" guesses"
		}
		else if(userGuess === computerNumber)
		{
			output.innerHTML = "<h3>YOU GOT IT!</h3>";
		}

		if (totalGuesses>=7){
			output.innerHTML="<h3>You have used all 7 guesses<br> The number is </h3>" + computerNumber;
			playerButton.disabled=true;
		}
		

}

// do
// 	{
// 	counter++;

// 	var guess = prompt("What's your guess?");
// 	document.write("Guess #"+counter+" was "+guess+"<BR>");

// 	if (guess == number) {
// 		document.write("You guessed it! YOU ATE THE RED PILL<BR>");
// // var matrix = document.getElementById("matrix"),
// //     ctx = matrix.getContext("2d");

// // var config = {
// //   amount: 70,     // of "data" rows going down (will incrase with time)
// //   speed: 60,      // time between movements in ms (lower = faster)
// //   size: 15,       // in px
// //   minLength: 5,
// //   maxLength: 11,
// //   firstColor: "#fff",
// //   rowColor: "#0f0"
// // }

// // var datarray = [];

// // var width = ctx.canvas.width = window.innerWidth,
// //     height = ctx.canvas.height = window.innerHeight;

// // /*
// // Data colum object
// // =============
// // */
// // function Data(x) {
// //   this.x = x;
// //   this.y = 0;
// //   this.history = [];
// //   this.historySizeMax = Math.floor(Math.random() * config.maxLength + config.minLength);
// // };

// // Data.prototype.update = function() {
// //   this.y += config.size;
// //   if(this.y >= height + this.historySizeMax * config.size) {
// //     datarray.splice(datarray.indexOf(this), 1);
// //     putData();
// //   }

// //   this.history.unshift(String.fromCharCode(60 + Math.floor(Math.random() * 62)));
// //   if(this.history.length > this.historySizeMax) this.history.pop();
// // };

// // Data.prototype.draw = function() {

// //   ctx.fillStyle = config.firstColor;
// //   ctx.shadowColor = config.firstColor; 
// //   ctx.fillText(this.history[0], this.x, this.y);

// //   ctx.fillStyle = config.rowColor;
// //   ctx.shadowColor = config.rowColor; 
// //   for(var i = 1; i < this.history.length; i++) {
// //     ctx.fillText(this.history[i], this.x, this.y - i * config.size);
// //   }

// // };

// // var count = Math.floor(width / config.size);
// // function putData() {
// //   var pos = Math.floor(Math.random() * count) * config.size;
// //   datarray.push(new Data(pos));
// // }

// // /*
// // Init & loop
// // =============
// // */
// // ctx.font = config.size + "px monospace";

// // ctx.shadowOffsetX = 1; 
// // ctx.shadowOffsetY = 1; 
// // ctx.shadowBlur = 6;

// // setInterval(function(){
// //   ctx.clearRect(0, 0, width, height);

// // 	if(datarray.length < config.amount) putData();

// //   for(var i = 0; i < datarray.length; i++) {
// //     datarray[i].update();
// //     datarray[i].draw();
// //   }
// // }, config.speed);
// 		}
// 	else  {
// 		if (guess < number)  {
// 			document.write("Too small, guess again.<BR>");
// 			}
// 		else  {
// 			document.write("Too big, guess again.<BR>");
// 			}
// 		}

		
// 	} while (counter <7 && guess != number);

// if (guess != number) {
// 		document.write("I fooled you 7 times - the number was " + number+".<BR>");
// 		}

