// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope






  function caesar(input, shift, encode = true) {
    let lowerCaseInput = input.toLowerCase(); // ignores capital letters
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (shift === 0 || shift < -25 || shift > 25) {        // checks if "shift" equals 0, OR < -25, OR > 25.
      return false; 
    };

    if (encode) {  // encoding messages
      let encodedMessage = "";
      for (let i = 0; i < lowerCaseInput.length; i++) {
        let letterValue = lowerCaseInput[i];
        let letterCheck = alphabet.includes(letterValue); // checks if alphabet includes input message
        if (!letterCheck) {
          encodedMessage += letterValue;                  // if alphabet does NOT include input message, add input message to encodedMessage string
          continue;                       // explain continue
        }
        let currentLetter = alphabet.indexOf(letterValue);// creates index value for each character in alphabet
        let shiftedLetter = currentLetter + shift;        // takes the index of each character and applies the shift
        if (shiftedLetter > 25) {                         
          shiftedLetter -= 26;                            // subtracts 26 if the shifted index is greater than 25 (wraps alphabet)
        }
        if (shiftedLetter < 0) {
          shiftedLetter += 26;                            // adds 26 if the shifted index is less than 0 (wraps alphabet)
        }
        encodedMessage += alphabet[shiftedLetter];  // ??
      }
      return encodedMessage;
    }

    if (!encode) { // decoding messages
      let decodedMessage = "";
      for (let i = 0; i < lowerCaseInput.length; i++) {
        let letterValue = lowerCaseInput[i];
        let letterCheck = alphabet.includes(letterValue);
        if (!letterCheck) {
          decodedMessage += letterValue;
          continue;
        }
        let currentLetter = alphabet.indexOf(letterValue);
        let shiftedLetter = currentLetter - shift;
        if (shiftedLetter > 25) {
          shiftedLetter -= 26;
        }
        if (shiftedLetter < 0) {
          shiftedLetter += 26;
        }
        decodedMessage += alphabet[shiftedLetter];
      }
      return decodedMessage
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
