// Detecting Button Press

// Select all buttons with the class "drum"
var buttons = document.querySelectorAll(".drum");

// Iterate over each button and add an event listener for the "click" event
buttons.forEach(function (element) {
  element.addEventListener("click", function () {
    // Get the inner text (or letter) of the clicked button
    var buttonInnerHTML = this.innerHTML;

    // Call the makeSound function and pass the button's text as an argument
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

// Detecting Keyboard Press

// Listen for any keypress event on the document
document.addEventListener("keypress", function (event) {
  // Convert the pressed key to lowercase (to ensure consistency)
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

// Function to play the corresponding sound based on the key input
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3"); // Create new Audio object for "tom-1" sound
      audio.play(); // Play the sound
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3"); // Create new Audio object for "tom-2" sound
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3"); // Create new Audio object for "tom-3" sound
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3"); // Create new Audio object for "tom-4" sound
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3"); // Create new Audio object for "snare" sound
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3"); // Create new Audio object for "crash" sound
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3"); // Create new Audio object for "kick-bass" sound
      audio.play();
      break;

    default:
      break; // Do nothing if a key other than the specified ones is pressed
  }
}

// Function to play Animation based on the key input
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
