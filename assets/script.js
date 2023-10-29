// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLengthPrompt = prompt("How many characters would you like your password to have?")
var upperCaseConfirm = ""
var specialConfirm = ""
var numberConfirm = ""
var lowerCaseConfirm = ""
      
// Function to prompt user for password options
function getPasswordOptions() {
  //PROMPT the user for the length of the password - make this a variable
    if(passwordLengthPrompt > 7 && passwordLengthPrompt < 129){
       upperCaseConfirm = confirm("would you like upper case letter?");
       specialConfirm = confirm("Would you like special characters?");
       numberConfirm = confirm("Would you like number?");
       lowerCaseConfirm = confirm("Would you like lower case letters?");
    } else {
      //error handler to catch values below 8 and above 128
      return alert("Your password must be between 8 and 128 characters");
    };
};

// Function for getting a random element from an array
function getRandom(arr) {
  var length = arr.length
  var random = arr[Math.floor(Math.random() * length)];
  return random;
}

// Function to generate password with user input
function generatePassword(length) {
  var genPass = ""

  for(i = 0; i < length.length; i++){
    if(upperCaseConfirm){
      genPass += getRandom(upperCasedCharacters)
    }
    if(specialConfirm){
      genPass += getRandom(specialCharacters)
    }
    if(numberConfirm){
      genPass += getRandom(numericCharacters)
    }
    if(lowerCaseConfirm){
      genPass += getRandom(lowerCasedCharacters)
    }
  }
  return genPass;
  //CONCAT the arrays and pull random indexes from the total
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions();
console.log(generatePassword(passwordLengthPrompt))