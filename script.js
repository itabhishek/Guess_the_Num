/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
let arr = [];
let correctnum = Math.floor(getRandomNumber());
console.log(correctnum);
window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
  //showYouWon();
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
console.log(numberGuess);

console.log(showme(numberGuess,correctnum));

saveGuessHistory(numberGuess);
displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *

function showme(x,c) {
  if(x == c){
    showYouWon();
  }
  else if(x < c){
    showNumberBelow();
  }
  else showNumberAbove();  
}

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  document.getElementById("result").innerHTML = "";
  arr = [];
  correctnum = Math.floor(getRandomNumber());
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  let number = Math.random() *100;
  return number;
  
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  arr.push(guess);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  for(let i = 0;i<arr.length;i++){
    list +=  "<li class='list-group-item'>";
    list += "You guessed";
    list += arr[i];
    list += "</li>";
  
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("won",text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}
