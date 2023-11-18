// Arrays with all the different characters
var generateBtn = document.querySelector("#generate"); 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

// function that generates the password
function generatePassword() {
  var updatedPassword = "";
  
  var passLength = prompt("How long do you want your password?");
  // if the password is between 8 and 128 characters it continues asking the rest of the prompts
  passLength = parseInt(passLength);
  if (passLength >= 8 && passLength <= 128) {
    var checkUpper = confirm("Would you like to include Upper Case letters?");
    var checkLower = confirm("Would you like to include Lower Case letters?");
    var checkNumbers = confirm("Would you like to include numbers?");
    var checkSpecial = confirm("Would you like to include special characters?");
    if(checkUpper === false && checkLower === false && checkNumbers === false && checkSpecial === false) {
      alert("You must chose at least one type of character.")
      return;
    }
    // runs a for loop for the amount of characters selected and checks which prompts were slected then uses math.random to pick random characters from the arrays
    for (let i = 0; i < passLength; i++) {

      if (checkUpper === true && updatedPassword.length < passLength) {
        var index = Math.floor(Math.random() * upperCase.length);
        var upper = upperCase[index];
        updatedPassword = updatedPassword + upper;
      }

      if (checkLower === true  && updatedPassword.length < passLength) {
        var index = Math.floor(Math.random() * lowerCase.length);
        var lower = lowerCase[index];
        updatedPassword = updatedPassword + lower;
      }

      if (checkNumbers === true && updatedPassword.length < passLength) {
        var index = Math.floor(Math.random() * numbers.length);
        var nums = numbers[index];
        updatedPassword = updatedPassword + nums;
      }

      if (checkSpecial === true && updatedPassword.length < passLength) {
        var index = Math.floor(Math.random() * specialChar.length);
        var special = specialChar[index];
        updatedPassword = updatedPassword + special;
      }
    }
  } else {
    alert("Password needs to be between 8 and 128 characters.");
    return;
  }
  return updatedPassword

}
// Updates the passowrd field with your new password
function writePassword() {                                    
  var password = generatePassword();                          
  var passwordText = document.querySelector("#password");     

  passwordText.value = password;                              
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 