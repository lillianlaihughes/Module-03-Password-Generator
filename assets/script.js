// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // CHANGE toLowerCase 

  var alphaNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789".split (" "); 
  var specialCharacters = ' !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~'.split (" "); // PULLED FROM WEBSITE LINKED IN ASSIGNMENT NOTES


// WHY IS THIS COMMENTED OUT IN ORANGE?

/* LILLIAN NOTES FROM CLASS ACTIVITY
// Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");
// add code for valid inputs and return a window alert if invalid

function generatePassword() {
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'.split(''); 
  var specialCharacters = '!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~'.split('');
*/


/* MORE LILLIAN NOTES FROM CLASS ACTIVITY

var typefaceEl = document.querySelector('#typeface');
var clearEl = document.querySelector('#clear');
var h1El = document.querySelector('#h1');
var h2El = document.querySelector('#h2');
var h3El = document.querySelector('#h3');
var pEl = document.querySelector('#p');
var textAreaEl = document.querySelector('#textarea');

var elements = [h1El, h2El, h3El, pEl];

var typeface;

// Change event
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});

*/