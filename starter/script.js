// Array of special characters to be included in password
var specialCharacters = "!£$%^&*()_-+{}+[]?>\</|";
console.log(specialCharacters);

// Array of numeric characters to be included in password
var numericCharacters = "0123456789"
console.log(numericCharacters)

// Array of lowercase characters to be included in password
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz"
console.log(lowerCasedCharacters.length);

// declare the password length 

var passwordLength = 12; 

// Array of uppercase characters to be included in password
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(upperCasedCharacters.length);

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
//function getRandom(arr) {

//}

// creating array with all characters 
var allChars = upperCasedCharacters + lowerCasedCharacters + numericCharacters + specialCharacters;
console.log(allChars);

// Function to generate password with user input
function generatePassword() {
  const securePassword = "";
  securePassword += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  securePassword += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  securePassword += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  securePassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while(password.length < passwordLength){
    securePassword =+ allChars[Math.floor(Math.random() * allChars.length)];
  }
}

passwordBox.value = securePasswordpassword;

// Get references to the #generate element
//var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);